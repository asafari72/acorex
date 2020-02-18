import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridPage } from './dataGrid.page';
import { AXDataGridModule, AXDataSourceModule } from 'acorex-ui';


@NgModule({
    declarations: [DataGridPage],
    imports: [CommonModule, AXDataGridModule, AXDataSourceModule],
    exports: [DataGridPage],
    providers: [],
})
export class DataGridPageModule { }