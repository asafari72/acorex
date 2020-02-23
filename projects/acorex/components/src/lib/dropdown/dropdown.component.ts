import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, Input } from '@angular/core';
import { AXElementSize, AXBaseDropdownComponent } from '@acorex/core';
import { AXPopoverComponent } from '../popover';

@Component({
  selector: 'ax-drop-down',
  templateUrl: './dropdown.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display:flex;align-items:center;flex:1' }
})
export class AXDropdownComponent extends AXBaseDropdownComponent {
  @ViewChild(AXPopoverComponent)
  popSelectBox: AXPopoverComponent;

  constructor() {
    super();
  }

  ngOnInit(): void {}

  handleArrowClick(e: MouseEvent) {
    if (this.disabled !== true) {
      this.popSelectBox.toggle();
    }
  }

  close() {
    this.popSelectBox.close();
  }

  open() {
    this.popSelectBox.open();
  }

  focus() {}
}
