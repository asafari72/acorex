import { NgModule } from '@angular/core';
import { AXToastService } from './toast.service';
import { AXToastWrapperComponent } from './toast-wrapper/toast-wrapper.component';
import { AXToastMessageComponent } from './toast-message/toast-message.component';
import { AXCoreModule } from '@acorex/core';
@NgModule({
  declarations: [AXToastWrapperComponent, AXToastMessageComponent],
  imports: [AXCoreModule],
  exports: [AXToastWrapperComponent],
  entryComponents: [AXToastWrapperComponent, AXToastMessageComponent],
  providers: [AXToastService]
})
export class AXToastModule { }
