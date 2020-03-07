import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AXSearchBoxComponent } from './searchbox.component';
import { AXTextBoxModule } from '../textbox';
import { AXButtonModule } from '../button';
import { AXFormGroupModule } from '../form-group';

@NgModule({
  declarations: [AXSearchBoxComponent],
  imports: [CommonModule, AXTextBoxModule, AXButtonModule, AXFormGroupModule],
  exports: [AXSearchBoxComponent],
  providers: []
})
export class AXSearchBoxModule {}
