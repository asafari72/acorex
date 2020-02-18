import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AXRadioButtonComponent } from './radiobutton.component';
@NgModule({
  declarations: [AXRadioButtonComponent],
  imports: [CommonModule, FormsModule],
  exports: [AXRadioButtonComponent],
  providers: []
})
export class AXRadioButtonModule { }
