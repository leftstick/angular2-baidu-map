import { SimpleChange, EventEmitter, OnInit, OnChanges, ElementRef } from '@angular/core';
import { MapOptions, OfflineOptions } from './interfaces/Options';
import { PreviousMarker } from './interfaces/PreviousMarker';
export declare class BaiduMap implements OnInit, OnChanges {
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
export { MarkerOptions, MapDefaultOptions, MapOptions, OfflineOptions } from './interfaces/Options';
export { GeolocationControlOptions } from './controls/GeoControl';
export { ScaleControlOptions } from './controls/ScaleControl';
export { OverviewMapControlOptions } from './controls/OverviewMapControl';
export { NavigationControlOptions } from './controls/NavigationControl';
export { Icon } from './interfaces/Icon';
export { Size } from './interfaces/Size';
export { ControlAnchor } from './enum/ControlAnchor';
export { NavigationControlType } from './enum/NavigationControlType';
export { MapStatus } from './enum/MapStatus';
export declare class BaiduMapModule {
}
