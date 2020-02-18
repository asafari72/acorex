import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TranslatePipe,
  EventService,
  AXComponentFactoryService,
  TranslateService,
  AXStorageService
} from './services';
import { AXScrollModule } from './utils';
import { AXDateTimePipe } from './pipe';

@NgModule({
  declarations: [TranslatePipe, AXDateTimePipe],
  imports: [
    CommonModule,
    AXScrollModule
  ],
  exports: [TranslatePipe, AXScrollModule, AXDateTimePipe],
  providers: [
    EventService,
    AXComponentFactoryService,
    TranslateService,
    AXStorageService
  ]
})
export class AXCoreModule { }
