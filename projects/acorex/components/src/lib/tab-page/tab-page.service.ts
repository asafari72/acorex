import { Injectable, EventEmitter } from '@angular/core';
import { ClosingAction, ClosingEventArgs, ClosedEventArgs } from '../popup/popup.events';

export interface AXTabPage {
    title: string;
    closable: boolean;
    content: any;
    data?: any;
    id: number;
    uid?: string;
    isBusy?: boolean;
    active: boolean;
    singleton?: boolean;
    closed?: Function;
    closing?: (x: ClosingAction) => void;
    send?: Function;
    pinned?: boolean;
}

export interface AXTabPageOptions {
    content: any;
    title: string;
    closable?: boolean;
    data?: any;
    uid?: string;
    pinned?: boolean;
    singleton?: boolean;
}

export interface AXTabPageMessage {
    tab: AXTabPage;
    data: any;
}



export class AXTabPageResult {
    private _executor: (closing: (e?: ClosingAction) => void, closed: (e?: ClosedEventArgs) => void) => void;
    constructor(private tab: AXTabPage,
        executor: (closing: (e?: ClosingAction) => void, closed: (e?: ClosingEventArgs) => void) => void
    ) {
        this.tab = tab;
        this._executor = executor;
        setTimeout(() => {
            this._executor(this.closingAction, this.closedAction);
        }, 50);
    }


    private closingAction: (e?: ClosingAction) => void;
    private closedAction: (e?: ClosedEventArgs) => void;


    closed(action: (e?: ClosedEventArgs) => void): AXTabPageResult {
        this.closedAction = action;
        return this;
    }
    closing(action: (e?: ClosingAction) => void): AXTabPageResult {
        this.closingAction = action;
        return this;
    }

    send(data: any) {
        this.tab.send(data);
    }
}

@Injectable({ providedIn: 'root' })
export class AXTabPageService {

    tabs: AXTabPage[] = new Array<AXTabPage>();


    opened: (tab: AXTabPage) => void;
    closed: (tab: AXTabPage) => void;
    received: (tab: AXTabPageMessage) => void;

    constructor() {

    }

    open(content: any, title: string): AXTabPageResult;
    open(content: any, title: string, data?: any): AXTabPageResult;
    open(options: AXTabPageOptions): AXTabPageResult;

    open(arg1, arg2?, arg3?) {
        let newTab: AXTabPage;
        const id = new Date().getTime();
        if (typeof (arg1) === 'object') {
            const options = Object.assign({ closable: true }, arg1);
            newTab = {
                id,
                title: options.title,
                closable: options.closable,
                content: options.content,
                data: options.data,
                uid: options.uid,
                active: true,
                singleton: options.singleton,
                pinned: options.pinned,
            };
        }
        else {
            newTab = {
                id,
                title: arg2,
                closable: true,
                content: arg1,
                data: arg3,
                active: true,
            };
        }

        newTab.send = (data: any) => {
            this.sendMessage({ tab: newTab, data });
        }
        return new AXTabPageResult(newTab, (closing, closed) => {
            const existTab = this.tabs.find(c => newTab.uid && c.uid === newTab.uid);
            const singletonTab = this.tabs.find(c => newTab.singleton && (c as any).component === newTab.content);
            if (existTab) {
                this.active(existTab)
            }
            else if (singletonTab) {
                this.active(singletonTab)
            }
            else {
                newTab.closed = (e) => {
                    if (closed) {
                        closed(e);
                    }
                };
                newTab.closing = (e) => {
                    if (closing) {
                        closing(e);
                    }
                    e.resolve();
                }
                this.tabs.push(newTab);
                this.tabs.filter(c => c.id !== newTab.id).forEach(t => {
                    t.active = false;
                });
                this.opened(newTab);
                if (newTab.data) {
                    newTab.send(newTab.data);
                }
            }
        });
    }

    close(tab: AXTabPage, e: ClosingEventArgs) {
        if (tab.content.onClosing) {
            e = Object.assign({ cancel: false }, e);
            let z: ClosingAction = {
                cancel: e.cancel,
                data: e.data,
                resolve: () => {
                    if (tab.closing) {
                        let d: ClosingAction = {
                            cancel: e.cancel,
                            data: e.data,
                            resolve: () => {
                                if (e.cancel !== true) {
                                    this.doCloseAction(tab, e);
                                }
                            }
                        };
                        e.cancel = z.cancel;
                        e.data = z.data;
                        tab.closing(d);
                    }
                    else {
                        if (e == null || e.cancel !== true) {
                            this.doCloseAction(tab, e);
                        }
                    }
                }
            }
            tab.content.onClosing(z);
        }
        else {
            this.doCloseAction(tab, e);
        }
    }

    private doCloseAction(tab: AXTabPage, e: ClosingEventArgs): void {

        this.tabs = this.tabs.filter(c => c.id != tab.id);
        let prev = this.tabs.filter(c => c.id < tab.id).reverse()[0];
        this.active(prev);
        this.closed(tab);
        if (tab.closed) {
            tab.closed(e);
        }
    }



    active(tab: AXTabPage): void;
    active(uid: string): void;
    active(): AXTabPage;
    active(arg1?): void | AXTabPage {
        if (!arg1) {
            return this.tabs.find(c => c.active === true);
        }
        if (typeof (arg1) === 'object') {
            const tab = <AXTabPage>arg1;
            tab.active = true;
            this.tabs.filter(c => c.id !== tab.id).forEach(t => {
                t.active = false;
            });
            this.opened(tab);
        }
        else if (typeof (arg1) === 'string') {
            const tab = this.tabs.find(c => c.uid === arg1);
            if (tab) {
                this.active(tab);
            }
        }
    }





    sendMessage(message: AXTabPageMessage) {
        this.received(message);
    }

    clear(): void {
        this.tabs.forEach(c => {
            this.close(c, {});
        });
        this.tabs = [];
    }

}