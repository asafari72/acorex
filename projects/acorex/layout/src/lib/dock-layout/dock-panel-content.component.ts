import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ContentChild,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import * as Jquery from 'jquery';
@Component({
  selector: 'ax-dock-content',
  template: `
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AXDockPanelContentComponent {
  @ContentChild(TemplateRef, { static: true }) template: TemplateRef<any>;

  constructor(public viewContainerRef: ViewContainerRef, private cdr: ChangeDetectorRef) { }

  @Input()
  caption: string;
  @Input()
  closable: boolean;

  uid: string = 'content-' + Math.floor(Math.random() * 100000000);

  config(): any {
    const conf: any = {};
    conf.type = 'component';
    conf.componentName = 'component';
    conf.content = [];
    conf.title = this.caption;
    conf.uid = this.uid;
    const self = this;
    conf.componentState = {
      text: this.caption,
      render: (el: any) => {
        if (self.template) {
          const view = self.viewContainerRef.createEmbeddedView(self.template);
          view.rootNodes.forEach((element) => {
            el.append(element);
          });
        }
      }
    };
    return conf;
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }
}
