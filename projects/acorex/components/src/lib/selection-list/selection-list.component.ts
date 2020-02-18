import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { AXBaseSizableComponent, AXBaseValueComponent, AXBaseComponent, AXElementSize } from '../../core';
import { AXSelectionList } from '../../core/classes/sectionlist.class';

@Component({
  selector: 'ax-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AXSelectionListComponent extends AXBaseComponent
implements AXBaseSizableComponent, AXBaseValueComponent<boolean> {
  private _selectedItems: any[] = [];

  @Input()
  readonly: boolean;

  @Output()
  valueChange: EventEmitter<boolean>;

  @Output()
  selectedItemsChange: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Output()
  selectedValuesChange: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Input()
  value: boolean;

  @Input()
  readOnly: boolean;

  @Input()
  disabled: boolean;

  @Input()
  size: AXElementSize;

  @Input()
  direction: string = 'horizontal';

  @Input()
  items: Array<AXSelectionList> = [];

  @Input()
  mode: string = 'single';

  @Input()
  textField: string = 'text';

  @Input()
  valueField: string = 'value';

  @Input()
  public get selectedItems(): any[] {
    return this._selectedItems || [];
  }
  public set selectedItems(v: any[]) {
    this._selectedItems = v;
    this.selectedItemsChange.emit(this.selectedItems);
    this.cdr.detectChanges();
  }

  @Input()
  public get selectedValues(): any[] {
    return this._selectedItems.map(c => c[this.valueField]) || [];
  }
  public set selectedValues(v: any[]) {
    const old = this.selectedValues;
    if (v == null) {
      v = [];
    }
    if (JSON.stringify(old) != JSON.stringify(v)) {
      this.selectedItems = this.items.filter(c => v.includes(c[this.valueField]));
      this.selectedValuesChange.emit(this.selectedValues);
    }
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  onCheckValueChange(value: any, checked: boolean) {
    if (this.mode === 'single') {
      this.selectedValues = [value];
    } else {
      if (checked) {
        if (!this.selectedValues.includes(value)) {
          this.selectedValues = [...this.selectedValues, ...[value]];
        }
      } else {
        this.selectedValues = this.selectedValues.filter(c => c !== value);
      }
    }
  }
  focus(): void {
  }
}
