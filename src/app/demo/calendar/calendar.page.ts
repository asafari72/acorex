import { Component } from '@angular/core';
import { AXSelectionList, AXDateTime } from '@acorex/core';

@Component({
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss']
})
export class CalendarPage {
  constructor() {}
  title = 'acorex-framework';
  date: string = '';
  selectedValues: any[] = ['2', '4'];

  handleSelectChange(e) {
    console.log(e);
  }
  items: AXSelectionList[] = [
    {
      value: '1',
      text: 'Items 1'
    },
    {
      value: '2',
      text: 'Items 2'
    },
    {
      value: '3',
      text: 'Items 3'
    }
  ];

  handleSelectedValuesChange(e) {
    console.log(e);
  }
  handleValueChange(e: AXDateTime) {
    console.log(e.date);
    this.date = e.date.toString();
  }
}
