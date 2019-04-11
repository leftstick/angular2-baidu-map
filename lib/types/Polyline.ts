import { Overlay } from './Overlay'
import { BPoint } from './Point'

export interface BPolylineConstructor {
  new (points: Array<BPoint>, options?: PolylineOptions): BPolyline
}

export interface BPolyline extends Overlay {
  setPath(points: Array<BPoint>): void
  getPath(points: Array<BPoint>): void
  setStrokeColor(strokeColor: string): void
  setStrokeOpacity(strokeOpacity: number): void
  setStrokeWeight(strokeWeight: number): void
  setStrokeStyle(strokeStyle: string): void
  enableEditing(): void
  disableEditing(): void
  enableMassClear(): void
  disableMassClear(): void
}

export interface PolylineOptions {
  strokeColor?: string
  strokeWeight?: number
  strokeOpacity?: number
  strokeStyle?: string
  enableMassClear?: boolean
  enableEditing?: boolean
  enableClicking?: string
  icons?: Array<any>
}
