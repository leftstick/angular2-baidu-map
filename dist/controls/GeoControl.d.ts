import { MapOptions } from '../interfaces/Options';
import { ControlAnchor } from '../enum/ControlAnchor';
import { Size } from '../interfaces/Size';
import { Icon } from '../interfaces/Icon';
export declare function setGeoCtrl(map: any, opts: MapOptions): void;
export interface GeolocationControlOptions {
    anchor?: ControlAnchor;
    offset?: Size;
    showAddressBar?: boolean;
    enableAutoLocation?: boolean;
    locationIcon?: Icon;
}
