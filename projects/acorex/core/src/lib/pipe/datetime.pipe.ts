import { PipeTransform, Pipe } from '@angular/core';
import { AXDateTime } from '../classes';

@Pipe({ name: 'dt' })
export class AXDateTimePipe implements PipeTransform {
    constructor() { }

    transform(value: any, format: string): string {
        const date: AXDateTime = AXDateTime.convert(value);
        if (value == null){
            return '';
        }
        if (!format){
            date.toString();
        }
        else{
            return date.format(format);
        }
    }
}