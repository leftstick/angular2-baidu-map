import { BTileLayer } from './TileLayer'
import { BProjection } from './Projection'

export interface BMapTypeConstructor {
  new (name: string, layers: BTileLayer | Array<BTileLayer>, options: BMapTypeOptions): BMapType
}

export interface BMapTypeOptions {
  minZoom: number
  maxZoom: number
  errorImageUrl: string
  textColor: number
  tips: string
}

export interface BMapType {
  getName(): string
  getTileLayer(): BTileLayer
  getMinZoom(): number
  getMaxZoom(): number
  getProjection(): BProjection
  getTextColor(): string
  getTips(): string
}
