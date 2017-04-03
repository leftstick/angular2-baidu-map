import { MapOptions } from '../interfaces/Options';

import { ControlAnchor } from '../enum/ControlAnchor';
import { Size } from '../interfaces/Size';

export function setScaleCtrl(map: any, opts: MapOptions) {
    var BMap: any = (<any>window).BMap;
    //enable ScaleControl
    var scaleOpts: any = {};
    if (typeof opts.scaleCtrl !== 'boolean') {
        var ctrl = <ScaleControlOptions>opts.scaleCtrl;
        if (ctrl.anchor) {
            scaleOpts.anchor = ctrl.anchor;
        }
        if (ctrl.offset) {
            scaleOpts.offset = new BMap.Size(ctrl.offset.width, ctrl.offset.height);
        }
        map.addControl(new BMap.ScaleControl(scaleOpts));
    } else if (opts.scaleCtrl) {
        map.addControl(new BMap.ScaleControl());
    }
};

export interface ScaleControlOptions {
    anchor?: ControlAnchor;
    offset?: Size;
}
