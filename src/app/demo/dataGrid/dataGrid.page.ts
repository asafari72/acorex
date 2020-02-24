import { Component, OnInit } from '@angular/core';
import { AXMenuItem } from '@acorex/core';
import { AXFilterColumnGroup } from 'projects/acorex/components/src/lib';

@Component({
  templateUrl: './dataGrid.page.html',
  styleUrls: ['./dataGrid.page.scss']
})
export class DataGridPage implements OnInit {
  constructor() {}

  groupDefaultExpanded = -1;

  gridData: any = [
    {
      orgHierarchy: ['Erica Rogers'],
      jobTitle: 'CEO',
      employmentType: 'Permanent'
    },
    {
      orgHierarchy: ['Erica Rogers', 'Malcolm Barrett'],
      jobTitle: 'Exec. Vice President',
      employmentType: 'Permanent'
    },
    {
      orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker'],
      jobTitle: 'Director of Operations',
      employmentType: 'Permanent'
    },
    {
      orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker', 'Brittany Hanson'],
      jobTitle: 'Fleet Coordinator',
      employmentType: 'Permanent'
    },
    {
      orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker', 'Brittany Hanson', 'Leah Flowers'],
      jobTitle: 'Parts Technician',
      employmentType: 'Contract'
    },
    {
      orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker', 'Brittany Hanson', 'Tammy Sutton'],
      jobTitle: 'Service Technician',
      employmentType: 'Contract'
    },
    {
      orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker', 'Derek Paul'],
      jobTitle: 'Inventory Control',
      employmentType: 'Permanent'
    },
    {
      orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland'],
      jobTitle: 'VP Sales',
      employmentType: 'Permanent'
    },
    {
      orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland', 'Morris Hanson'],
      jobTitle: 'Sales Manager',
      employmentType: 'Permanent'
    },
    {
      orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland', 'Todd Tyler'],
      jobTitle: 'Sales Executive',
      employmentType: 'Contract'
    },
    {
      orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland', 'Bennie Wise'],
      jobTitle: 'Sales Executive',
      employmentType: 'Contract'
    },
    {
      orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland', 'Joel Cooper'],
      jobTitle: 'Sales Executive',
      employmentType: 'Permanent'
    }
  ];

  handleMenuItemClick(e) {}
  onFilterChange(e) {}
  filterGroups: AXFilterColumnGroup[] = [
    {
      caption: 'Information',
      columns: [
        {
          caption: 'Number',
          type: 'text',
          field: 'id'
        }
      ]
    }
  ];

  toolbarItemsEnd: AXMenuItem[] = [
    {
      name: 'newCustomer',
      startIcon: 'fas fa-plus',
      style: 'ax-success',
      text: 'Add Customer'
    }
  ];

  commandItems: AXMenuItem[] = [
    {
      name: 'delete',
      type: 'danger',
      startIcon: 'fas fa-trash-alt text-danger',
      visible: true,
      disable: false
    }
  ];
  ngOnInit(): void {}

  provideData = () => {
    return new Promise((resolve) => {
      resolve(this.gridData);
    });
  };

  getDataPath = (item: any) => {
    return item.orgHierarchy;
  };

  autoGroupColumnDef: any = {
    headerName: 'Organisation Hierarchy',
    cellRendererParams: { suppressCount: true }
  };
  onCommandItemClick(e) {}
}
