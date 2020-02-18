import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AXDialogComponent } from './dialog.component';
import { AXButtonModule } from '../button';

@NgModule({
    declarations: [AXDialogComponent],
    imports: [CommonModule, AXButtonModule],
    exports: [AXDialogComponent],
    providers: [],
})
export class AXDialogModule { }