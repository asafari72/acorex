import { Component, Input } from '@angular/core';
import { AXBaseSizableComponent, AXBaseInputComponent, AXElementSize } from '@acorex/core';
import { AXPopupService } from '@acorex/components';
import { AXDataSourceReadParams } from '@acorex/components';
@Component({
  selector: 'ax-lov',
  templateUrl: './data-lov.component.html',
  styleUrls: ['./data-lov.component.scss']
})
export class AXLOVComponent implements AXBaseSizableComponent, AXBaseInputComponent {
  constructor(private popup: AXPopupService) {}
  selectedValues: any[] = ['2', '4'];

  private dataSource: any[] = [
    { id: '1', title: 'Same Title 1', number: 1000 },
    { id: '2', title: 'Same Title 2', number: 2000 },
    { id: '3', title: 'Same Title 3', number: 3000 },
    { id: '4', title: 'Same Title 4', number: 4000 }
  ];

  @Input()
  readonly: boolean;

  @Input()
  disabled: boolean;

  @Input()
  size: AXElementSize = 'md';

  focus(): void {}

  handleDataReceived = (e: AXDataSourceReadParams) => {
    return Promise.resolve(this.dataSource);
  };

  handleButtonClick() {}

  handleSelectChange(e) {
    console.log(e);
  }
}
