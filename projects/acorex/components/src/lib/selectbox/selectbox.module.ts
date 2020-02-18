import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AXSelectBoxComponent } from './selectbox.component';
import { AXDropdownModule } from '../dropdown';
import { AXTextBoxModule } from '../textbox';

const COMPONENT = [AXSelectBoxComponent];
const MODULES = [CommonModule, AXDropdownModule, AXTextBoxModule];

@NgModule({
    declarations: [...COMPONENT],
    imports: [...MODULES],
    exports: [...COMPONENT],
    providers: [],
})
export class AXSelectBoxModule { }