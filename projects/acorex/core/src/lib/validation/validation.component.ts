import { Component, ContentChildren, QueryList, Input, Output, EventEmitter } from '@angular/core';
import { AXValidationRule } from './validation-rule.widget';
import { AXValidationRuleResult } from './validation.class';

export class AXValidation {

  items: AXValidationRule[] = [];
  validateOn: 'blur' | 'change' | 'submit' = 'submit';

  validate(value: any): Promise<AXValidationRuleResult> {
    return new Promise<AXValidationRuleResult>(resolve => {
      Promise.all(
        this.items.map(c => {
          return c.validate(value);
        })
      ).then(d => {
        const error = d.find(c => c.result === false);
        if (error) {
          resolve(error);
        } else {
          resolve({ result: true });
        }
      });
    });
  }
}


@Component({
  selector: 'ax-validation',
  template: '<ng-content></ng-content>',
  providers: [{ provide: AXValidation, useExisting: AXValidationComponent }]
})
export class AXValidationComponent extends AXValidation {

  @ContentChildren(AXValidationRule) contentItems: QueryList<AXValidationRule>;


  @Output()
  rulesChange: EventEmitter<AXValidationRule[]> = new EventEmitter<AXValidationRule[]>();

  private _rules: AXValidationRule[];

  @Input()
  public get rules(): AXValidationRule[] {
    return this._rules;
  }
  public set rules(v: AXValidationRule[]) {
    this._rules = v;
    this.rulesChange.emit(v);
  }

  @Input()
  validateOn: 'blur' | 'change' | 'submit' = null;

  ngAfterContentInit() {
    if (this.rules.length === 0) {
      this.rules.push(...this.contentItems.toArray());
    }
  }
}
