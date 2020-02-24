import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { AXBaseSizableComponent, AXBaseComponent, AXElementSize } from '@acorex/core';

@Component({
  selector: 'ax-form-group',
  templateUrl: './form-group.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AXFormGroupComponent extends AXBaseComponent implements AXBaseSizableComponent {
  @Input()
  size: AXElementSize = 'md';

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {}
}
