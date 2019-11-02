import {
  Directive,
  EventEmitter,
  Input,
  Output,
  OnDestroy,
  OnInit
} from '@angular/core'

import {
  toGeolocationOptions,
  toMapTypeControlOptions,
  toNavigationControlOptions,
  toOverviewMapControlOptions,
  toScaleControlOptions
} from '../helpers/transformer'
import { nullCheck } from '../helpers/validate'
import { MapService } from '../providers/mapService'
import { BControl, ControlType } from '../types/Control'

@Directive({
  selector: 'control'
})
export class ControlComponent implements OnInit, OnDestroy {
  @Input() private type: ControlType
  @Input() private options: { [key: string]: any }

  @Output() private loaded = new EventEmitter()

  private control: BControl

  constructor(private service: MapService) {}

  public ngOnInit() {
    nullCheck(this.type, 'type is required for <control>')

    this.service
      .addControl(() => {
        this.control = this.createControl(this.type, this.options)
        return this.control
      })
      .then(({ control }) => {
        this.loaded.emit(control)
      })
  }

  public ngOnDestroy() {
    this.service.removeControl(this.control)
  }

  private createControl(
    type: ControlType,
    options: { [key: string]: any }
  ): BControl {
    if (type === 'navigation') {
      return new window.BMap.NavigationControl(
        toNavigationControlOptions(options)
      )
    }
    if (type === 'overviewmap') {
      return new window.BMap.OverviewMapControl(
        toOverviewMapControlOptions(options)
      )
    }
    if (type === 'scale') {
      return new window.BMap.ScaleControl(toScaleControlOptions(options))
    }
    if (type === 'maptype') {
      return new window.BMap.MapTypeControl(toMapTypeControlOptions(options))
    }
    if (type === 'geolocation') {
      return new window.BMap.GeolocationControl(toGeolocationOptions(options))
    }
    if (type === 'panorama') {
      return new window.BMap.PanoramaControl()
    }
    throw new Error(`Unsupported type:${type} of control`)
  }
}
