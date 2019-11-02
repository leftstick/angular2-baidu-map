import {
  Directive,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core'

import { MapService } from '../providers/mapService'
import { BTrafficLayer, TrafficLayerOptions } from '../types/TrafficLayer'

@Directive({
  selector: 'trafficlayer'
})
export class TrafficLayerComponent implements OnInit, OnDestroy {
  @Input()
  private options: TrafficLayerOptions

  @Output()
  private loaded = new EventEmitter()

  private trafficlayer: BTrafficLayer

  constructor(private service: MapService) {}

  public ngOnInit() {
    this.service
      .addTileLayer(() => {
        this.trafficlayer = new window.BMap.TrafficLayer(this.options)
        return this.trafficlayer
      })
      .then(() => {
        this.loaded.emit(this.trafficlayer)
      })
  }

  public ngOnDestroy() {
    this.service.removeTileLayer(this.trafficlayer)
  }
}
