import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Input,
    EventEmitter,
    Output,
    ViewChild,
    ChangeDetectorRef
} from '@angular/core';
import { AXDropdownComponent } from '../dropdown';
import { AXDataListComponent } from '../data-list';
import { AXBaseSizableComponent, AXElementSize, AXBaseInputComponent } from '@acorex/core';
import { AXTextBoxComponent } from '../textbox';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'ax-select-box',
    templateUrl: './selectbox.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AXSelectBoxComponent extends AXDataListComponent implements AXBaseSizableComponent, AXBaseInputComponent {

    @Input()
    showDropDownButton: boolean = true;
    
    @ViewChild(AXTextBoxComponent)
    textbox: AXTextBoxComponent;

    @Input()
    readonly: boolean;

    @Input()
    disabled: boolean;

    @Input()
    size: AXElementSize = 'md';

    text: string = '';

    constructor(private cdr: ChangeDetectorRef) {
        super();
    }

    @ViewChild('d', { static: true }) dropdown: AXDropdownComponent;

    @Input() allowSearch: boolean = false;
    @Input() textField: string = 'text';
    @Input() valueField: string = 'value';
    @Input() mode: 'single' | 'multiple' = 'single';

    // #endregion 

    @Output()
    selectedItemsChange: EventEmitter<any[]> = new EventEmitter<any[]>();

    private _selectedItems: any[] = [];
    @Input()
    public get selectedItems(): any[] {
        return this._selectedItems;
    }
    public set selectedItems(v: any[]) {
        if (!v) {
            v = [];
        }
        this._selectedItems = [...new Set(v)];
        this.waitForData(() => {
            if (this._selectedItems) {
                this.items.forEach(c => (c.selected = false));
                this._selectedItems.forEach(c => (c.selected = true));
            }
            this.selectedItemsChange.emit(this._selectedItems);
        });
    }

    @Output()
    selectedValuesChange: EventEmitter<any[] | any> = new EventEmitter<any[] | any>();

    @Input()
    public get selectedValues(): any[] | any {
        if (this.mode === 'single') {
            return this._selectedItems.map(c => c[this.valueField])[0];
        }
        else {
            return this._selectedItems.map(c => c[this.valueField]) || [];
        }
    }
    public set selectedValues(v: any[] | any) {
        const old = this.selectedValues;
        if (JSON.stringify(old) !== JSON.stringify(v)) {
            this.waitForData(() => {
                if (this.mode === 'single') {
                    this.selectedItems = this.items.filter(c => v === c[this.valueField]);
                }
                else {
                    if (Array.isArray(v)) {
                        this.selectedItems = this.items.filter(c => v.includes(c[this.valueField]));
                    }
                    else if (v) {
                        this.selectedItems = this.items.filter(c => v === c[this.valueField]);
                    }
                    else {
                        this.selectedItems = [];
                    }
                }
                this.selectedValuesChange.emit(this.selectedValues);
            });
        }
    }


    ngAfterViewInit(): void {
        this.refresh();
    }

    handleItemClick(item: any) {
        const value = item[this.valueField];
        if (this.mode === 'single') {
            this.selectedValues = value;
        }
        else {
            const exists = this.selectedValues.slice(0);
            if (exists.includes(value)) {
                this.selectedValues = exists.filter(c => c !== value);
            }
            else {
                exists.push(value);
                this.selectedValues = exists;
            }
        }
        this.dropdown.close();
    }

    handleSearchChanged(text: string) {
        super.fetch({
            searchText: text
        });
    }

    handleKeyEvent(e: KeyboardEvent) {
        if (this.disabled || this.readonly) {
            return false;
        }
        if (e.key === 'Escape') {
            this.dropdown.close();
        }
        else if ((this.text === null || this.text.length === 0) && e.key === 'Backspace' && e.type === 'keydown') {
            if (this.mode === 'multiple') {
                const item = this.selectedItems.pop();
                this.selectedItems = this.selectedItems;
                this.text = item[this.textField];
            }
            else {
                this.selectedItems = null;
            }
        }
        else if ((this.getItems().length > 0) && e.key === 'Enter' && e.type === 'keydown') {
            if (this.mode === 'multiple') {
                this.selectedItems.push(this.getItems()[0]);
                this.selectedItems = this.selectedItems;
            }
            else {
                this.selectedItems = this.getItems()[0];
            }

            this.text = '';
            this.dropdown.close();
        }
        else if ((e.key === 'ArrowDown' || this.text) && (this.getItems().length > 0) && e.type === 'keyup') {
            this.dropdown.open();
        }

        this.cdr.markForCheck();
    }

    focus(): void {
        this.textbox.focus();
    }


    getItems(): any[] {
        if (this.items == null) {
            return [];
        }
        return this.text ?
            this.items.filter(c => (c[this.textField] as string).toLowerCase().includes(this.text.toLowerCase())) :
            this.items;
    }


    private itemsStatusObserver: any;
    private waitForData(callbackfn: () => void) {
        if (this.items.length) {
            callbackfn();
        }
        else if (!this.itemsStatusObserver) {
            Observable.create(observer => {
                this.itemsStatusObserver = observer;
            })
                .pipe(debounceTime(100))
                .pipe(distinctUntilChanged())
                .subscribe(c => {
                    callbackfn();
                });
        }
    }

    ngDoCheck() {
        this.itemsStatusObserver.next(this.items.length);
    }




}
