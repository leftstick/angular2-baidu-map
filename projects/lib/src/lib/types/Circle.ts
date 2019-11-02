import { Overlay } from './Overlay'
import { BPoint } from './Point'

export interface BCircleConstructor {
  new (center: BPoint, radius: number, options?: CircleOptions): BCircle
}

export interface BCircle extends Overlay {
  setCenter(center: BPoint): void
  setRadius(radius: number): void
  setStrokeColor(strokeColor: string): void
  setFillColor(fillColor: string): void
  setStrokeOpacity(strokeOpacity: number): void
  setFillOpacity(fillOpacity: number): void
  setStrokeWeight(strokeWeight: number): void
  setStrokeStyle(strokeStyle: string): void
  enableEditing(): void
  disableEditing(): void
  enableMassClear(): void
  disableMassClear(): void
}

export interface CircleOptions {
  strokeColor?: string
  fillColor?: string
  strokeWeight?: number
  strokeOpacity?: number
  fillOpacity?: number
  strokeStyle?: string
  enableMassClear?: boolean
  enableEditing?: boolean
  enableClicking?: boolean
}
