import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupPage } from './popup.page';
import { AXButtonModule } from '@acorex/components';

@NgModule({
    declarations: [PopupPage],
    imports: [CommonModule, AXButtonModule],
    exports: [PopupPage],
    providers: [],
})
export class PopupPageModule { }