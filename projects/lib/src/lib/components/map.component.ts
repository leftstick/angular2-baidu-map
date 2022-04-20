import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  OnDestroy,
  AfterViewInit,
  Output,
  SimpleChange,
  ViewChild
} from '@angular/core'

import { MapService } from '../providers/mapService'
import { BMapInstance, MapOptions } from '../types/Map'

import { nullCheck } from '../helpers/validate'

@Component({
  providers: [MapService],
  selector: 'baidu-map',
  styles: [
    `
      .baidu-map-instance {
        width: 100%;
        height: 100%;
        display: none;
      }
      .baidu-map-offline {
        width: 100%;
        height: 100%;
        background-color: #e6e6e6;
        position: relative;
        display: none;
      }
      .baidu-map-offline label {
        fontsize: 30px;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
      .tranclude-content {
        display: none;
      }
    `
  ],
  template: `
    <div #mapinstance class="baidu-map-instance"></div>
    <div class="baidu-map-offline">
      <label>{{ 'NO_NETWORK' }}</label>
    </div>
    <div class="tranclude-content">
      <ng-content></ng-content>
    </div>
  `
})
export class MapComponent
  implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  @Input() public options: MapOptions

  @Output() public loaded = new EventEmitter()
  @Output() public clicked = new EventEmitter()

  @ViewChild('mapinstance', { static: false }) private mapInstance: ElementRef

  constructor(private service: MapService) {}

  ngOnInit(): void {
    // do nothing
  }

  public ngAfterViewInit() {
    nullCheck(this.options, 'options is required for <baidu-map>')
    nullCheck(
      this.options.centerAndZoom,
      'options.centerAndZoom is required for <baidu-map>'
    )

    this.service
      .createMap(this.mapInstance.nativeElement, this.options)
      .then(map => {
        this.loaded.emit(map)
        return map
      })
      .then(map => {
        this.addListener(map)
      })
  }

  public ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    const opts = changes.options.currentValue as MapOptions
    if (!opts) {
      return console.warn(
        'MapOptions change was ignored since you are passing empty value'
      )
    }
    this.service.setOptions(opts)
  }

  public ngOnDestroy() {
    console.log('on map destroy')
  }

  private addListener(map: BMapInstance) {
    map.addEventListener('click', (e: any) => {
      this.clicked.emit(e)
    })
  }
}
