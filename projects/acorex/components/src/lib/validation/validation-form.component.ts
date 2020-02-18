import {
  Component,
  OnInit,
  QueryList,
  ContentChildren,
  Input
} from '@angular/core';
import { IValidationResult } from './validation.classs';
import { AXValidatableComponent } from './validation.directive';

@Component({
  selector: 'ax-validation-form',
  template: '<ng-content></ng-content>'
})
export class AXValidationFormComponent {
  constructor() { }

  @ContentChildren(AXValidatableComponent, { descendants: true })
  widgets: QueryList<AXValidatableComponent>;

  @Input()
  validateOn: 'blur' | 'change' | 'submit' = 'submit';

  ngAfterViewInit() {
    this.widgets.forEach(w => {
      if (w.validator && w.validator.validateOn == null) {
        w.validator.validateOn = this.validateOn;
      }
    });
  }

  validate(): Promise<IValidationResult> {
    return new Promise<IValidationResult>(resolve => {
      Promise.all(this.widgets.map((c: any) => { c.validate(); })).then((rules: any) => {
        const failed = rules.filter((c: any) => !c.result);
        if (failed.length) {
          resolve({
            result: false,
            items: failed
          });
        }
        else {
          resolve({ result: true });
        }
      });
    });
  }
}
