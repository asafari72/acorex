import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './demo/home/home.page';
import { ButtonPage } from './demo/button/button.page';
import { I18nPage } from './demo/i18n/i18n.page';
import { PopupPage } from './demo/popup/popup.page';
import { Routes } from '@angular/router';
import { InputPage } from './demo/input/input.page';
import { SelectPage } from './demo/select/select.page';
import { DataGridPage } from './demo/dataGrid/dataGrid.page';
import { CalendarPage } from './demo/calendar/calendar.page';
import { DatePickerPage } from './demo/datepicker/datepicker.page';
import { PanelBoxPage } from './demo/panelbox/panelbox.page';
import { ToastPage } from './demo/toast/toast.page';
import { MenuPage } from './demo/menu/menu.page';
import { TreeView } from './demo/tree-view/tree-view.page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', pathMatch: 'full', component: HomePage },
  { path: 'button', pathMatch: 'full', component: ButtonPage },
  { path: 'calendar', pathMatch: 'full', component: CalendarPage },
  { path: 'input', pathMatch: 'full', component: InputPage },
  { path: 'menu', pathMatch: 'full', component: MenuPage },
  { path: 'panelbox', pathMatch: 'full', component: PanelBoxPage },
  { path: 'popup', pathMatch: 'full', component: PopupPage },
  { path: 'select', pathMatch: 'full', component: SelectPage },
  { path: 'i18n', pathMatch: 'full', component: I18nPage },
  { path: 'datagrid', pathMatch: 'full', component: DataGridPage },
  { path: 'datepicker', pathMatch: 'full', component: DatePickerPage },
  { path: 'toast', pathMatch: 'full', component: ToastPage },
  { path: 'treeView', pathMatch: 'full', component: TreeView }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
