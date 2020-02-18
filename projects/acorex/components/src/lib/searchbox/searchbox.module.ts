import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AXSearchBoxComponent } from './searchbox.component';
import { AXTextBoxModule } from '../textbox';
import { AXButtonModule } from '../button';

@NgModule({
    declarations: [AXSearchBoxComponent],
    imports: [CommonModule, AXTextBoxModule, AXButtonModule],
    exports: [AXSearchBoxComponent],
    providers: [],
})
export class AXSearchBoxModule { }