import { AXHttpError } from './http-error.class';
import { InjectionToken } from '@angular/core';
import { AXHttpRequestOptions } from './http-request.class';
import { AXPromise } from '../classes/promise.class';

export const AX_HTTP_EVENT_INTERCEPTOR = new InjectionToken<AXHttpEventInterceptor>('ax.http.events');

export interface AXHttpEventInterceptor {
    begin(request: AXHttpRequestOptions): AXPromise<AXHttpRequestOptions>;
    success(request: AXHttpRequestOptions, result: any): AXPromise<any>;
    complete(request: AXHttpRequestOptions);
    error(request: AXHttpRequestOptions, error: AXHttpError);
}


