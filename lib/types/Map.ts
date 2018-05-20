import { BControl } from './Control'
import { Overlay } from './Overlay'
import { BPoint, Point } from './Point'
import { BPixel } from './Pixel'
import { BTileLayer } from './TileLayer'
import { isFunction } from '../helpers/object'

export interface BMapConstructor {
  new(el: HTMLElement | string, opts: MapOptions): BMapInstance
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

  addControl(control: BControl): void
  removeControl(control: BControl): void

  addOverlay(control: Overlay): void
  removeOverlay(control: Overlay): void

  addTileLayer(tileLayer: BTileLayer): void
  removeTileLayer(tileLayer: BTileLayer): void

  setDefaultCursor(cursor: string): void
  setDraggingCursor(draggingCursor: string): void
  setCurrentCity(city: string): void
  centerAndZoom(center: BPoint, zoom: number): void

  setMapType(mapType: BMapType | MapTypeEnum): void

  addEventListener(event: string, handler: (e: any) => void): void
  removeEventListener(event: string, handler: () => void): void
  getCenter(): Point
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

export interface BMapTypeConstructor {
  new(name: string, layers: BTileLayer | Array<BTileLayer>, options: MapTypeOptions): BMapType
}

export interface BMapType {
  getName(): string
  getTileLayer(): BTileLayer
  getMinZoom(): number
  getMaxZoom(): number
  getProjection(): BProjection
  getTextColor(): string
  getTips(): String
}

export interface MapTypeOptions {
  minZoom: number
  maxZoom: number
  errorImageUrl: string
  textColor: number
  tips: string
}

export interface BProjection {
  lngLatToPoint(lngLat: BPoint): BPixel
  pointToLngLat(point: BPixel): BPoint
}

export enum MapTypeEnum {
  BMAP_NORMAL_MAP = 'BMAP_NORMAL_MAP',
  BMAP_PERSPECTIVE_MAP = 'BMAP_PERSPECTIVE_MAP',
  BMAP_SATELLITE_MAP = 'BMAP_SATELLITE_MAP',
  BMAP_HYBRID_MAP = 'BMAP_HYBRID_MAP'
}

export function isMapTypeEnum(maptype: MapTypeEnum | BMapType): maptype is MapTypeEnum {
  return !isFunction((<BMapType>maptype).getTileLayer)
}
