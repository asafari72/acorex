import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerPage } from './datepicker.page';
import { AXDatePickerModule } from '@acorex/components';

const MODULES = [AXDatePickerModule];

@NgModule({
  declarations: [DatePickerPage],
  imports: [CommonModule, ...MODULES],
  exports: [DatePickerPage],
  providers: [],
  entryComponents: [DatePickerPage]
})
export class DatePickerPageModule {}
