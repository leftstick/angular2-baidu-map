import { BPointConstructor } from './Point'
import { BSizeConstructor } from './Size'

export interface BLabelConstructor {
  new (content: string, opts?: BLabelOptions): BLabel
}

export interface BLabel {
  setStyle(styles: any): void
  setContent(content: string): void
  setPosition(postion: BPointConstructor): void

  setTitle(title: string): void
  getTitle(): string
}

export interface BLabelOptions {
  offset?: BSize
  position?: BPoint
  enableMassClear?: boolean
}
