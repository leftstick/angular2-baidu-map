import { BSize, Size } from './Size'

export interface BIconConstructor {
  new (url: string, size?: BSize, opts?: BIconOptions): BIcon
}

export interface BIcon {
  anchor?: BSize
  size?: BSize
  imageOffset?: BSize
  imageSize?: BSize
  imageUrl?: string
  infoWindowAnchor?: BSize
  printImageUrl?: string
  
  setImageUrl(imageUrl: string): void
  setSize(size: BSize): void
  setImageSize(imageSize: BSize): void
  setAnchor(anchor: BSize): void
  setImageOffset(offset: BSize): void
  setInfoWindowAnchor(anchor: BSize): void
  setPrintImageUrl(url: string): void
}

export interface Icon {
  anchor?: Size
  size?: Size
  imageOffset?: Size
  imageSize?: Size
  imageUrl?: string
  infoWindowAnchor?: Size
  printImageUrl?: string
}

export interface IconOptions {
  anchor?: Size
  imageOffset?: Size
  imageSize?: Size
  infoWindowAnchor?: Size
  printImageUrl?: string
}

export interface BIconOptions {
  anchor?: BSize
  imageOffset?: BSize
  imageSize?: BSize
  infoWindowAnchor?: BSize
  printImageUrl?: string
}
