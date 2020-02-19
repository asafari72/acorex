import {
  Component,
  OnInit,
  QueryList,
  ContentChildren,
  Input
} from '@angular/core';
import { AXValidationResult } from '../validation';
import { AXValidatableComponent } from '../classes'
@Component({
  selector: 'ax-validation-form',
  template: '<ng-content></ng-content>'
})
export class AXValidationFormComponent {
  constructor() { }

  // @ContentChildren(AXValidatableComponent, { descendants: true })
  // widgets: QueryList<AXValidatableComponent>;

  @Input()
  validateOn: 'blur' | 'change' | 'submit' = 'submit';

  ngAfterContentInit() {
    // this.widgets.forEach(w => {
    //   if (w.validator && w.validator.validateOn == null) {
    //     w.validator.validateOn = this.validateOn;
    //   }
    // });
  }

  validate(): Promise<AXValidationResult> {
    return new Promise<AXValidationResult>(resolve => {
      // Promise.all(this.widgets.map((c: any) => { c.validate(); })).then((rules: any) => {
      //   const failed = rules.filter((c: any) => !c.result);
      //   if (failed.length) {
      //     resolve({
      //       result: false,
      //       items: failed
      //     });
      //   }
      //   else {
      //     resolve({ result: true });
      //   }
      // });
      resolve({
        result: true,
        items: []
      });
    });
  }
}
