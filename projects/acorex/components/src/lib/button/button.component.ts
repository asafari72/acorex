import { Component, OnInit, Input, ViewEncapsulation, ElementRef, ViewChild, HostListener } from '@angular/core';
import { AXBaseButtonComponent } from '../../core';
import { element } from 'protractor';

@Component({
    selector: 'ax-button',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './button.component.html',
})
export class AXButtonComponent extends AXBaseButtonComponent {
    constructor(private el: ElementRef<HTMLSpanElement>) {
        super();
    }

    ngAfterViewInit() {
        if (this.submitBehavior) {
            setTimeout(() => {
                this.focusButton();
            }, 50);
        }
    }

    @ViewChild('span', { static: true }) span: ElementRef<HTMLSpanElement>;

    @ViewChild('container', { static: true }) container: ElementRef;

    @Input()
    type: string = 'primary';

    @Input()
    icon: string;

    @Input()
    submitBehavior: boolean = false;

    @Input()
    cancelBehavior: boolean = false;

    hasLabel: boolean = false;

    ngAfterContentInit(): void {
        this.hasLabel = this.span.nativeElement.childNodes.length > 0;
    }

    handleClick(e: MouseEvent) {
        e.stopPropagation();
        this.click.emit(e);
    }

    @HostListener('document:keydown.escape', ['$event'])
    onKeydownHandler(e: KeyboardEvent) {
        if (this.cancelBehavior) {
            this.handleClick(null);
            e.stopPropagation();
            e.preventDefault();
            return false;
        }
    }

    focusButton() {
        this.container.nativeElement.focus();
    }
}
