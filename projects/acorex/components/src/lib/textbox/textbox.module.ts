import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AXTextBoxComponent } from './textbox.component';

const COMPONENT = [AXTextBoxComponent];
const MODULES = [CommonModule];

@NgModule({
    declarations: [...COMPONENT],
    imports: [...MODULES],
    exports: [...COMPONENT],
    providers: [],
})
export class AXTextBoxModule { }