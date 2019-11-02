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
import { toPoints } from '../helpers/transformer'
import { nullCheck } from '../helpers/validate'
import { MapService } from '../providers/mapService'
import { BPolygon, PolygonOptions } from '../types/Polygon'
import { Point } from '../types/Point'

@Directive({
  selector: 'polygon'
})
export class PolygonComponent implements OnInit, OnChanges, OnDestroy {
  @Input() private points: Array<Point>
  @Input() private options: PolygonOptions

  @Output() private loaded = new EventEmitter()

  private polygon: BPolygon

  constructor(private service: MapService) {}

  public ngOnInit() {
    nullCheck(this.points, 'points is required for <polygon>')

    this.service
      .addOverlay(() => {
        return (this.polygon = new window.BMap.Polygon(
          toPoints(this.points),
          this.options
        ))
      })
      .then(() => {
        this.loaded.emit(this.polygon)
      })
  }

  public ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (changes.points && !changes.points.isFirstChange()) {
      this.polygon.setPath(toPoints(changes.points.currentValue))
    }
    if (changes.options && !changes.options.isFirstChange()) {
      this.setOptions(changes.options.currentValue)
    }
  }

  public ngOnDestroy() {
    this.service.removeOverlay(this.polygon)
  }

  private setOptions(options: PolygonOptions): void {
    if (isNull(options)) {
      return
    }
    if (!isUndefined(options.enableEditing)) {
      if (options.enableEditing) {
        this.polygon.enableEditing()
      } else {
        this.polygon.disableEditing()
      }
    }
    if (!isUndefined(options.enableMassClear)) {
      if (options.enableEditing) {
        this.polygon.enableMassClear()
      } else {
        this.polygon.disableMassClear()
      }
    }
    if (!isUndefined(options.strokeColor)) {
      this.polygon.setStrokeColor(options.strokeColor)
    }
    if (!isUndefined(options.fillColor)) {
      this.polygon.setFillColor(options.fillColor)
    }
    if (!isUndefined(options.strokeOpacity)) {
      this.polygon.setStrokeOpacity(options.strokeOpacity)
    }
    if (!isUndefined(options.fillOpacity)) {
      this.polygon.setFillOpacity(options.fillOpacity)
    }
    if (!isUndefined(options.strokeStyle)) {
      this.polygon.setStrokeStyle(options.strokeStyle)
    }
    if (!isUndefined(options.strokeWeight)) {
      this.polygon.setStrokeWeight(options.strokeWeight)
    }
  }
}
