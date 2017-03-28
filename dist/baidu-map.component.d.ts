import { SimpleChange, EventEmitter, OnInit, OnChanges, ElementRef } from '@angular/core';
import { MapOptions, OfflineOptions } from './interfaces/Options';
import { PreviousMarker } from './interfaces/PreviousMarker';
export declare class BaiduMapComponent implements OnInit, OnChanges {
    private el;
    ak: string;
    protocol: string;
    options: MapOptions;
    offline: OfflineOptions;
    onMapLoaded: EventEmitter<{}>;
    onMarkerClicked: EventEmitter<{}>;
    map: any;
    offlineWords: string;
    previousMarkers: PreviousMarker[];
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    _draw(): void;
}
