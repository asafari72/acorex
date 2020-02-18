import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { AXGridDataColumn } from './column.component';
import { ICellRendererAngularComp, IFilterAngularComp } from 'ag-grid-angular';
import {
  ICellRendererParams,
  IFilterParams,
  RowNode,
  IDoesFilterPassParams,
  IAfterGuiAttachedParams
} from 'ag-grid-community';

@Component({
  selector: 'ax-check-column',
  template: '',
  providers: [{ provide: AXGridDataColumn, useExisting: AXGridCheckColumn }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AXGridCheckColumn extends AXGridDataColumn {
  constructor() {
    super();
  }

  render() {
    const col = super.render();
    if (!col.cellRendererFramework) {
      col.cellRendererFramework = BooleanRenderer;
    }
    if (this.allowFiltering) {
      col.filterFramework = BooleanFilterRenderer;
    }
    return col;
  }
}

@Component({
  template: `
    <ax-check-box [value]='value' readOnly='true'></ax-check-box>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooleanRenderer implements ICellRendererAngularComp {
  value: boolean;
  constructor() { }
  agInit(params: ICellRendererParams): void {
    this.value = params.value;
  }
  refresh(params: ICellRendererParams): boolean {
    this.value = params.value;
    return true;
  }
}

@Component({
  template: `
    <ax-data-grid-filter>
      <ax-select-box
        label='Select Box'
        [items]='selectItem'
      ></ax-select-box>
    </ax-data-grid-filter>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooleanFilterRenderer implements IFilterAngularComp {
  public value?: boolean = null;
  private params: IFilterParams;
  private valueGetter: (rowNode: RowNode) => any;
  @ViewChild('input', { static: true, read: ViewContainerRef }) public input;

  selectItem = [
    { value: 0, label: 'True' },
    { value: 1, label: 'False' },
  ];
  agInit(params: IFilterParams): void {
    this.params = params;
    this.valueGetter = params.valueGetter;
  }

  isFilterActive(): boolean {
    return this.value !== null && this.value !== undefined;
  }

  doesFilterPass(params: IDoesFilterPassParams): boolean {
    return this.value === this.valueGetter(params.node);
  }

  getModel(): any {
    return { value: this.value };
  }

  setModel(model: any): void {
    this.value = model ? model.value : null;
  }

  ngAfterViewInit(params: IAfterGuiAttachedParams): void {
    window.setTimeout(() => {
      this.input.element.nativeElement.focus();
    });
  }

  onChange(newValue): void {
    if (this.value !== newValue) {
      this.value = newValue;
      this.params.filterChangedCallback();
    }
  }
}
