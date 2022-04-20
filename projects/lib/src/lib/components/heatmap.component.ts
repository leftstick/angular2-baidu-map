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
import { MapService } from '../providers/mapService'
import { BHeatmap, HeatmapOptions, HeatmapData } from '../types/Heatmap'
import { ScriptLoader } from '../providers/scriptLoader'

const LIB_URL = `https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js`

@Directive({
  selector: 'heatmap'
})
export class HeatmapComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public dataset: HeatmapData
  @Input() public options: HeatmapOptions

  @Output() public loaded = new EventEmitter()

  private heatmap: BHeatmap

  constructor(
    private service: MapService,
    private scriptLoader: ScriptLoader
  ) {}

  public ngOnInit() {
    nullCheck(this.dataset, 'dataset is required for <heatmap>')

    this.service.getNativeMap().then(() => {
      return this.scriptLoader.load(LIB_URL, false, () => {
        this.service
          .addOverlay(() => {
            return (this.heatmap = new window.BMapLib.HeatmapOverlay(
              this.options
            ))
          })
          .then(() => {
            this.loaded.emit(this.heatmap)
            if (this.dataset) {
              this.heatmap.setDataSet(this.dataset)
            }
          })
      })
    })
  }

  public ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (changes.dataset && !changes.dataset.isFirstChange()) {
      this.heatmap.setDataSet(changes.dataset.currentValue)
    }
    if (changes.options && !changes.options.isFirstChange()) {
      this.heatmap.setOptions(changes.options.currentValue)
    }
  }

  public ngOnDestroy() {
    this.service.removeOverlay(this.heatmap)
  }
}
