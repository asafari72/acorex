import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AXToolbarItem } from "../toolbar-item";
import { AXBaseMenuItem } from '../../../core';

@Component({
  selector: "ax-toolbar-group-button",
  template: `
    <div class="btn-group" role="group">
      <button
        type="button"
        *ngFor="let item of items"
        class="btn btn-sm {{ item.style }}"
        [class.active]="item.selected"
        (click)="onClick(item)"
        [title]="item.tooltip"
      >
        <i class="{{ item.icon }}"></i>
        {{ item.text }}
      </button>
    </div>
  `,
  providers: [
    { provide: AXToolbarItem, useExisting: AXToolbarButtonGroupComponent }
  ]
})
export class AXToolbarButtonGroupComponent {
  constructor() { }

  @Input()
  items: AXBaseMenuItem[] = [];

  @Output()
  itemClick: EventEmitter<AXBaseMenuItem> = new EventEmitter<AXBaseMenuItem>();

  @Input()
  mode: "single" | "multiple" = "single";

  onClick(item: AXBaseMenuItem) {
    if (this.mode == "single") {
      this.items.forEach(c => {
        c.selected = false;
      });
      item.selected = true;
      this.itemClick.emit(item);
    } else {
      if (item.selected) {
        item.selected = false;
      } else {
        item.selected = true;
        this.itemClick.emit(item);
      }
    }
  }
}
