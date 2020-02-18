import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { AXBaseSizableComponent, AXBaseComponent, AXElementSize } from '@acorex/core';

@Component({
    selector: 'ax-label',
    templateUrl: './label.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AXLabelComponent extends AXBaseComponent implements AXBaseSizableComponent {
    constructor() {
        super();
    }

    @Input()
    size: AXElementSize;

    ngOnInit(): void { }
}
