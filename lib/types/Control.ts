import { BIcon, Icon } from './Icon'
import { BSize, Size } from './Size'
import { BMapType } from './MapType'
import { MapTypeEnum } from './Map'

export interface BControlConstructor {
  new (opts: any): BControl
}

export interface BControl {}

export interface BNavigationControlConstructor extends BControlConstructor {
  new (opts: BNavigationControlOptions): BNavigationControl
}

export interface BOverviewMapControlConstructor extends BControlConstructor {
  new (opts: BOverviewMapControlOptions): BOverviewMapControl
}

export interface BScaleControlConstructor extends BControlConstructor {
  new (opts: BScaleControlOptions): BScaleControl
}

export interface BMapTypeControlConstructor extends BControlConstructor {
  new (opts: BMapTypeControlOptions): BMapTypeControl
}

export interface BGeolocationConstructor extends BControlConstructor {
  new (opts: BGeolocationControlOptions): BGeolocationControl
}

export interface BPanoramaControlConstructor extends BControlConstructor {
  new (): BPanoramaControlControl
}

export interface BNavigationControl extends BControl {
  getType(): NavigationControlType
  setType(type: NavigationControlType): void
}

export interface BOverviewMapControl extends BControl {
  changeView(): void
  setSize(size: BSize): void
  getSize(): BSize
}

export interface BScaleControl extends BControl {
  getUnit(): LengthUnit
  setUnit(unit: LengthUnit): void
}

export interface BMapTypeControl extends BControl {}

export interface BGeolocationControl extends BControl {
  location(): void
  getAddressComponent(): AddressComponent
}

export interface BPanoramaControlControl extends BControl {}

export interface ControlOptions {
  anchor?: ControlAnchor
  offset?: Size
}

export interface BControlOptions {
  anchor?: ControlAnchor
  offset?: BSize
}

export interface NavigationControlOptions extends ControlOptions {
  type?: NavigationControlType
  showZoomInfo?: boolean
  enableGeolocation?: boolean
}

export interface BNavigationControlOptions extends BControlOptions {
  type?: NavigationControlType
  showZoomInfo?: boolean
  enableGeolocation?: boolean
}

export interface OverviewMapControlOptions extends ControlOptions {
  size?: Size
  isOpen?: boolean
}

export interface BOverviewMapControlOptions extends BControlOptions {
  size?: BSize
  isOpen?: boolean
}

export interface ScaleControlOptions extends ControlOptions {}

export interface BScaleControlOptions extends BControlOptions {}

export interface MapTypeControlOptions {
  type?: MapTypeControlType
  mapTypes?: Array<BMapType | MapTypeEnum>
}

export interface BMapTypeControlOptions {
  type?: MapTypeControlType
  mapTypes?: Array<BMapType | any>
}

export interface GeolocationControlOptions extends ControlOptions {
  showAddressBar?: boolean
  enableAutoLocation?: boolean
  locationIcon?: Icon
}

export interface BGeolocationControlOptions extends BControlOptions {
  showAddressBar?: boolean
  enableAutoLocation?: boolean
  locationIcon?: BIcon
}

export enum ControlAnchor {
  BMAP_ANCHOR_TOP_LEFT = 0,
  BMAP_ANCHOR_TOP_RIGHT = 1,
  BMAP_ANCHOR_BOTTOM_LEFT = 2,
  BMAP_ANCHOR_BOTTOM_RIGHT = 3
}

export enum NavigationControlType {
  BMAP_NAVIGATION_CONTROL_LARGE = 0,
  BMAP_NAVIGATION_CONTROL_SMALL = 1,
  BMAP_NAVIGATION_CONTROL_PAN = 2,
  BMAP_NAVIGATION_CONTROL_ZOOM = 3
}

export enum MapTypeControlType {
  BMAP_MAPTYPE_CONTROL_HORIZONTAL = 0,
  BMAP_MAPTYPE_CONTROL_DROPDOWN = 1,
  BMAP_MAPTYPE_CONTROL_MAP = 2
}

export enum LengthUnit {
  BMAP_UNIT_METRIC = 'metric',
  BMAP_UNIT_IMPERIAL = 'us'
}

export interface AddressComponent {
  streetNumber: string
  street: string
  district: string
  city: string
  province: string
}

export type ControlType = 'navigation' | 'overviewmap' | 'scale' | 'maptype' | 'geolocation' | 'panorama'
