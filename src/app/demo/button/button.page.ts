import { Component } from '@angular/core';
import {  AXSelectionList } from '@acorex/core';

@Component({
    templateUrl: './button.page.html',
    styleUrls: ['./button.page.scss']
})
export class ButtonPage {
    constructor() {

    }
    title = 'acorex-framework';

    selectedValues: any[] = ['2', '4'];

    handleSelectChange(e) {
        console.log(e);
    }
    items: AXSelectionList[] = [
        {
            value: '1',
            text: 'Items 1',
        },
        {
            value: '2',
            text: 'Items 2',
        },
        {
            value: '3',
            text: 'Items 3',
        },
    ];


    handleSelectedValuesChange(e) {
        console.log(e);

    }
}
