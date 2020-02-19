import { AXHtmlUtil } from '../utils';
import { Input, Output, EventEmitter, ChangeDetectorRef, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { AXValidation } from '../validation';

export type AXElementSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export abstract class AXBaseComponent {
  uid: string = AXHtmlUtil.getUID();
  constructor() {
  }
}


export interface AXBaseSizableComponent {
  size: AXElementSize;
}

export interface AXBaseInteractiveComponent {
  disabled: boolean;
}

export interface AXBaseInputComponent extends AXBaseInteractiveComponent {
  readonly: boolean;
  focus(): void;
}


export interface AXBaseValueComponent<T> extends AXBaseInputComponent {
  valueChange: EventEmitter<T>;
  value: T;
}

export interface AXBaseClickableComponent extends AXBaseInteractiveComponent {
  click: EventEmitter<MouseEvent>;
}

export abstract class AXValidatableComponent extends AXBaseComponent implements AXBaseValueComponent<any>  {
  abstract valueChange: EventEmitter<any>;
  abstract value: any;
  abstract readonly: boolean;
  abstract focus();
  abstract disabled: boolean;
  @ContentChild(AXValidation)
  validator: AXValidation;
}

export abstract class AXBaseTextComponent extends AXValidatableComponent implements AXBaseSizableComponent, AXBaseValueComponent<string> {

  ngAfterViewInit() {
    this.input.nativeElement.onkeyup = (e) => {
      this.value = (e.target as any).value;
      this.onkey.emit(e);
    };
    this.input.nativeElement.onkeydown = (e) => {
      this.onkey.emit(e);
    };
  }

  @ViewChild('input', { static: true })
  input: ElementRef<HTMLInputElement>;

  @Input()
  disabled: boolean = false;

  @Input()
  readonly: boolean = false;

  @Input()
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  @Input()
  placeholder: string;

  constructor(protected cdr: ChangeDetectorRef) {
    super();
  }

  @Output()
  onkey: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter<string>();

  private _value: string;
  @Input()
  public get value(): string {
    return this._value;
  }
  public set value(v: string) {
    if (v !== this._value) {
      this._value = v;
      this.valueChange.emit(v);
      this.cdr.markForCheck();
    }
  }
  abstract focus();
}

export abstract class AXBaseButtonComponent extends AXBaseComponent implements AXBaseClickableComponent, AXBaseSizableComponent {

  @Input()
  disabled: boolean;

  @Output()
  click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  @Input()
  size: AXElementSize;

}

export abstract class AXBaseDropdownComponent extends AXBaseComponent implements AXBaseInteractiveComponent, AXBaseSizableComponent {

  @Input()
  disabled: boolean;

  @Input()
  size: AXElementSize;

  @Input()
  fitParent: boolean = true;

  @Input()
  showDropDownButton: boolean = true;

  abstract close();
  abstract open();
}
