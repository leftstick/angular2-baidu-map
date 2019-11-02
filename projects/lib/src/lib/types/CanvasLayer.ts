import { Overlay } from './Overlay'
import { BMapInstance } from './Map'

export interface BCanvasLayerConstructor {
  new (options?: BCanvasLayerOptions): BCanvasLayer
}

export interface CanvasLayerOptions {
  zIndex?: number
  paneName?: string
  update?: (map: BMapInstance, canvas: HTMLCanvasElement) => void
}

export interface BCanvasLayerOptions {
  zIndex?: number
  paneName?: string
  update?: Function
}

export interface BCanvasLayer extends Overlay {}
