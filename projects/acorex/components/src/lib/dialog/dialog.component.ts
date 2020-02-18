import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { AXButtonItem, AXBaseComponent } from '@acorex/core';

@Component({
  selector: 'ax-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AXDialogComponent extends AXBaseComponent {
  @Input()
  message: string;

  @Input()
  buttons: AXButtonItem[] = [];

  constructor() {
    super();
  }

  onClick: Function;

  onInnerClick(item: AXButtonItem) {
    if (this.onClick) {
      this.onClick(item);
    }
  }
}
