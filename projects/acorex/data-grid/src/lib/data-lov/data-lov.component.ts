import { Component, Input, ContentChildren, QueryList, Output, EventEmitter, ContentChild } from '@angular/core';
import { AXBaseSizableComponent, AXBaseInputComponent, AXElementSize } from '@acorex/core';
import { AXPopupService } from '@acorex/components';
import { AXDataSourceReadParams } from '@acorex/components';
import { AXDataLovPopupComponent } from './data-lov-popup/data-lov-popup.component';
import { AXGridDataColumn } from '../data-grid';
import { AXDataSourceComponent } from 'projects/acorex/components/src/lib';


@Component({
  selector: 'ax-lov',
  templateUrl: './data-lov.component.html',
  styleUrls: ['./data-lov.component.scss']
})
export class AXLOVComponent implements AXBaseSizableComponent, AXBaseInputComponent {
  constructor(private popup: AXPopupService) { }
  selectedValues: any[] = ['2', '4'];

  @ContentChild(AXDataSourceComponent, { static: true })
  dataSource: AXDataSourceComponent;

  @Input()
  readonly: boolean = false;

  @Input()
  disabled: boolean = false;

  @Input()
  size: AXElementSize = 'md';

  @Input()
  label: string;

  @Input()
  selectionMode: 'single' | 'multiple' = 'single';


  @ContentChildren(AXGridDataColumn)
  private columns: QueryList<AXGridDataColumn>;

  @Output()
  onSelectionChange: EventEmitter<any> = new EventEmitter<any>();

  focus(): void { }

  handleDataReceived = (e: AXDataSourceReadParams) => {
    return Promise.resolve(this.dataSource);
  };

  handleButtonClick() {

    this.open();

  }

  handleSelectChange(e) {
    console.log(e);
  }


  public open(): Promise<any> {

    return new Promise((resolve) => {
      this.popup.open(AXDataLovPopupComponent, {
        data: {
          dataSource: this.dataSource,
          selectionMode: this.selectionMode,
          columns: this.columns.toArray()
        },
        title: this.label,
        // size: this.size,
      }).closed(c => {
        if (c.data) {
          this.onSelectionChange.emit(c.data);
          if (resolve) {
            resolve(c.data);
          }
        } else {
          if (resolve) {
            resolve();
          }
        }
      });
    });

  }
}
