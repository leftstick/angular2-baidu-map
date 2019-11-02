import { BPoint } from './Point'
import { BSize, Size } from './Size'
import { BMapInstance } from './Map'

export interface BTextIconOverlayConstructor {
  new (position: BPoint, text: string, options?: BTextIconOverlayOptions): BTextIconOverlay
}

export interface BTextIconOverlay {
  draw(): void
  getPosition(): BPoint
  setPosition(point: BPoint): void
  getStyleByText(text: string, styles: Array<BTextIconStyle>): number
  getText(): string
  setText(text: string): void
  initialize(map: BMapInstance): void
}

export interface BTextIconOverlayOptions {
  styles?: Array<BTextIconStyle>
}

export interface BTextIconStyle {
  url: string
  size: BSize
  anchor?: BSize
  offset?: BSize
  textSize?: number
  textColor?: string
}

export interface TextIconStyle {
  url: string
  size: Size
  anchor?: Size
  offset?: Size
  textSize: number
  textColor: string
}
