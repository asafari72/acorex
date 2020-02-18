import { Component, OnInit } from '@angular/core';
import { AXMenuItem } from 'acorex-ui';

@Component({
    templateUrl: './dataGrid.page.html',
    styleUrls: ['./dataGrid.page.scss']
})
export class DataGridPage implements OnInit {
    constructor() { }
    gridData: any[] = [
        { name: 'Ali', lastname: 'Safari', age: 27, phone: '09135424277' },
        { name: 'Ali', lastname: 'Safari', age: 27, phone: '09135424277' },
        { name: 'Ali', lastname: 'Safari', age: 27, phone: '09135424277' },
        { name: 'Ali', lastname: 'Safari', age: 27, phone: '09135424277' },
        { name: 'Ali', lastname: 'Safari', age: 27, phone: '09135424277' },
        { name: 'Ali', lastname: 'Safari', age: 27, phone: '09135424277' },
        { name: 'Ali', lastname: 'Safari', age: 27, phone: '09135424277' },
        { name: 'Ali', lastname: 'Safari', age: 27, phone: '09135424277' },
    ];
    commandItems: AXMenuItem[] = [
        {
            name: 'delete',
            type: 'danger',
            icon: 'fas fa-trash-alt text-danger',
            visible: true,
            disable: false
        }
    ];
    ngOnInit(): void { }

    provideData = () => {
        return new Promise((resolve, reject) => {
            resolve(this.gridData);
        });
    }
    onCommandItemClick(e) {

    }
}
