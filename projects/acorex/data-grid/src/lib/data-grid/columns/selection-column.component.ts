import { AXGridDataColumn } from './column.component';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'ax-selection-column',
    template: '',
    providers: [{ provide: AXGridDataColumn, useExisting: AXGridSelectionColumn }],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AXGridSelectionColumn extends AXGridDataColumn {
    constructor() {
        super();
    }

    ngOnInit(): void {

    }

    render() {

        const col = super.render();
        col.checkboxSelection = true;
        col.headerCheckboxSelection = true;
        col.filter = false;
        col.resizable = false;
        col.sortable = false;
        col.width = 40;

        return col;
    }
}