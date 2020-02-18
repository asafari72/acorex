import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AXSwitchComponent } from './switch.component';
import { AXBaseComponent } from '../../core';

@NgModule({
    declarations: [AXSwitchComponent],
    imports: [CommonModule, FormsModule],
    exports: [AXSwitchComponent],
    entryComponents: [AXSwitchComponent],
    providers: [],
})
export class AXFCheckboxEditorModule {

}