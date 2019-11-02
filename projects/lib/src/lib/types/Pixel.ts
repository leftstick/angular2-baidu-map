export interface BPixelConstructor {
  new (x: number, y: number): BPixel
}

export interface BPixel {
  x: number
  y: number
  equals(other: BPixel): boolean
}
