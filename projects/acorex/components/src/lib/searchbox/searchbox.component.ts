import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AXBaseTextComponent } from '@acorex/core';

@Component({
  selector: 'ax-search-box',
  templateUrl: './searchbox.component.html',
  host: { style: 'display:flex;align-items:center;flex:1' }
})
export class AXSearchBoxComponent extends AXBaseTextComponent {
  constructor(protected cdr: ChangeDetectorRef) {
    super(cdr);
  }

  @Input()
  delay: number = 500;

  private searchChangeObserver: any;

  onSearchChanged(e: KeyboardEvent) {
    if (!this.searchChangeObserver) {
      Observable.create((observer) => {
        this.searchChangeObserver = observer;
      })
        .pipe(debounceTime(this.delay))
        .pipe(distinctUntilChanged())
        .subscribe((c) => {
          this.value = c;
        });
    }

    this.searchChangeObserver.next((e.target as any).value);
  }

  focus() {}
}
