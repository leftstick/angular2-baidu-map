import {
  Directive,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core'

import { MapService } from '../providers/mapService'
import {
  BCanvasLayer,
  CanvasLayerOptions,
  BCanvasLayerOptions
} from '../types/CanvasLayer'
import { isNumber } from '../helpers/object'
import { BMapInstance } from '../types/Map'

@Directive({
  selector: 'canvaslayer'
})
export class CanvasLayerComponent implements OnInit, OnDestroy {
  @Input()
  private options: CanvasLayerOptions

  @Output()
  private loaded = new EventEmitter()

  private canvaslayer: BCanvasLayer

  constructor(private service: MapService) {}

  public ngOnInit() {
    this.service
      .addOverlay((map: BMapInstance) => {
        this.canvaslayer = new window.BMap.CanvasLayer(
          this.getOptions(this.options, map)
        )
        return this.canvaslayer
      })
      .then(() => {
        this.loaded.emit(this.canvaslayer)
      })
  }

  public ngOnDestroy() {
    this.service.removeOverlay(this.canvaslayer)
  }

  private getOptions(
    options: CanvasLayerOptions,
    map: BMapInstance
  ): BCanvasLayerOptions | undefined {
    if (!options) {
      return
    }
    const opts: BCanvasLayerOptions = {}

    if (isNumber(options.zIndex)) {
      opts.zIndex = options.zIndex
    }
    if (options.paneName) {
      opts.paneName = options.paneName
    }
    if (options.update) {
      opts.update = function() {
        return options.update(map, this.canvas)
      }
    }

    return opts
  }
}
