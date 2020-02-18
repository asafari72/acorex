import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { AXBaseTextComponent } from '@acorex/core';
import { AXValidationComponent } from '../validation';

@Component({
    selector: 'ax-text-box',
    templateUrl: './textbox.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { style: 'flex:1' }
})
export class AXTextBoxComponent extends AXBaseTextComponent {

    constructor(protected cdr: ChangeDetectorRef) {
        super(cdr);
    }

    ngAfterViewInit() {
        this.input.nativeElement.onkeyup = (e) => {
            this.value = (e.target as any).value;
            this.onkey.emit(e);
        };
        this.input.nativeElement.onkeydown = (e) => {
            this.onkey.emit(e);
        };
    }

    @ViewChild('input', { static: true })
    input: ElementRef<HTMLInputElement>;

    focus() {
        this.input.nativeElement.focus();
    }
}
