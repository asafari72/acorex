import { Input, ViewChild, Output, EventEmitter, ViewEncapsulation, Component } from '@angular/core';
import { AXDropdownComponent } from '../dropdown';
import { AXDateTime,AXValidationRuleResult,AXValidatableComponent} from '@acorex/core';

@Component({
    selector: 'ax-date-picker',
    templateUrl: './date-picker.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./date-picker.component.scss'],
    providers: [
        { provide: AXValidatableComponent, useExisting: AXDatePickerComponent },
    ]
})
export class AXDatePickerComponent extends AXValidatableComponent {
    validate(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    readonly: boolean;
    disabled: boolean;
    @ViewChild('dropdown', { static: true })
    dropdown: AXDropdownComponent;
    @Input() placeholder: string = '';
    @Input() showClear: boolean = false;

    @Input() label: string = null;

    model: any = null;
    _text: string = '';
    constructor() {
        super();
    }

    selectToday() {
    }

    clear(): void {
    }

    focus(): void {
        this.dropdown.focus();
    }

    ngAfterViewInit(): void {
        this.selectToday();
    }

    @Output()
    valueChange: EventEmitter<AXDateTime> = new EventEmitter<AXDateTime>();

    private _value: AXDateTime;
    @Input()
    public get value(): AXDateTime {
        return this._value;
    }
    public set value(v: AXDateTime) {
        if (!v.equal(this._value)) {
            this._value = v;
            this.valueChange.emit(v);
            this._text = v.format('DD/MM/YYYY');
        }
    }


    // validate(): Promise<AXValidationRuleResult> {

    //     return new Promise<AXValidationRuleResult>(resolve => {
    //         if (!this.validator) {
    //             resolve({ result: true });
    //         } else {
    //             // this.validator.validate(this.model).then(r => {
    //             //     r.target = this;
    //             //     if (r.result) {
    //             //         this.errorText = null;
    //             //     } else {
    //             //         this.errorText = r.message;
    //             //     }
    //             //     resolve(r);
    //             // });

    //             resolve()
    //         }
    //     });
    // }

    onDateChange(date: AXDateTime) {
        this.dropdown.close();
    }
}