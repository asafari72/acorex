import { Injectable, ComponentRef } from '@angular/core';
import { AXPopupComponent } from './popup.component';
import { ClosingAction, ClosedEventArgs, ClosingEventArgs } from './popup.events';
import { AXRenderService } from '../../core';

export class AXPopupResult {
  private _executor: (
    closing: (e?: ClosingAction) => void,
    closed: (e?: ClosingEventArgs) => void
  ) => void;
  constructor(
    private popup: AXPopupComponent,
    executor: (
      closing: (e?: ClosingAction) => void,
      closed: (e?: ClosingEventArgs) => void
    ) => void
  ) {
    this._executor = executor;
    setTimeout(() => {
      this._executor(this.closingAction, this.closedAction);
    }, 50);
  }

  private closingAction: (e?: ClosingAction) => void;
  private closedAction: (e?: ClosedEventArgs) => void;

  closed(action: (e?: ClosedEventArgs) => void): AXPopupResult {
    this.closedAction = action;
    return this;
  }
  closing(action: (e?: ClosingAction) => void): AXPopupResult {
    this.closingAction = action;
    return this;
  }

  dismiss() {
    this.popup.close.emit({});
  }
}

@Injectable({ providedIn: 'root' })
export class AXPopupService {
  private stack: Array<AXPopupComponent> = [];

  constructor(private injection: AXRenderService) { }

  open(content: any, title: string): AXPopupResult;
  open(
    content: any,
    options?: {
      title: string;
      closable?: boolean;
      maximizable?: boolean;
      size?: 'sm' | 'md' | 'lg' | 'full';
      data?: any;
    }
  ): AXPopupResult;

  open(arg1, arg2): AXPopupResult {
    const options: any = { closable: true, size: 'md', maximizable: false };
    if (typeof arg2 === 'string') {
      options.title = arg2;
    } else {
      Object.assign(options, arg2);
    }
    const com = this.injection.appendComponent(AXPopupComponent, options);
    const popup = com.instance as AXPopupComponent;
    popup.content = arg1;
    if (options.size) {
      popup.size = options.size;
    }
    this.stack.push(popup);
    return new AXPopupResult(popup, (closing, closed) => {
      popup.close.subscribe((e: ClosingEventArgs) => {
        if (popup.content.onClosing) {
          e = Object.assign({ cancel: false }, e);
          let z: ClosingAction = {
            cancel: e.cancel,
            data: e.data,
            resolve: () => {
              if (closing) {
                let d: ClosingAction = {
                  cancel: e.cancel,
                  data: e.data,
                  resolve: () => {
                    if (e.cancel != true) {
                      this.closePopup(closed, e, com);
                    }
                  }
                };
                e.cancel = z.cancel;
                e.data = z.data;
                closing(d);
              } else {
                if (e == null || e.cancel !== true) {
                  this.closePopup(closed, {
                    data: z.data
                  }, com);
                }
              }
            }
          };
          popup.content.onClosing(z);
        } else {
          this.closePopup(closed, e, com);
        }
      });
    });
  }

  private closePopup(
    closed: (e?: ClosingEventArgs) => void,
    e: ClosingEventArgs,
    com: ComponentRef<any>
  ) {
    if (closed) { closed(e); }
    com.destroy();
    this.stack.pop();
    if (this.stack.length) { this.stack.reverse()[0].focus(); }
  }
}
