import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AXDropdownComponent } from './dropdown.component';
import { AXFormGroupModule } from '../form-group';
import { AXTextBoxModule } from '../textbox';
import { AXButtonModule } from '../button';
import { AXPopoverModule } from '../popover';


const COMPONENT = [AXDropdownComponent];
const MODULES = [CommonModule, AXFormGroupModule, AXTextBoxModule, AXButtonModule, AXPopoverModule];

@NgModule({
    declarations: [...COMPONENT],
    imports: [...MODULES],
    exports: [...COMPONENT],
    providers: [],
})
export class AXDropdownModule { }