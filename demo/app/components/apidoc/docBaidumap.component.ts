import { Component } from '@angular/core'

import { MapOptions, MapTypeEnum } from 'angular2-baidu-map'

@Component({
  selector: 'doc-baidu-map',
  styles: [``],
  templateUrl: './docBaidumap.component.html'
})
export class DocBaidumapComponent {
  public opts: MapOptions

  constructor() {
    this.opts = {
      centerAndZoom: {
        lat: 39.920116,
        lng: 116.403703,
        zoom: 16
      },
      enableKeyboard: true,
      mapType: MapTypeEnum.BMAP_SATELLITE_MAP
    }
  }

  public mapClick(e: any) {
    alert(`The coordinate you chose is: ${e.point.lng} : ${e.point.lat}`)
  }
}
