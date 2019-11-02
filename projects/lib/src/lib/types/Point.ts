export interface BPointConstructor {
  new (lng?: number, lat?: number): BPoint
}

export interface BPoint {
  lng: number
  lat: number
  equals(other: BPoint): boolean
}

export interface Point {
  lng: number
  lat: number
}
