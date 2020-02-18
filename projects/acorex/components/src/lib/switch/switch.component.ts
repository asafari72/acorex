import {
    Component,
    ChangeDetectorRef,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    Output,
    Input,
    EventEmitter
} from '@angular/core';
import {
    AXBaseSizableComponent,
    AXBaseValueComponent,
    AXElementSize,
    AXBaseComponent
} from '@acorex/core';

@Component({
    selector: 'ax-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AXSwitchComponent extends AXBaseComponent implements AXBaseSizableComponent, AXBaseValueComponent<boolean> {
    @Output()
    valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Input()
    value: boolean;

    @Input()
    readonly: boolean;

    @Input()
    disabled: boolean;

    @Input()
    size: AXElementSize;

    constructor(protected cdr: ChangeDetectorRef) {
        super()
    }

    focus(): void { }

}
