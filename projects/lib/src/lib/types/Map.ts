import { BBounds } from './Bounds'
import { BControl } from './Control'
import { Overlay } from './Overlay'
import { BPoint, Point } from './Point'
import { BTileLayer } from './TileLayer'
import { isFunction } from '../helpers/object'
import { BSize } from './Size'
import { BInfoWindow } from './InfoWindow'
import { BMapType } from './MapType'
import { BPixel } from './Pixel'

export interface BMapConstructor {
  new (el: HTMLElement | string, opts: MapOptions): BMapInstance
}

export interface BMapInstance {
  disableDragging(): void
  enableDragging(): void

  disableScrollWheelZoom(): void
  enableScrollWheelZoom(): void

  disableDoubleClickZoom(): void
  enableDoubleClickZoom(): void

  disableKeyboard(): void
  enableKeyboard(): void

  disableInertialDragging(): void
  enableInertialDragging(): void

  disableContinuousZoom(): void
  enableContinuousZoom(): void

  disablePinchToZoom(): void
  enablePinchToZoom(): void

  disableAutoResize(): void
  enableAutoResize(): void

  addControl(control: BControl): void
  removeControl(control: BControl): void

  addOverlay(control: Overlay): void
  removeOverlay(control: Overlay): void
  clearOverlays(): void

  addTileLayer(tileLayer: BTileLayer): void
  removeTileLayer(tileLayer: BTileLayer): void

  setDefaultCursor(cursor: string): void
  getDefaultCursor(): string

  setDraggingCursor(draggingCursor: string): void
  getDraggingCursor(): string

  setMinZoom(zoom: number): void
  setMaxZoom(zoom: number): void

  getBounds(): BBounds

  setCenter(center: BPoint | string): void
  getCenter(): BPoint

  getDistance(start: BPoint, end: BPoint): number

  setCurrentCity(city: string): void
  centerAndZoom(center: BPoint, zoom: number): void

  setMapType(mapType: BMapType | MapTypeEnum): void
  getMapType(): BMapType

  getSize(): BSize

  setZoom(zoom: number): void
  getZoom(): number

  panTo(center: BPoint, opts: BPanOptions): void

  panBy(x: number, y: number, opts: BPanOptions): void

  reset(): void

  highResolutionEnabled(): boolean

  zoomIn(): void
  zoomOut(): void

  getContainer(): HTMLElement

  closeInfoWindow(): void

  pixelToPoint(pixel: BPixel): BPoint

  pointToPixel(point: BPoint): BPixel

  openInfoWindow(infoWnd: BInfoWindow, point: BPoint): void

  addEventListener(event: string, handler: (e: any) => void): void
  removeEventListener(event: string, handler: () => void): void
}

export interface MapOptions {
  minZoom?: number
  maxZoom?: number
  enableHighResolution?: boolean
  enableAutoResize?: boolean
  enableMapClick?: boolean

  disableDragging?: boolean
  enableScrollWheelZoom?: boolean
  disableDoubleClickZoom?: boolean
  enableKeyboard?: boolean
  enableInertialDragging?: boolean
  enableContinuousZoom?: boolean
  disablePinchToZoom?: boolean

  cursor?: string
  draggingCursor?: string
  currentCity?: string
  centerAndZoom?: CenterAndZoom

  mapType?: BMapType | MapTypeEnum
}

export interface CenterAndZoom extends Point {
  zoom?: number
}

export interface BPanOptions {
  noAnimation: boolean
}

export enum MapTypeEnum {
  BMAP_NORMAL_MAP = 'BMAP_NORMAL_MAP',
  BMAP_PERSPECTIVE_MAP = 'BMAP_PERSPECTIVE_MAP',
  BMAP_SATELLITE_MAP = 'BMAP_SATELLITE_MAP',
  BMAP_HYBRID_MAP = 'BMAP_HYBRID_MAP'
}

export function isMapTypeEnum(
  maptype: MapTypeEnum | BMapType
): maptype is MapTypeEnum {
  return !isFunction((maptype as BMapType).getTileLayer)
}
