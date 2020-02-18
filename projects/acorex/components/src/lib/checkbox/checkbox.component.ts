import {
  Component,
  ViewEncapsulation,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { AXBaseComponent, AXBaseSizableComponent, AXBaseValueComponent, AXElementSize } from '../../core';

@Component({
  selector: 'ax-check-box',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AXCheckBoxComponent extends AXBaseComponent implements AXBaseSizableComponent, AXBaseValueComponent<boolean> {

  @Input()
  readonly: boolean;

  @Input()
  disabled: boolean;

  @Input()
  size: AXElementSize;

  @Input()

  label: string = '';

  focus(): void {

  }
  constructor(protected cdr: ChangeDetectorRef) {
    super();
  }
  // Value
  @Output()
  valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  //

  protected _value: boolean = false;
  //
  set value(val: boolean) {
    if (this._value !== val) {
      this._value = val;
      this.valueChange.emit(val);
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    }
  }
  //
  @Input()
  get value(): boolean {
    return this._value;
  }


  handleClick() {
    if (this.readonly) {
      return false;
    }
  }
}
