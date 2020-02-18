import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AXDataGridComponent } from './datagrid.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AXDataSourceModule } from '../data-source/datasource.module';
import { AXGridTextColumn, TextFilterRenderer } from './columns/text-column.component';
import { AXGridCheckColumn, BooleanRenderer, BooleanFilterRenderer } from './columns/check-column.component';
import { AXCoreModule } from '../../core';
import { AXGridSelectionColumn } from './columns/selection-column.component';
import { CommandRenderer, AXGridCommandColumn } from './columns/command-column.component';
import { AXDataGridFilterComponent } from './filters/filter.component';
import { AXGridDateColumn } from './columns/date-column.component';
import { AXDataGridRowTemplateComponent, AXDataGridRowTemplateRenderer } from './templates/row-template.component'
import { AXDataGridCellTemplateComponent, AXDataGridCellTemplateRenderer } from './templates/cell-template.component'
import { AXTextBoxModule } from '../textbox/textbox.module';
import { AXCheckBoxModule } from '../checkbox';
import { AXSelectBoxModule } from '../selectbox';
import { AXButtonModule } from '../button';
import 'ag-grid-enterprise';

@NgModule({
  declarations: [
    AXDataGridComponent,
    AXGridTextColumn,
    AXGridCheckColumn,
    AXGridSelectionColumn,
    AXGridDateColumn,
    AXGridCommandColumn,
    BooleanRenderer,
    BooleanFilterRenderer,
    TextFilterRenderer,
    AXDataGridFilterComponent,
    AXDataGridRowTemplateComponent,
    AXDataGridRowTemplateRenderer,
    AXDataGridCellTemplateComponent,
    AXDataGridCellTemplateRenderer,
    CommandRenderer],
  imports: [
    CommonModule,
    AXCoreModule,
    FormsModule,
    AgGridModule,
    AXTextBoxModule,
    AXCheckBoxModule,
    AXSelectBoxModule,
    AXDataSourceModule,
    AXButtonModule
  ],
  exports: [
    AXDataGridComponent,
    AXDataGridFilterComponent,
    AXDataGridRowTemplateComponent,
    AXDataGridRowTemplateRenderer,
    AXDataGridCellTemplateComponent,
    AXDataGridCellTemplateRenderer,
    AXGridTextColumn,
    AXGridCheckColumn,
    AXGridDateColumn,
    AXGridSelectionColumn,
    AXGridCommandColumn,
    BooleanRenderer,
    BooleanFilterRenderer,
    CommandRenderer
  ],
  entryComponents: [
    BooleanRenderer,
    BooleanFilterRenderer,
    CommandRenderer,
    TextFilterRenderer,
    AXDataGridRowTemplateComponent,
    AXDataGridRowTemplateRenderer,
    AXDataGridCellTemplateComponent,
    AXDataGridCellTemplateRenderer,
  ],
  providers: []
})
export class AXDataGridModule { }
