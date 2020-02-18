import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AXHttpResult } from './http-result.class';
import { AXHttpError } from './http-error.class';

import { AXHttpRequestOptions } from './http-request.class';
import {
    AX_HTTP_EVENT_INTERCEPTOR, AXHttpEventInterceptor
} from './http-events.interceptor';
import { AXPromise } from '../classes';


@Injectable({ providedIn: 'root' })
export class AXHttpService {

    private interceptor: AXHttpEventInterceptor;
    constructor(private http: HttpClient, private injector: Injector) {
        this.interceptor = this.injector.get(AX_HTTP_EVENT_INTERCEPTOR);
    }

    get<T>(url: string, config: AXHttpRequestOptions = {}): AXHttpResult<T> {
        config.url = url;
        config.method = 'get';
        return this.request(config);
    }

    post<T>(url: string, config: AXHttpRequestOptions = {}): AXHttpResult<T> {
        config.url = url;
        config.method = 'post';
        return this.request(config);
    }


    request<T>(config: AXHttpRequestOptions): AXHttpResult<T> {
        return new AXHttpResult<T>((result?, error?, complete?) => {
            this.handleBegin(config).then(c => {
                this.http
                    .request<T>(config.method, config.url, this.mapOptions(config))
                    .subscribe(data => {
                        this.handleResult(data, result, complete, config);
                    // tslint:disable-next-line: no-shadowed-variable
                    }, c => {
                        this.handleError(c, error, complete, config);
                    });
            });
        });
    }


    private handleResult(data, result, complete, config: AXHttpRequestOptions) {
        if (this.interceptor) {
            this.interceptor.success(config, data).then(c => {
                if (result) {
                    result(c);
                }
                this.handleComplete(complete, config);
            });
        } else {
            if (result) {
                result(data);
            }
            this.handleComplete(complete, config);
        }
    }

    private handleBegin(config: AXHttpRequestOptions): AXPromise<AXHttpRequestOptions> {
        return new AXPromise((resolve) => {
            if (!config.headers) {
                config.headers = {};
            }
            if (!config.params) {
                config.params = {};
            }
            if (this.interceptor) {
                this.interceptor.begin(config).then(c => {
                    resolve(c);
                });
            } else {
                resolve(config);
            }
        });
    }

    private handleComplete(complete, config: AXHttpRequestOptions) {
        if (complete) {
            complete();
        }
        if (this.interceptor) {
            this.interceptor.complete(config);
        }
    }

    private handleError(c, error, complete, config: AXHttpRequestOptions) {
        const r: AXHttpError = {
            message: c.message,
            status: c.status,
            code: c.status.toString(),
            handled: false,
        };

        if (error) {
            error(r);
        }
        if (!r.handled) {
            if (this.interceptor) {
                this.interceptor.error(config, r);
            }
        }
        this.handleComplete(complete, config);
    }

    private mapOptions(options: AXHttpRequestOptions) {
        let headers = new HttpHeaders();

        for (const key in options.headers) {
            if (options.headers.hasOwnProperty(key)) {
                const value = options.headers[key];
                headers = headers.set(key, value);
            }
        }


        if (options.method === 'get') {
            let params = new HttpParams();
            for (const key in options.params) {
                if (options.params.hasOwnProperty(key)) {
                    const value = options.params[key];
                    params = params.set(key, value);
                }
            }
            return {
                headers,
                params
            };
        } else {
            return {
                headers,
                body: options.params
            };
        }
    }
}
