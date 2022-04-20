import {
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChange
} from '@angular/core'

import { isNull, isUndefined } from '../helpers/object'
import { toPoint } from '../helpers/transformer'
import { nullCheck } from '../helpers/validate'
import { MapService } from '../providers/mapService'
import { BCircle, CircleOptions } from '../types/Circle'
import { Point } from '../types/Point'

@Directive({
  selector: 'circle'
})
export class CircleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public center: Point
  @Input() public radius: number
  @Input() public options: CircleOptions

  @Output() public loaded = new EventEmitter()

  private circle: BCircle

  constructor(private service: MapService) {}

  public ngOnInit() {
    nullCheck(this.center, 'center is required for <circle>')
    nullCheck(this.radius, 'center is required for <circle>')

    this.service
      .addOverlay(() => {
        return (this.circle = new window.BMap.Circle(
          toPoint(this.center),
          this.radius,
          this.options
        ))
      })
      .then(() => {
        this.loaded.emit(this.circle)
      })
  }

  public ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (changes.center && !changes.center.isFirstChange()) {
      this.circle.setCenter(toPoint(changes.center.currentValue))
    }
    if (changes.radius && !changes.radius.isFirstChange()) {
      this.circle.setRadius(changes.radius.currentValue)
    }
    if (changes.options && !changes.options.isFirstChange()) {
      this.setOptions(changes.options.currentValue)
    }
  }

  public ngOnDestroy() {
    this.service.removeOverlay(this.circle)
  }

  private setOptions(options: CircleOptions): void {
    if (isNull(options)) {
      return
    }
    if (!isUndefined(options.enableEditing)) {
      if (options.enableEditing) {
        this.circle.enableEditing()
      } else {
        this.circle.disableEditing()
      }
    }
    if (!isUndefined(options.enableMassClear)) {
      if (options.enableEditing) {
        this.circle.enableMassClear()
      } else {
        this.circle.disableMassClear()
      }
    }
    if (!isUndefined(options.strokeColor)) {
      this.circle.setStrokeColor(options.strokeColor)
    }
    if (!isUndefined(options.fillColor)) {
      this.circle.setFillColor(options.fillColor)
    }
    if (!isUndefined(options.strokeOpacity)) {
      this.circle.setStrokeOpacity(options.strokeOpacity)
    }
    if (!isUndefined(options.fillOpacity)) {
      this.circle.setFillOpacity(options.fillOpacity)
    }
    if (!isUndefined(options.strokeStyle)) {
      this.circle.setStrokeStyle(options.strokeStyle)
    }
    if (!isUndefined(options.strokeWeight)) {
      this.circle.setStrokeWeight(options.strokeWeight)
    }
  }
}
