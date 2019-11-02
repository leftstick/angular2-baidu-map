import { Component } from '@angular/core'

import { BMapInstance, MapOptions, Point } from 'angular2-baidu-map'

@Component({
  styles: [
    `
      :host {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      baidu-map {
        width: 800px;
        height: 290px;
        display: block;
      }
      .home-desc {
        width: 800px;
      }
      @media screen and (max-width: 800px) {
        baidu-map,
        .home-desc {
          width: 100%;
        }
      }
    `
  ],
  template: `
    <h1 class="page-title">angular2-baidu-map</h1>
    <baidu-map [options]="opts" (loaded)="onMapLoad($event)">
      <marker [point]="point" (clicked)="onClickMarker($event)"></marker>
    </baidu-map>
    <github class="section"></github>
    <div class="home-desc">
      <about class="section"></about>
      <version class="section"></version>
      <contribute class="section"></contribute>
    </div>
  `
})
export class HomeComponent {
  public opts: MapOptions
  public point: Point

  constructor() {
    this.opts = {
      centerAndZoom: {
        lat: 31.230912,
        lng: 121.486668,
        zoom: 15
      }
    }

    this.point = {
      lat: 31.230912,
      lng: 121.486668
    }
  }

  public onMapLoad(map: BMapInstance) {
    console.log('map loaded', map)
  }

  public onClickMarker(e: any) {
    console.log('e', e)
  }

  public onClickMap(e: any) {
    console.log('map e', e)
  }
}
