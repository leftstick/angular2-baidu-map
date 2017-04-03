import { MapOptions } from '../interfaces/Options';

import { ControlAnchor } from '../enum/ControlAnchor';
import { Size } from '../interfaces/Size';
import { Icon } from '../interfaces/Icon';

export function setGeoCtrl(map: any, opts: MapOptions) {
    var BMap: any = (<any>window).BMap;
    //enable GeolocationControl
    var geoOpts: any = {};
    if (typeof opts.geolocationCtrl !== 'boolean') {
        var ctrl = <GeolocationControlOptions>opts.geolocationCtrl;
        if (ctrl.anchor) {
            geoOpts.anchor = ctrl.anchor;
        }
        if (ctrl.offset) {
            geoOpts.offset = new BMap.Size(ctrl.offset.width, ctrl.offset.height);
        }
        if (typeof geoOpts.showAddressBar === 'boolean') {
            geoOpts.showAddressBar = ctrl.showAddressBar;
        }
        if (typeof geoOpts.enableAutoLocation === 'boolean') {
            geoOpts.enableAutoLocation = ctrl.enableAutoLocation;
        }
        if (geoOpts.locationIcon) {
            geoOpts.locationIcon = new BMap.Size(ctrl.locationIcon.url, new BMap.Size(ctrl.locationIcon.size.width, ctrl.locationIcon.size.height));
        }
        map.addControl(new BMap.GeolocationControl(geoOpts));
    } else if (opts.geolocationCtrl) {
        map.addControl(new BMap.GeolocationControl());
    }
};

export interface GeolocationControlOptions {
    anchor?: ControlAnchor;
    offset?: Size;
    showAddressBar?: boolean;
    enableAutoLocation?: boolean;
    locationIcon?: Icon;
}
