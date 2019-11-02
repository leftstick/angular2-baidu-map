export interface BSizeConstructor {
  new (width?: number, height?: number): BSize
}

export interface BSize {
  equals(other: BSize): boolean
}

export interface Size {
  width: number
  height: number
}
