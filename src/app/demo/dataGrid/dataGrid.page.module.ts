import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridPage } from './dataGrid.page';
import { AXDataGridModule } from '@acorex/data-grid';
import { AXDataSourceModule, AXPageModule, AXToolbarModule, AXFilterModule } from '@acorex/components';
import { AXDockLayoutModule } from '@acorex/layout';
@NgModule({
    declarations: [DataGridPage],
    imports: [CommonModule, AXDataGridModule, AXDataSourceModule, AXPageModule, AXDockLayoutModule, AXToolbarModule, AXFilterModule],
    exports: [DataGridPage],
    providers: [],
})
export class DataGridPageModule { }
