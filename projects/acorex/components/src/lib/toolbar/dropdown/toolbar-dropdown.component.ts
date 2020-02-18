
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Attribute } from "@angular/core";
import { AXToolbarItem } from "../toolbar-item";
import { AXPopoverComponent } from "../../popover/popover.component";
import { AXMenuItem, AXBaseComponent } from '../../../core';

@Component({
  selector: "ax-toolbar-dropdown",
  template: `
  <div id="{{uid}}">
    <ax-toolbar-menu [items]="items"  (itemClick)="onItemClick($event)"></ax-toolbar-menu>
    <ax-popover target="#{{uid}}" placement="bottom-start" alignment="top-start" #pop>
      <div class="ax-pad-sm">
        <ng-content></ng-content>
      </div>
    </ax-popover>
  </div>
  `,
  providers: [
    { provide: AXToolbarItem, useExisting: AXToolbarDropdownComponent }
  ]
})
export class AXToolbarDropdownComponent extends AXBaseComponent {

  constructor(
    @Attribute('icon')
    public icon: string,
    @Attribute('text')
    public text: string
  ) {
    super();
  }


  items: AXMenuItem[] = [];



  ngAfterViewInit(): void {
    this.items = [
      {
        name: "action",
        icon: this.icon,
        text: this.text,
        endIcon: "fas fa-angle-down",
        disable: false,
        visible: true,
        type: ""
      }]

  }

  @ViewChild('pop', { static: true })
  pop: AXPopoverComponent;


  onItemClick(e: AXMenuItem) {
    this.pop.toggle();
  }
}
