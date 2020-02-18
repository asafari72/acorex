import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { AXToolbarItem, AXToolbarMenuComponent } from '../../../toolbar';
import { AXMenuItem } from 'projects/acorex-ui/src/lib/core';




@Component({
    selector: 'ax-toolbar-scheduler-view',
    template: `
        <ax-toolbar-menu [items]="items" selection="single" (itemClick)="onItemClick($event)"></ax-toolbar-menu>
    `,
    providers: [{ provide: AXToolbarItem, useExisting: AXToolbarSchedulerViewsComponent }]
})
export class AXToolbarSchedulerViewsComponent {
    constructor() { }

    @ViewChild(AXToolbarMenuComponent, { static: true }) menu: AXToolbarMenuComponent;
    items: AXMenuItem[] = [];

    update(): void {
        this.menu.update();
    }

    @Output()
    onViewChanged: EventEmitter<string> = new EventEmitter<string>();

    onItemClick(e: AXMenuItem) {
        this.onViewChanged.emit(e.name);
    }

}
