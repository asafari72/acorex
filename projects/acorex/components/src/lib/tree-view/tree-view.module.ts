import { NgModule } from '@angular/core';
import { AXTreeViewComponent } from './tree-view.component'
import { AXDataSourceModule } from '../data-source';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [AXTreeViewComponent],
    imports: [AXDataSourceModule, CommonModule],
    exports: [AXTreeViewComponent],
    providers: []
})

export class AXTreeViewModule { }