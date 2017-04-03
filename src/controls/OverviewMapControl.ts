import { MapOptions } from '../interfaces/Options';

import { ControlAnchor } from '../enum/ControlAnchor';
import { Size } from '../interfaces/Size';

export function setOverviewMapCtrl(map: any, opts: MapOptions) {
    var BMap: any = (<any>window).BMap;
    //enable OverviewMapControl
    var overviewOpts: any = {};
    if (typeof opts.overviewCtrl !== 'boolean') {
        var ctrl = <OverviewMapControlOptions>opts.overviewCtrl;
        if (ctrl.anchor) {
            overviewOpts.anchor = ctrl.anchor;
        }
        if (ctrl.offset) {
            overviewOpts.offset = new BMap.Size(ctrl.offset.width, ctrl.offset.height);
        }
        if (ctrl.size) {
            overviewOpts.size = new BMap.Size(ctrl.size.width, ctrl.size.height);
        }
        if (typeof ctrl.isOpen !== 'undefined') {
            overviewOpts.isOpen = ctrl.isOpen;
        }
        map.addControl(new BMap.OverviewMapControl(overviewOpts));
    } else if (opts.overviewCtrl) {
        map.addControl(new BMap.OverviewMapControl());
    }
};

export interface OverviewMapControlOptions {
    anchor?: ControlAnchor;
    offset?: Size;
    size?: Size;
    isOpen?: boolean;
};
