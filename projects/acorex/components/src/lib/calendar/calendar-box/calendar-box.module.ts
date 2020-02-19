import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AXCalendarBoxComponent } from './calendar-box.component';
import { AXButtonModule } from '../../button';
import { AXPopoverModule } from '../../popover';
import { AXCoreModule } from '@acorex/core';

@NgModule({
  declarations: [AXCalendarBoxComponent],
  imports: [CommonModule, AXButtonModule, AXPopoverModule, AXCoreModule],
  exports: [AXCalendarBoxComponent],
  providers: []
})
export class AXCalendarBoxModule {

  constructor() {
  }

}
