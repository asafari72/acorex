import { Input, EventEmitter, OnDestroy } from '@angular/core';
import { AXDateTime, AXDateTimeRange, TimeUnit } from '../../../../core/calendar/datetime';
import { Output, Directive } from '@angular/core';
import { AXSchedulerSlot, AXSchedulerEventChangeArgs, AXSchedulerEvent, AXSchedulerViewType } from '../scheduler.class';





@Directive()
export abstract class AXSchedulerBaseViewComponent implements OnDestroy {

    type: AXSchedulerViewType;
    timeSlot: number = 1;

    interval: number = 1;

    abstract updateSize(): void;

    abstract next(): void;

    abstract prev(): void;

    abstract navigate(date: AXDateTime): void;

    get dateRange(): AXDateTimeRange {
        if (this.slots && this.slots.length) {
            return new AXDateTimeRange(this.slots[0].range.startTime, this.slots[this.slots.length - 1].range.startTime);
        }
        else {
            return null;
        }
    }


    today: AXDateTime = new AXDateTime();



    @Output()
    onNavigatorDateChanged: EventEmitter<AXDateTime> = new EventEmitter<AXDateTime>();

    private _navigatorDate: AXDateTime;
    public get navigatorDate(): AXDateTime {
        return this._navigatorDate;
    }
    public set navigatorDate(v: AXDateTime) {
        this._navigatorDate = v;
        this.onNavigatorDateChanged.emit(v);
    }

    events: AXSchedulerEvent[] = [];

    slots: AXSchedulerSlot[] = [];

    getEvents(range: AXDateTimeRange, unit: TimeUnit) {
        return this.events.filter(c => c.range.startTime.equal(range.startTime, unit))
    }

    ngAfterViewChecked(): void {
        this.updateSize();
    }

    @Output()
    onEventChanged: EventEmitter<AXSchedulerEventChangeArgs> = new EventEmitter<AXSchedulerEventChangeArgs>(true);


    ngOnDestroy(): void {
        if (this.onEventChanged) {
            this.onEventChanged.unsubscribe();
        }
        if (this.onNavigatorDateChanged) {
            this.onEventChanged.unsubscribe();
        }
        if (this.slots) {
            this.slots = null;
        }
        if (this.events) {
            this.events = null;
        }
    }


    onDragDropOnDay(e, time?: number) {
        const el = e.item.element.nativeElement as HTMLElement;
        if (e.previousContainer !== e.container) {
            el.style.opacity = '0';
            const r: AXSchedulerEventChangeArgs = new AXSchedulerEventChangeArgs();
            r.event = e.item.data;
            r.oldSlot = e.previousContainer.data;
            r.newSlot = e.container.data;
            //
            r.onComplete.subscribe((er: AXSchedulerEventChangeArgs) => {
                el.style.opacity = '1';
                if (!er.canceled) {
                    const slotTime = er.newSlot.range.startTime.startOf();
                    const z = er.event.range.startTime.clone();
                    const durDay = slotTime.duration(z.startOf(), 'days');
                    const durTime = slotTime.duration(z, 'hours');
                    const eventRange = er.event.range;
                    //
                    // if (time && slotTime.add('hour', time).hour + eventRange.duration('hours') > 24) {
                    //     console.log('long day',slotTime.add('hour', time).hour,eventRange.duration('hours'))
                    //     return;
                    // }
                    if (time) {
                        return;
                    }
                    er.event.range.startTime = er.event.range.startTime.add('day', durDay);
                    er.event.range.endTime = er.event.range.endTime.add('day', durDay);
                    er.oldSlot.events = er.oldSlot.events.filter(c => c.uid !== er.event.uid);
                    if (time) {
                        er.event.range.startTime = er.event.range.startTime.set('hour', time);
                        let durTime = er.event.range.startTime.duration(z, 'hours') % 24;
                        er.event.range.endTime = er.event.range.endTime.add('hour', durTime);
                    }
                    er.newSlot.events.push(er.event);

                }
            });
            this.onEventChanged.emit(r);
        }
    }

}