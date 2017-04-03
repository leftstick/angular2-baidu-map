import { MapOptions } from '../interfaces/Options';

import { ControlAnchor } from '../enum/ControlAnchor';
import { Size } from '../interfaces/Size';
import { NavigationControlType } from '../enum/NavigationControlType';

export function setNavigationCtrl(map: any, opts: MapOptions) {
    var BMap: any = (<any>window).BMap;
    //enable NavigationControl
    var navOpts: any = {};
    if (typeof opts.navCtrl !== 'boolean') {
        var ctrl = <NavigationControlOptions>opts.navCtrl;
        if (ctrl.anchor) {
            navOpts.anchor = ctrl.anchor;
        }
        if (ctrl.offset) {
            navOpts.offset = new BMap.Size(ctrl.offset.width, ctrl.offset.height);
        }
        if (typeof ctrl.type !== 'undefined') {
            navOpts.type = ctrl.type;
        }
        if (typeof ctrl.showZoomInfo !== 'undefined') {
            navOpts.showZoomInfo = ctrl.showZoomInfo;
        }
        if (typeof ctrl.enableGeolocation !== 'undefined') {
            navOpts.enableGeolocation = ctrl.enableGeolocation;
        }
        map.addControl(new BMap.NavigationControl(navOpts));
    } else if (opts.navCtrl) {
        map.addControl(new BMap.NavigationControl());
    }
};

export interface NavigationControlOptions {
    anchor?: ControlAnchor;
    offset?: Size;
    type?: NavigationControlType;
    showZoomInfo?: boolean;
    enableGeolocation?: boolean;
};
