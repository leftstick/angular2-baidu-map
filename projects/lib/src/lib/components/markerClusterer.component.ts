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

import { nullCheck } from '../helpers/validate'
import { isUndefined } from '../helpers/object'
import {
  toMarkerClustererOptions,
  toPoint,
  toMarkerOptions,
  toTextIconStyle
} from '../helpers/transformer'
import { MapService } from '../providers/mapService'
import {
  MarkerClustererOptions,
  BMarkerClusterer
} from '../types/MarkerClusterer'
import { ScriptLoader } from '../providers/scriptLoader'
import { BMapInstance } from '../types/Map'

const LIB_URLS = {
  key: 'markerClusterer',
  scripts: [
    'https://api.map.baidu.com/library/MarkerClusterer/1.2/src/MarkerClusterer_min.js',
    'https://api.map.baidu.com/library/TextIconOverlay/1.2/src/TextIconOverlay_min.js'
  ]
}

@Directive({
  selector: 'marker-clusterer'
})
export class MarkerClustererComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public options: MarkerClustererOptions

  @Output() public loaded = new EventEmitter()

  private markerClusterer: BMarkerClusterer

  constructor(
    private service: MapService,
    private scriptLoader: ScriptLoader
  ) {}

  public ngOnInit() {
    nullCheck(this.options, 'options is required for <marker-clusterer>')

    this.service.getNativeMap().then((map: BMapInstance) => {
      return this.scriptLoader.load(LIB_URLS, false, () => {
        this.markerClusterer = new window.BMapLib.MarkerClusterer(
          map,
          toMarkerClustererOptions(this.options)
        )

        this.loaded.emit(this.markerClusterer)
      })
    })
  }

  public ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (changes.options && !changes.options.isFirstChange()) {
      this.resetOptions(changes.options.currentValue)
    }
  }

  private resetOptions(options: MarkerClustererOptions) {
    if (options.markers) {
      this.markerClusterer.clearMarkers()
      this.markerClusterer.addMarkers(
        options.markers.map(
          m =>
            new window.BMap.Marker(toPoint(m.point), toMarkerOptions(m.options))
        )
      )
    }
    if (!isUndefined(options.girdSize)) {
      this.markerClusterer.setGridSize(options.girdSize)
    }
    if (!isUndefined(options.maxZoom)) {
      this.markerClusterer.setMaxZoom(options.maxZoom)
    }
    if (options.styles) {
      this.markerClusterer.setStyles(
        options.styles.filter(s => s).map(s => toTextIconStyle(s))
      )
    }
  }

  public ngOnDestroy() {
    this.markerClusterer.clearMarkers()
  }
}
