import { Overlay } from './Overlay'
import { BPoint } from './Point'

export interface BPolylineConstructor {
  new (points: Array<BPoint>, options?: PolylineOptions): BPolyline
}

export interface BPolyline extends Overlay {
  setPath(points: Array<BPoint>): void
  getPath(): Array<BPoint>
  setStrokeColor(strokeColor: string): void
  getStrokeColor(): string
  setStrokeOpacity(strokeOpacity: number): void
  getStrokeOpacity(): number
  setStrokeWeight(strokeWeight: number): void
  getStrokeWeight(): number
  setStrokeStyle(strokeStyle: string): void
  getStrokeStyle(): string
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
