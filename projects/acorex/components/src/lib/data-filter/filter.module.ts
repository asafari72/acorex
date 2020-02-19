import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AXFilterPanelComponent } from './filter-panel/filter-panel.component';
import { AXFilterColumnStringComponent } from './columns/filter-column-string.component';
import { FormsModule } from '@angular/forms';
import { AXFilterColumnSelectionComponent } from './columns/filter-column-selection.component';
import { AXFilterColumnDateComponent } from './columns/filter-column-date.component';
import { AXFilterColumnNumberComponent } from './columns/filter-column-number.component';
import { AXToolbarFilterViewComponent } from './toolbar/filter-toolbar.component';
import { AXCheckBoxModule } from '../checkbox';
import { AXTextBoxModule } from '../textbox';
import { AXValidationModule } from '../validation';
import { AXToolbarModule } from '../toolbar';
import { AXMenuModule } from '../menu';
import { AXSelectionListModule } from '../selection-list';
import { AXButtonModule } from '../button';
import { AXToastModule } from '../toast';
import { AXPanelBoxModule } from '../panel-box';
import { AXDatePickerModule } from '../date-picker';



const COMPONENTS = [
    AXFilterPanelComponent,
    AXFilterColumnStringComponent,
    AXFilterColumnSelectionComponent,
    AXFilterColumnDateComponent,
    AXFilterColumnNumberComponent,
    AXToolbarFilterViewComponent,
]

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule,
        FormsModule,
        AXPanelBoxModule,
        AXDatePickerModule,
        AXCheckBoxModule,
        AXTextBoxModule,
        AXValidationModule,
        AXToastModule,
        AXToolbarModule,
        AXMenuModule,
        AXSelectionListModule,
        AXButtonModule
    ],
    exports: [COMPONENTS],
    providers: [],
})
export class AXFilterModule { }