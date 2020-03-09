import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AXTreeViewModule, AXDataSourceModule } from '@acorex/components';

import { TreeView } from './tree-view.page';
import { AXLOVModule } from '@acorex/data-grid';

@NgModule({
    declarations: [TreeView],
    imports: [
        CommonModule,
        AXTreeViewModule,
        AXDataSourceModule, AXLOVModule],
    exports: [TreeView],
    providers: [],
})
export class TreeViewPageModule { }