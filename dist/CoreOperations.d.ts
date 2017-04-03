import { MapOptions, MarkerOptions } from './interfaces/Options';
import { PreviousMarker } from './interfaces/PreviousMarker';
export declare function reCenter(map: any, opts: MapOptions): void;
export declare function reZoom(map: any, opts: MapOptions): void;
export declare function createInstance(opts: MapOptions, element: any): any;
export declare function createMarker(marker: MarkerOptions, pt: any): any;
export declare function redrawMarkers(map: any, previousMarkers: PreviousMarker[], opts: MapOptions): void;
