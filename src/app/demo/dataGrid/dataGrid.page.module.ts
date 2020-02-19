import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridPage } from './dataGrid.page';
import { AXDataGridModule } from '@acorex/data-grid';
import { AXDataSourceModule } from '@acorex/components'

@NgModule({
    declarations: [DataGridPage],
    imports: [CommonModule, AXDataGridModule, AXDataSourceModule],
    exports: [DataGridPage],
    providers: [],
})
export class DataGridPageModule { }
