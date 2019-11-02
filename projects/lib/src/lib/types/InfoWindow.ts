import { BSize } from './Size'
import { BPoint } from './Point'

export interface BInfoWindowConstructor {
  new (content: string | HTMLElement, opts?: BInfoWindowOptions): BInfoWindow
}

export interface BInfoWindow {
  setWidth(width: number): void
  setHeight(height: number): void
  redraw(): void
  setTitle(title: string | HTMLElement): void
  getTitle(): string | HTMLElement
  setContent(content: string | HTMLElement): void
  getContent(): string | HTMLElement
  getPosition(): BPoint
  enableMaximize(): void
  disableMaximize(): void
  isOpen(): boolean
  setMaxContent(content: string): void
  maximize(): void
  restore(): void
  enableAutoPan(): void
  disableAutoPan(): void
  enableCloseOnClick(): void
  disableCloseOnClick(): void
  addEventListener(event: string, handler: Function): void
  removeEventListener(event: string, handler: Function): void
}

export interface BInfoWindowOptions {
  width?: number
  height?: number
  maxWidth?: number
  offset?: BSize
  title?: string
  enableAutoPan?: boolean
  enableCloseOnClick?: boolean
  enableMessage?: boolean
  message?: string
}
