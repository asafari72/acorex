import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AXPopupComponent } from './popup.component';
import { AXPopupService } from './popup.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { A11yModule } from '@angular/cdk/a11y';
@NgModule({
  declarations: [AXPopupComponent],
  imports: [CommonModule, DragDropModule, A11yModule],
  exports: [AXPopupComponent],
  entryComponents: [AXPopupComponent],
  providers: [AXPopupService]
})
export class AXPopupModule { }
