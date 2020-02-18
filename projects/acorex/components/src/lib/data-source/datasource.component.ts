import { Component, ContentChild, EventEmitter, Input } from "@angular/core";
import { AXDataSourceReadParams, AXDataSourceRead } from './read-param';



@Component({
    selector: "ax-data-source",
    template: "<ng-content></ng-content>"
})
export class AXDataSourceComponent {

    onDataReceived: EventEmitter<any> = new EventEmitter<any>();
    onFetchStart: EventEmitter<void> = new EventEmitter<void>();

    @Input()
    provideData: (params: AXDataSourceReadParams) => Promise<any>;

    fetch(params: AXDataSourceReadParams) {
        this.onFetchStart.emit();
        if (this.provideData) {
            this.provideData(params).then(data => {
                this.onDataReceived.emit(data);
            });
        }
    }
}
