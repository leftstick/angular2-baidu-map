import { BPoint } from './Point'

export interface BBoundsConstructor {
  new (sw: BPoint, ne: BPoint): BBounds
}

export interface BBounds {
  equals(other: BBounds): boolean
  containsPoint(point: BPoint): boolean
  containsBounds(bounds: BBounds): boolean
  intersects(other: BBounds): BBounds
  extend(point: BPoint): void
  getCenter(): BPoint
  isEmpty(): boolean
  getSouthWest(): BPoint
  getNorthEast(): BPoint
  toSpan(): BPoint
}
