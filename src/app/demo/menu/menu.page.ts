import { Component } from '@angular/core';
import { AXMenuItem } from '@acorex/core';

@Component({
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage {
  constructor() {}
  menuItems: AXMenuItem[] = [
    { text: 'New', startIcon: 'fas fa-rocket', style: 'ax primary' },
    { text: 'Remove', startIcon: 'fas fa-rocket' , style: 'ax success' },
    { text: 'Remove', startIcon: 'fas fa-rocket', endIcon: 'fas fa-rocket' },
    { text: 'Update', startIcon: 'fas fa-rocket' },
    {
      text: 'More',
      startIcon: 'fas fa-rocket',
      items: [
        { text: 'New', startIcon: 'fas fa-rocket' },
        { text: 'Remove', startIcon: 'fas fa-rocket' },
        { text: 'Update', startIcon: 'fas fa-rocket' }
      ]
    },
    {
      text: 'More',
      startIcon: 'fas fa-rocket',
      endIcon: 'fas fa-rocket',
      items: [
        { text: 'New', startIcon: 'fas fa-rocket' },
        { text: 'Remove', startIcon: 'fas fa-rocket' },
        { text: 'Update', startIcon: 'fas fa-rocket' }
      ]
    }
  ];
}
