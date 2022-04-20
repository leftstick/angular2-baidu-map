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

import { isNull } from '../helpers/object'
import {
  toIcon,
  toMarkerOptions,
  toPoint,
  toSize
} from '../helpers/transformer'
import { nullCheck } from '../helpers/validate'
import { MapService } from '../providers/mapService'
import { BMapInstance } from '../types/Map'
import { BMarker, MarkerOptions } from '../types/Marker'
import { Point } from '../types/Point'

@Directive({
  selector: 'marker'
})
export class MarkerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public point: Point
  @Input() public options: MarkerOptions

  @Output() public loaded = new EventEmitter()
  @Output() public clicked = new EventEmitter()

  private marker: BMarker

  constructor(private service: MapService) {}

  public ngOnInit() {
    nullCheck(this.point, 'point is required for <marker>')

    this.service
      .addOverlay(() => {
        return (this.marker = new window.BMap.Marker(
          toPoint(this.point),
          toMarkerOptions(this.options)
        ))
      })
      .then(({ map }) => {
        this.loaded.emit(this.marker)
        this.addListener(this.marker, map)
      })
      .then(() => {
        // workaround: it's weird that postion is set while constructing phase will make click event not working
        this.marker.setPosition(
          new window.BMap.Point(this.point.lng, this.point.lat)
        )
      })
  }

  public ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (changes.point && !changes.point.isFirstChange()) {
      this.marker.setPosition(toPoint(changes.point.currentValue))
    }
    if (changes.options && !changes.options.isFirstChange()) {
      this.setOptions(changes.options.currentValue)
    }
  }

  public ngOnDestroy() {
    this.service.removeOverlay(this.marker)
  }

  private setOptions(options: MarkerOptions): void {
    if (isNull(options)) {
      return
    }
    if (!isNull(options.offset)) {
      this.marker.setOffset(toSize(options.offset))
    }
    if (!isNull(options.icon)) {
      this.marker.setIcon(
        toIcon(options.icon.imageUrl, options.icon.size, options.icon)
      )
    }
    if (!isNull(options.enableMassClear)) {
      this.marker[
        (options.enableMassClear ? 'enable' : 'disable') + 'MassClear'
      ]()
    }
    if (!isNull(options.enableDragging)) {
      this.marker[
        (options.enableDragging ? 'enable' : 'disable') + 'Dragging'
      ]()
    }
    if (!isNull(options.rotation)) {
      this.marker.setRotation(options.rotation)
    }
    if (!isNull(options.shadow)) {
      this.marker.setShadow(
        toIcon(options.shadow.imageUrl, options.shadow.size, options.shadow)
      )
    }
    if (!isNull(options.title)) {
      this.marker.setTitle(options.title)
    }
  }

  private addListener(marker: BMarker, map: BMapInstance) {
    marker.addEventListener('click', (e: any) => {
      this.clicked.emit({
        e,
        map,
        marker
      })
    })
  }
}
