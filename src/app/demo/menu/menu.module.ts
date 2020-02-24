import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPage } from './menu.page';
import { AXCalendarBoxModule } from '@acorex/components';
import { AXMenuModule, AXToolbarModule } from '@acorex/components';

const MODULES = [AXMenuModule, AXToolbarModule];

@NgModule({
  declarations: [MenuPage],
  imports: [CommonModule, ...MODULES],
  exports: [MenuPage],
  providers: [],
  entryComponents: [MenuPage]
})
export class MenuPageModule {}
