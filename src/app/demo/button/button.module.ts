import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPage } from './button.page';
import {
    AXTextBoxModule,
    AXButtonModule,
    AXFormGroupModule,
    AXLabelModule,
    AXDropdownModule,
    AXSelectBoxModule,
    AXDataSourceModule,
    AXCheckBoxModule,
    AXSearchBoxModule,
    AXRadioButtonModule,
    AXSelectionListModule,
    AXPopupModule
} from '@acorex/components';

const MODULES = [
    AXTextBoxModule,
    AXButtonModule,
    AXFormGroupModule,
    AXLabelModule,
    AXDropdownModule,
    AXSelectBoxModule,
    AXDataSourceModule,
    AXCheckBoxModule,
    AXSearchBoxModule,
    AXRadioButtonModule,
    AXSelectionListModule,
    AXPopupModule
];

@NgModule({
    declarations: [ButtonPage],
    imports: [CommonModule, ...MODULES],
    exports: [ButtonPage],
    providers: [],
    entryComponents: [ButtonPage]
})
export class ButtonsPageModule { }