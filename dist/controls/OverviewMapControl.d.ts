import { MapOptions } from '../interfaces/Options';
import { ControlAnchor } from '../enum/ControlAnchor';
import { Size } from '../interfaces/Size';
export declare function setOverviewMapCtrl(map: any, opts: MapOptions): void;
export interface OverviewMapControlOptions {
    anchor?: ControlAnchor;
    offset?: Size;
    size?: Size;
    isOpen?: boolean;
}
