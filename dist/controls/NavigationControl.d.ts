import { MapOptions } from '../interfaces/Options';
import { ControlAnchor } from '../enum/ControlAnchor';
import { Size } from '../interfaces/Size';
import { NavigationControlType } from '../enum/NavigationControlType';
export declare function setNavigationCtrl(map: any, opts: MapOptions): void;
export interface NavigationControlOptions {
    anchor?: ControlAnchor;
    offset?: Size;
    type?: NavigationControlType;
    showZoomInfo?: boolean;
    enableGeolocation?: boolean;
}
