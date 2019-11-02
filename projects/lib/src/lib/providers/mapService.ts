import { Injectable, Inject } from '@angular/core'
import { isBoolean, isNull, omit } from '../helpers/object'
import { nullCheck } from '../helpers/validate'
import { BControl } from '../types/Control'
import { ScriptLoaderConfig } from './scriptLoader'
import { BMapInstance, MapOptions, isMapTypeEnum } from '../types/Map'
import { Overlay } from '../types/Overlay'
import { BTileLayer } from '../types/TileLayer'

import { toPoint } from '../helpers/transformer'

import { ScriptLoader } from './scriptLoader'

@Injectable()
export class MapService {
  private config: ScriptLoaderConfig

  private map: Promise<BMapInstance>
  private mapResolver: (value: BMapInstance) => void

  constructor(
    @Inject(ScriptLoaderConfig) config: ScriptLoaderConfig,
    private loader: ScriptLoader
  ) {
    nullCheck(config.ak, 'ak must be provided')

    this.config = config

    this.map = new Promise<BMapInstance>((resolve: () => void) => {
      this.mapResolver = resolve
    })
  }

  public createMap(
    el: HTMLElement,
    mapOptions: MapOptions
  ): Promise<BMapInstance> {
    const URL = `https://api.map.baidu.com/api?v=3.0&ak=${this.config.ak}&callback=baidumapinit`

    return new Promise(resolve => {
      this.loader.load(URL, true, () => {
        const map = new window.BMap.Map(el, omit(mapOptions, 'mapType'))
        this.setOptions(mapOptions)
        this.mapResolver(map)
        resolve(map)
      })
    })
  }

  public setOptions(opts: MapOptions): void {
    const {
      disableDragging,
      enableScrollWheelZoom,
      disableDoubleClickZoom,
      enableKeyboard,
      enableInertialDragging,
      enableAutoResize,
      enableContinuousZoom,
      disablePinchToZoom
    } = opts

    if (isBoolean(disableDragging)) {
      this.map.then(map =>
        map[(disableDragging ? 'disable' : 'enable') + 'Dragging']()
      )
    }
    if (isBoolean(enableScrollWheelZoom)) {
      this.map.then(map =>
        map[
          (enableScrollWheelZoom ? 'enable' : 'disable') + 'ScrollWheelZoom'
        ]()
      )
    }
    if (isBoolean(enableAutoResize)) {
      this.map.then(map =>
        map[(enableAutoResize ? 'enable' : 'disable') + 'AutoResize']()
      )
    }
    if (isBoolean(disableDoubleClickZoom)) {
      this.map.then(map =>
        map[
          (disableDoubleClickZoom ? 'disable' : 'enable') + 'DoubleClickZoom'
        ]()
      )
    }
    if (isBoolean(enableKeyboard)) {
      this.map.then(map =>
        map[(enableKeyboard ? 'enable' : 'disable') + 'Keyboard']()
      )
    }
    if (isBoolean(enableInertialDragging)) {
      this.map.then(map =>
        map[
          (enableInertialDragging ? 'enable' : 'disable') + 'InertialDragging'
        ]()
      )
    }
    if (isBoolean(enableContinuousZoom)) {
      this.map.then(map =>
        map[(enableContinuousZoom ? 'enable' : 'disable') + 'ContinuousZoom']()
      )
    }
    if (isBoolean(disablePinchToZoom)) {
      this.map.then(map =>
        map[(disablePinchToZoom ? 'disable' : 'enable') + 'PinchToZoom']()
      )
    }
    if (!isNull(opts.cursor)) {
      this.map.then(map => map.setDefaultCursor(opts.cursor))
    }
    if (!isNull(opts.draggingCursor)) {
      this.map.then(map => map.setDraggingCursor(opts.draggingCursor))
    }
    if (!isNull(opts.currentCity)) {
      this.map.then(map => map.setCurrentCity(opts.currentCity))
    }
    if (!isNull(opts.centerAndZoom)) {
      this.map.then(map => {
        map.centerAndZoom(toPoint(opts.centerAndZoom), opts.centerAndZoom.zoom)
      })
    }
    if (!isNull(opts.mapType)) {
      this.map.then(map => {
        const realType = isMapTypeEnum(opts.mapType)
          ? window[opts.mapType]
          : opts.mapType
        map.setMapType(realType)
      })
    }
  }

  public addOverlay(
    cb: (map: BMapInstance) => Overlay
  ): Promise<{ map: BMapInstance; overlay: Overlay }> {
    return this.map.then((map: BMapInstance) => {
      const overlay = cb(map)
      map.addOverlay(overlay)
      return { map, overlay }
    })
  }

  public removeOverlay(overlay: Overlay): Promise<void> {
    return this.map.then((map: BMapInstance) => {
      map.removeOverlay(overlay)
    })
  }

  public addTileLayer(
    cb: (map: BMapInstance) => BTileLayer
  ): Promise<{ map: BMapInstance; tilelayer: BTileLayer }> {
    return this.map.then((map: BMapInstance) => {
      const tilelayer = cb(map)
      map.addTileLayer(tilelayer)
      return { map, tilelayer }
    })
  }

  public removeTileLayer(tilelayer: BTileLayer): Promise<void> {
    return this.map.then((map: BMapInstance) => {
      map.removeOverlay(tilelayer)
    })
  }

  public addControl(
    cb: (map: BMapInstance) => BControl
  ): Promise<{ map: BMapInstance; control: BControl }> {
    return this.map.then((map: BMapInstance) => {
      const control = cb(map)
      map.addControl(control)
      return { map, control }
    })
  }

  public removeControl(control: BControl): Promise<void> {
    return this.map.then((map: BMapInstance) => {
      map.removeControl(control)
    })
  }

  public getNativeMap(): Promise<BMapInstance> {
    return this.map
  }
}
