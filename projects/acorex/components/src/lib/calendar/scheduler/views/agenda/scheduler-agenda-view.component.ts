import { Component, ElementRef, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { AXSchedulerBaseViewComponent } from '../scheduler-view.component';
import { AXSchedulerSlot } from '../../scheduler.class';
import { AXDateTime, AXDateTimeRange } from 'projects/acorex-ui/src/lib/core';

@Component({
    templateUrl: './scheduler-agenda-view.component.html',
    styleUrls: ['./scheduler-agenda-view.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [{ provide: AXSchedulerBaseViewComponent, useExisting: AXSchedulerAgendaViewComponent }]
})
export class AXSchedulerAgendaViewComponent extends AXSchedulerBaseViewComponent {
    constructor(
        private elm: ElementRef<HTMLDivElement>,
        private cdr: ChangeDetectorRef
    ) {
        super();
    }

    hideEmptyDays: boolean = true;

    updateSize() {
    }


    navigate(date: AXDateTime = new AXDateTime()) {
        this.slots = [];
        for (let i = 0; i < this.interval; i++) {
            let d = date.addDay(i);
            const range = new AXDateTimeRange(d, d);
            const slot: AXSchedulerSlot = {
                range,
                events: this.getEvents(range, 'day')
            }
            if (this.hideEmptyDays && slot.events.length === 0) {
                continue;
            }
            this.slots.push(slot);
        }
        this.navigatorDate = date;
        this.cdr.detectChanges();
    }

    next(): void {
        this.navigate(this.navigatorDate.addDay(this.interval));
    }
    prev(): void {
        this.navigate(this.navigatorDate.addDay(-this.interval));
    }
}
