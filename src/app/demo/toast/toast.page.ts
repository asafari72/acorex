import { Component } from '@angular/core';
import { AXToastService } from '@acorex/components';

@Component({
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss']
})
export class ToastPage {
  constructor(private toast: AXToastService) {}

  openInfoToast() {
    this.toast.info('This is sample toast message');
  }

  openSuccessToast() {
    this.toast.success('This is sample toast message');
  }

  openWarningToast() {
    this.toast.warning('This is sample toast message');
  }

  openDangerToast() {
    this.toast.error('This is sample toast message');
  }

}
