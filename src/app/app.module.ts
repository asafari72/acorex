import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonsPageModule } from './demo/button/button.module';
import { I18nPageModule } from './demo/i18n/i18n.page.module';
import { PopupPageModule } from './demo/popup/popup.module';
import { HomePageModule } from './demo/home/home.module';
import { InputPageModule } from './demo/input/input.module';
import { SelectPageModule } from './demo/select/select.module';
import { DataGridPageModule } from './demo/dataGrid/dataGrid.page.module';


const DEMO = [HomePageModule, ButtonsPageModule, I18nPageModule, PopupPageModule, InputPageModule, SelectPageModule,DataGridPageModule];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...DEMO
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
