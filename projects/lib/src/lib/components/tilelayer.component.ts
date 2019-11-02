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
  BTileLayer,
  TileLayerOptions,
  GetTilesUrlFunc
} from '../types/TileLayer'
import { BPixel } from '../types/Pixel'

@Directive({
  selector: 'tilelayer'
})
export class TileLayerComponent implements OnInit, OnDestroy {
  @Input()
  private getTilesUrl: GetTilesUrlFunc

  @Input()
  private options: TileLayerOptions

  @Output()
  private loaded = new EventEmitter()

  private tilelayer: BTileLayer

  constructor(private service: MapService) {}

  public ngOnInit() {
    const func = this.getTilesUrl

    this.service
      .addTileLayer(() => {
        this.tilelayer = new window.BMap.TileLayer(this.options)

        if (this.getTilesUrl) {
          this.tilelayer.getTilesUrl = (tileCoord: BPixel, zoom: number) => {
            return func(tileCoord, zoom)
          }
        }
        return this.tilelayer
      })
      .then(() => {
        this.loaded.emit(this.tilelayer)
      })
  }

  public ngOnDestroy() {
    this.service.removeTileLayer(this.tilelayer)
  }
}
