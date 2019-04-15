import { Overlay } from './Overlay'
import { BBounds } from './Bounds'
import { BPoint } from './Point'
import { BMapInstance } from './Map'

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
  getBounds(): BBounds
  enableEditing(): void
  disableEditing(): void
  enableMassClear(): void
  disableMassClear(): void
  setPositionAt(index: number, point: BPoint): void
  getMap(): BMapInstance
  addEventListener(event: string, handler: Function): void
  removeEventListener(event: string, handler: Function): void
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
