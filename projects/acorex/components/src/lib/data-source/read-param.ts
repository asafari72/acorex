import { EventEmitter } from '@angular/core';



export interface AXSortParams {
    field?: string;
    sort?: 'asc' | 'desc';
}
export interface AXGroups {
    field?: string;
}

export interface AXFilterParams {
    field?: string;
    filters?: AXFilterConditionParams[];
}

export interface AXFilterConditionParams {
    dataType?: 'text' | 'number' | 'date';
    type?: 'contains' | 'equal' | 'notEqual';
    value?: any;
}

export interface AXDataSourceReadParams {
    skip?: number;
    take?: number;
    sort?: AXSortParams[];
    filter?: AXFilterParams[];
    searchText?: string;
    groups?: string[];
    groupKeys?: string[];
}


export abstract class AXDataSourceRead {
    abstract fetch(params: AXDataSourceReadParams): void;
    abstract dataReceived: EventEmitter<any>;
}