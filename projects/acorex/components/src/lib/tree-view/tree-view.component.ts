import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ContentChild } from '@angular/core';
import { AXDataSourceComponent } from '../data-source';


@Component({
    selector: 'ax-tree-view',
    templateUrl: './tree-view.component.html',
    styleUrls: ['./tree-view.component.scss'],
    encapsulation: ViewEncapsulation.None,
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class AXTreeViewComponent {

    list: any[] = [];


    @ContentChild(AXDataSourceComponent, { static: true })
    private _contentDataSource: AXDataSourceComponent;

    constructor() {

    }

    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        this._contentDataSource.fetch(null);
        this._contentDataSource.onDataReceived.subscribe(_data => {
            this.list = _data;
            console.log('data', this.list);
        });
    }
    ngAfterViewInit(): void {





    }

    onItemClick(e, v) {

    }


}