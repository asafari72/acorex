import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AXCalendarBoxComponent } from './calendar-box.component';
import { AXCoreModule } from '../../../core/core.module';
import { AXButtonModule } from '../../button';
import { AXPopoverModule } from '../../popover';

@NgModule({
  declarations: [AXCalendarBoxComponent],
  imports: [CommonModule, AXCoreModule, AXButtonModule, AXPopoverModule],
  exports: [AXCalendarBoxComponent],
  providers: []
})
export class AXCalendarBoxModule {

  constructor() {
  }

}
