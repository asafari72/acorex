import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPage } from './input.page';
import { AXTextBoxModule, AXFormGroupModule, AXButtonModule, AXSearchBoxModule, AXLabelModule } from '@acorex/components';
import {AXLOVModule} from '@acorex/data-grid'




@NgModule({
  imports: [
    CommonModule,
    AXFormGroupModule,
    AXTextBoxModule,
    AXLabelModule,
    AXButtonModule,
    AXSearchBoxModule,
    AXLOVModule
  ],
  declarations: [InputPage],
  exports: [InputPage]
})
export class InputPageModule { }
