import {
    Component,
    SimpleChange,
    Input,
    Output,
    EventEmitter,
    OnInit,
    OnChanges,
    ChangeDetectionStrategy,
    ElementRef,
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapOptions, OfflineOptions } from './interfaces/Options';
import { PreviousMarker } from './interfaces/PreviousMarker';
import { MapStatus } from './enum/MapStatus';

import { defaultOfflineOpts, defaultOpts } from './defaults';

import { loader } from './Loader';
import { reCenter, reZoom, redrawMarkers, createInstance } from './CoreOperations';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'baidu-map',
    styles: [`
        .offlinePanel{
            width: 100%;
            height: 100%;
            background-color: #E6E6E6;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
        }
    `, `
        .offlineLabel{
            font-size: 30px;
        }
    `],
    template: `
        <div class="offlinePanel">
            <label class="offlineLabel">{{ offlineWords }}</label>
        </div>
    `
})
export class BaiduMap implements OnInit, OnChanges {

    @Input() ak: string;
    @Input() protocol: string;
    @Input() options: MapOptions;
    @Input() offline: OfflineOptions;
    @Output() onMapLoaded = new EventEmitter();
    @Output() onMarkerClicked = new EventEmitter();

    map: any;
    offlineWords: string;
    previousMarkers: PreviousMarker[] = [];

    constructor(private el: ElementRef) { }

    ngOnInit() {
        let offline: OfflineOptions = Object.assign({}, defaultOfflineOpts, this.offline);
        this.offlineWords = offline.txt;
        loader(this.ak, offline, this._draw.bind(this), this.protocol);
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        let baiduMap = (<any>window)['baiduMap'];
        if (!baiduMap || baiduMap.status !== MapStatus.LOADED) {
            return;
        }
        if (changes['options'].isFirstChange() && !this.map) {
            return;
        }
        let opts = changes['options'].currentValue;
        reCenter(this.map, opts);
        reZoom(this.map, opts);
        redrawMarkers.bind(this)(this.map, this.previousMarkers, opts);
    }

    _draw() {
        let options: MapOptions = Object.assign({}, defaultOpts, this.options);
        this.map = createInstance(options, this.el.nativeElement);
        this.onMapLoaded.emit(this.map);
        redrawMarkers.bind(this)(this.map, this.previousMarkers, options);
    }
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





@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        BaiduMap
    ],
    exports: [
        BaiduMap
    ]
})
export class BaiduMapModule { }