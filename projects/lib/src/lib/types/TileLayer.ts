import { BPixel } from './Pixel'
import { BCopyright } from './Copyright'

export interface BTileLayerConstructor {
  new (options?: TileLayerOptions): BTileLayer
}

export interface BTileLayer {
  getTilesUrl: GetTilesUrlFunc
  getCopyright(): BCopyright | null
  isTransparentPng(): boolean
}

export interface TileLayerOptions {
  transparentPng?: boolean
  tileUrlTemplate?: string
  copyright?: BCopyright
  zIndex?: number
}

export interface GetTilesUrlFunc {
  (tileCoord: BPixel, zoom: number): string
}
