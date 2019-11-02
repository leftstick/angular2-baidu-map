import {
  BGeolocationControlOptions,
  BMapTypeControlOptions,
  BNavigationControlOptions,
  BOverviewMapControlOptions,
  BScaleControlOptions,
  GeolocationControlOptions,
  MapTypeControlOptions,
  NavigationControlOptions,
  OverviewMapControlOptions,
  ScaleControlOptions
} from '../types/Control'
import { BIcon, IconOptions } from '../types/Icon'
import { BMarkerOptions, MarkerOptions } from '../types/Marker'
import { BPoint, Point } from '../types/Point'
import { BSize, Size } from '../types/Size'
import { isMapTypeEnum } from '../types/Map'

import { isNull } from './object'
import { BMarkerClustererOptions, MarkerClustererOptions } from '../types/MarkerClusterer'
import { TextIconStyle, BTextIconStyle } from '../types/TextIconOverlay'

export function toPoint(opts: Point): BPoint {
  if (!opts) {
    return new window.BMap.Point()
  }
  return new window.BMap.Point(opts.lng, opts.lat)
}

export function toPoints(opts: Array<Point>): Array<BPoint> {
  if (!opts) {
    return []
  }
  return opts.map(p => {
    return new window.BMap.Point(p.lng, p.lat)
  })
}

export function toSize(opts: Size): BSize {
  if (!opts) {
    return new window.BMap.Size()
  }
  return new window.BMap.Size(opts.width, opts.height)
}

export function toIcon(url: string, size: Size, options: IconOptions): BIcon {
  if (!size && !options) {
    return new window.BMap.Icon(url)
  }
  if (!size) {
    return new window.BMap.Icon(url, toSize(size))
  }
  const iconOptions: any = {
    anchor: toSize(options.anchor),
    imageOffset: toSize(options.imageOffset),
    infoWindowAnchor: toSize(options.infoWindowAnchor),
    printImageUrl: options.printImageUrl
  }
  const icon = new window.BMap.Icon(url, toSize(size), iconOptions)
  if (options.imageSize) {
    icon.setImageSize(toSize(options.imageSize))
  }
  return icon
}

export function toMarkerOptions(options: MarkerOptions): BMarkerOptions {
  const opts: BMarkerOptions = {}

  if (!options) {
    return opts
  }

  if (options.offset) {
    opts.offset = toSize(options.offset)
  }

  if (options.icon) {
    opts.icon = toIcon(options.icon.imageUrl, options.icon.size, options.icon)
  }
  if (!isNull(options.enableMassClear)) {
    opts.enableMassClear = options.enableMassClear
  }
  if (!isNull(options.enableDragging)) {
    opts.enableDragging = options.enableDragging
  }
  if (!isNull(options.enableClicking)) {
    opts.enableClicking = options.enableClicking
  }
  if (!isNull(options.raiseOnDrag)) {
    opts.raiseOnDrag = options.raiseOnDrag
  }
  if (!isNull(options.draggingCursor)) {
    opts.draggingCursor = options.draggingCursor
  }
  if (!isNull(options.rotation)) {
    opts.rotation = options.rotation
  }
  if (!isNull(options.title)) {
    opts.title = options.title
  }
  if (!isNull(options.shadow)) {
    opts.shadow = toIcon(options.shadow.imageUrl, options.shadow.size, options.shadow)
  }

  return opts
}

export function toNavigationControlOptions(options: NavigationControlOptions): BNavigationControlOptions {
  const opts: BNavigationControlOptions = {}

  if (!options) {
    return opts
  }

  if (!isNull(options.anchor)) {
    opts.anchor = options.anchor
  }
  if (!isNull(options.enableGeolocation)) {
    opts.enableGeolocation = options.enableGeolocation
  }
  if (!isNull(options.offset)) {
    opts.offset = toSize(options.offset)
  }
  if (!isNull(options.showZoomInfo)) {
    opts.showZoomInfo = options.showZoomInfo
  }

  if (!isNull(options.type)) {
    opts.type = options.type
  }
  return opts
}

export function toOverviewMapControlOptions(options: OverviewMapControlOptions): BOverviewMapControlOptions {
  const opts: BOverviewMapControlOptions = {}

  if (!options) {
    return opts
  }

  if (!isNull(options.anchor)) {
    opts.anchor = options.anchor
  }
  if (!isNull(options.isOpen)) {
    opts.isOpen = options.isOpen
  }
  if (!isNull(options.offset)) {
    opts.offset = toSize(options.offset)
  }
  if (!isNull(options.size)) {
    opts.size = toSize(options.size)
  }
  return opts
}

export function toScaleControlOptions(options: ScaleControlOptions): BScaleControlOptions {
  const opts: BScaleControlOptions = {}

  if (!options) {
    return opts
  }

  if (!isNull(options.anchor)) {
    opts.anchor = options.anchor
  }
  if (!isNull(options.offset)) {
    opts.offset = toSize(options.offset)
  }
  return opts
}

export function toMapTypeControlOptions(options: MapTypeControlOptions): BMapTypeControlOptions {
  const opts: BMapTypeControlOptions = {}

  if (!options) {
    return opts
  }

  if (!isNull(options.type)) {
    opts.type = options.type
  }
  if (!isNull(options.mapTypes)) {
    opts.mapTypes = options.mapTypes.map(mapType => {
      return isMapTypeEnum(mapType) ? window[mapType] : mapType
    })
  }
  return opts
}

export function toGeolocationOptions(options: GeolocationControlOptions): BGeolocationControlOptions {
  const opts: BGeolocationControlOptions = {}

  if (!options) {
    return opts
  }

  if (!isNull(options.anchor)) {
    opts.anchor = options.anchor
  }
  if (!isNull(options.offset)) {
    opts.offset = toSize(options.offset)
  }
  if (!isNull(options.enableAutoLocation)) {
    opts.enableAutoLocation = options.enableAutoLocation
  }
  if (!isNull(options.locationIcon)) {
    opts.locationIcon = toIcon(options.locationIcon.imageUrl, options.locationIcon.size, options.locationIcon)
  }
  if (!isNull(options.showAddressBar)) {
    opts.showAddressBar = options.showAddressBar
  }
  return opts
}

export function toTextIconStyle(style: TextIconStyle): BTextIconStyle {
  const realStyle: BTextIconStyle = {
    url: style.url,
    size: toSize(style.size)
  }
  if (style.anchor) {
    realStyle.anchor = toSize(style.anchor)
  }
  if (style.offset) {
    realStyle.offset = toSize(style.offset)
  }
  if (!isNull(style.textSize)) {
    realStyle.textSize = style.textSize
  }
  if (!isNull(style.textColor)) {
    realStyle.textColor = style.textColor
  }

  return realStyle
}

export function toMarkerClustererOptions(options: MarkerClustererOptions): BMarkerClustererOptions {
  const opts: BMarkerClustererOptions = {}

  if (!options) {
    return opts
  }

  if (options.markers) {
    opts.markers = options.markers.map(
      m => new window.BMap.Marker(toPoint(m.point), toMarkerOptions(m.options))
    )
  }

  if (!isNull(options.girdSize)) {
    opts.girdSize = options.girdSize
  }
  if (!isNull(options.maxZoom)) {
    opts.maxZoom = options.maxZoom
  }
  if (!isNull(options.minClusterSize)) {
    opts.minClusterSize = options.minClusterSize
  }
  if (!isNull(options.isAverangeCenter)) {
    opts.isAverangeCenter = options.isAverangeCenter
  }
  if (options.styles) {
    opts.styles = options.styles.filter(s => s).map(s => toTextIconStyle(s))
  }

  return opts
}
