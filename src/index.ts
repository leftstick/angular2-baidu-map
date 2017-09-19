import { NgModule, ModuleWithProviders } from '@angular/core';

import { BaiduMap } from './components/map';

@NgModule({
  declarations: [
    BaiduMap
  ],
  exports: [
    BaiduMap
  ]
})
export class BaiduMapModule { }

export { MarkerOptions, MapDefaultOptions, MapOptions, OfflineOptions } from './interfaces/Options';
export { GeolocationControlOptions } from './controls/GeoControl';
export { ScaleControlOptions } from './controls/ScaleControl';
export { OverviewMapControlOptions } from './controls/OverviewMapControl';
export { NavigationControlOptions } from './controls/NavigationControl';
export { PolylineControlOptions } from './controls/PolylineControl';

export { Icon } from './interfaces/Icon';
export { Size } from './interfaces/Size';
export { ControlAnchor } from './enum/ControlAnchor';
export * from './enum/NavigationControlType';
export { MapStatus } from './enum/MapStatus';
