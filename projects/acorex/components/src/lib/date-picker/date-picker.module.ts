import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AXValidationModule } from '@acorex/core';
import { AXDatePickerComponent } from './date-picker.component';
import { AXDropdownModule } from '../dropdown';
import { AXCalendarBoxModule } from '../calendar/calendar-box';
@NgModule({
  declarations: [AXDatePickerComponent],
  imports: [CommonModule, FormsModule, AXDropdownModule, AXCalendarBoxModule, AXValidationModule],
  exports: [AXDatePickerComponent],
  providers: []
})
export class AXDatePickerModule { }
