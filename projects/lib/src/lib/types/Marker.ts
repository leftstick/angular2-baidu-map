import { BIcon, Icon } from './Icon'
import { BLabel } from './Label'
import { Overlay } from './Overlay'
import { BPoint, Point } from './Point'
import { BSize, Size } from './Size'
import { Animation } from './Animation'

export interface BMarkerConstructor {
  new (point: BPoint, options?: BMarkerOptions): BMarker
}

export interface BMarker extends Overlay {
  addEventListener(event: string, handler: (e: any) => void): void
  removeEventListener(event: string, handler: () => void): void
  setPosition(position: BPoint): void
  setOffset(offset: BSize): void
  setIcon(icon: BIcon): void
  getIcon(): BIcon
  enableMassClear(): void
  disableMassClear(): void

  enableDragging(): void
  disableDragging(): void

  setRotation(rotation: number): void
  setShadow(icon: BIcon): void
  setTitle(title: string): void

  setLabel(label: BLabel): void
  getLabel(): BLabel

  setTop(isTop: boolean): void

  setAnimation(animation: Animation | null): void

  getPosition(): BPoint
}

export interface Marker {
  point: Point
  options?: MarkerOptions
}

export interface MarkerOptions {
  offset?: Size
  icon?: Icon
  enableMassClear?: boolean
  enableDragging?: boolean
  enableClicking?: boolean
  raiseOnDrag?: boolean
  draggingCursor?: string
  rotation?: number
  shadow?: Icon
  title?: string
}

export interface BMarkerOptions {
  offset?: BSize
  icon?: BIcon
  enableMassClear?: boolean
  enableDragging?: boolean
  enableClicking?: boolean
  raiseOnDrag?: boolean
  draggingCursor?: string
  rotation?: number
  shadow?: BIcon
  title?: string
}
