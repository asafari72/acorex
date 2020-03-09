import { Component, OnInit } from '@angular/core';
import { AXMenuItem } from '@acorex/core';
import { AXFilterColumnGroup } from 'projects/acorex/components/src/lib';

@Component({
  templateUrl: './dataGrid.page.html',
  styleUrls: ['./dataGrid.page.scss']
})
export class DataGridPage implements OnInit {
  constructor() { }

  groupDefaultExpanded = -1;
  gridDataChild: any = [
    {
      // orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland', 'Todd Tyler'],
      jobTitle: 'Sales Executive',
      employmentType: 'Contract',
      hasChild: true
    },
    {
      //  orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland', 'Bennie Wise'],
      jobTitle: 'Sales Executive',
      employmentType: 'Contract',
      hasChild: true
    },
    {
      //   orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland', 'Joel Cooper'],
      jobTitle: 'Sales Executive',
      employmentType: 'Permanent',
      hasChild: false
    }
  ]



  gridDataRoot: any = [
    {
      // orgHierarchy: ['Erica Rogers'],
      jobTitle: 'CEO',
      employmentType: 'Permanent',
      hasChild: true
    },
    {
      //orgHierarchy: ['Erica Rogers', 'Malcolm Barrett'],
      jobTitle: 'Exec. Vice President',
      employmentType: 'Permanent',
      hasChild: true
    },
    {
      // orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker'],
      jobTitle: 'Director of Operations',
      employmentType: 'Permanent',
      hasChild: true
    },
    {
      // orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker', 'Brittany Hanson'],
      jobTitle: 'Fleet Coordinator',
      employmentType: 'Permanent',
      hasChild: true
    },
    {
      //  orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker', 'Brittany Hanson', 'Leah Flowers'],
      jobTitle: 'Parts Technician',
      employmentType: 'Contract',
      hasChild: false
    },
    {
      // orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker', 'Brittany Hanson', 'Tammy Sutton'],
      jobTitle: 'Service Technician',
      employmentType: 'Contract',
      hasChild: true
    },
    {
      // orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker', 'Derek Paul'],
      jobTitle: 'Inventory Control',
      employmentType: 'Permanent',
      hasChild: false
    },
    {
      //  orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland'],
      jobTitle: 'VP Sales',
      employmentType: 'Permanent',
      hasChild: true
    },
    {
      // orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland', 'Morris Hanson'],
      jobTitle: 'Sales Manager',
      employmentType: 'Permanent',
      hasChild: true
    },

  ];

  handleMenuItemClick(e) { }
 
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

  onFilterChange(e){

      }
  toolbarItemsEnd: AXMenuItem[] = [
    {
      icon: "fas fa-save success",
      text: "Add"
    },
    {
      icon: "fas fa-trash danger",
      text: "Remove",
      disable: true
    }
  ];


  commandItems: AXMenuItem[] = [
    {
      name: "edit",
      style: "ax success",
      icon: "fas fa-pen text-primary "
    },
    {
      name: "delete",
      style: "ax danger",
      icon: "fas fa-trash-alt text-danger"
    }
  ];
  ngOnInit(): void { }

  provideData = (e) => {
    if (e.groupKeys.length === 0) {
      return new Promise((resolve) => {
        resolve(this.gridDataRoot);
      });
    } else {
      return new Promise((resolve) => {
        resolve(this.gridDataChild);
      });
    }



  };

  columnGroupOpened(e) {
    debugger
  }

  // getDataPath = (item: any) => {
  //   debugger
  //   return item.orgHierarchy;
  // };

  getServerSideGroupKey(e) {
  }
  autoGroupColumnDef: any = {
    headerName: 'Organisation Hierarchy',
    cellRendererParams: { suppressCount: true }
  };
  onCommandItemClick(e) { }
}
