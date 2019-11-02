import { BPoint } from './Point'
import { BPixel } from './Pixel'

export interface BProjection {
  lngLatToPoint(lngLat: BPoint): BPixel
  pointToLngLat(point: BPixel): BPoint
}
