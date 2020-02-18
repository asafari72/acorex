import { Directive, ContentChild } from '@angular/core';
import { IValidationRuleResult } from './validation.classs';
import { AXValidationComponent } from './validation.component';

@Directive()
export abstract class AXValidatableComponent {
    abstract validate(): Promise<IValidationRuleResult>;
    errorText: string = null;
    @ContentChild(AXValidationComponent, { static: true })
    public validator: AXValidationComponent;
}