import { EventEmitter } from '@angular/core';
import { ClosingEventArgs, ClosingAction } from '../classes';

export abstract class AXBasePageComponent {
    closeEvent: EventEmitter<ClosingEventArgs> = new EventEmitter<ClosingEventArgs>();
    close(data?: any) {
        const res = { data };
        this.closeEvent.emit(res);
    }
    onClosing(e: ClosingAction) {
        e.resolve();
    }
    ngOnDestroy() {
        this.closeEvent.unsubscribe();
    }
}