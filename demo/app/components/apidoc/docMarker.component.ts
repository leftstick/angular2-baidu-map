import { Component } from '@angular/core'

import {
  Animation,
  MapOptions,
  BMarker,
  BMapInstance,
  MarkerOptions,
  Point
} from 'angular2-baidu-map'
import { environment } from '@/environments/environment'

@Component({
  selector: 'doc-marker',
  styles: [],
  template: `
    <p>
      The <code>marker</code> component is sub-component of
      <code>baidu-map</code>. It is used to add <code>BMap.Marker</code> to the
      map.
    </p>
    <h2 class="title">Usage</h2>
    <div class="snippet" highlight>
      <pre><code class="html">
    &lt;baidu-map [options]="expression"&gt;
      &lt;marker [point]="expression" [options]="expression" (loaded)="expression" (clicked)="expression"&gt;&lt;/marker&gt;
    &lt;/baidu-map&gt;
    </code></pre>
    </div>

    <h2 class="title">Attributes</h2>
    <blockquote>Required properties are in red</blockquote>

    <table class="matrix">
      <thead>
        <tr>
          <th style="width: 80px;">Param</th>
          <th>Type</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>point</td>
          <td><span class="label required">expression</span></td>
          <td>
            Where to display the marker. See <a href="#/apidoc/point">point</a>
          </td>
        </tr>
        <tr>
          <td>options</td>
          <td><span class="label">expression</span></td>
          <td>
            Literal for constructing marker. See
            <a href="#/apidoc/marker-options">MarkerOptions</a>
          </td>
        </tr>
        <tr>
          <td>loaded</td>
          <td><span class="label">expression</span></td>
          <td>
            Expression to evaluate upon marker load event. (<code>$event</code>
            object is available as
            <a
              href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a3b2"
              target="_blank"
              >BMap.Marker</a
            >)
          </td>
        </tr>
        <tr>
          <td>clicked</td>
          <td><span class="label">expression</span></td>
          <td>
            Expression to evaluate upon marker click event. (Three objects
            passed to this callback, <code>e</code> for event,
            <code>marker</code> for instance of
            <a
              href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a3b2"
              target="_blank"
              >BMap.Marker</a
            >, <code>map</code> for instance of
            <a
              href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a0b0"
              target="_blank"
              >BMap.Map</a
            >)
          </td>
        </tr>
      </tbody>
    </table>

    <h2 class="title">Example</h2>
    <baidu-map [options]="opts">
      <marker
        *ngFor="let marker of markers"
        [point]="marker.point"
        [options]="marker.options"
        (clicked)="showWindow($event)"
        (loaded)="setAnimation($event)"
      ></marker>
    </baidu-map>

    <div class="snippet" highlight>
      <pre><code class="html">
&lt;baidu-map [options]="opts"&gt;
  &lt;marker
   *ngFor="let marker of markers"
   [point]="marker.point"
   [options]="marker.options"
   (clicked)="showWindow($event)"
   (loaded)="setAnimation($event)" &gt;
  &lt;/marker&gt;
&lt;/baidu-map&gt;
  </code></pre>
    </div>
    <br />

    <div class="snippet" highlight>
      <pre><code class="typescript">
import &#123; Animation, MapOptions, BMarker, BMapInstance, MarkerOptions, Point &#125; from 'angular2-baidu-map'

export class DemoComponent &#123;
  public opts: MapOptions
  public markers: Array<&#123; point: Point; options?: MarkerOptions &#125;>

  constructor() &#123;
    this.opts = &#123;
      centerAndZoom: &#123;
        lat: 31.244604,
        lng: 121.51606,
        zoom: 16
      &#125;
    &#125;

    this.markers = [
      &#123;
        options: &#123;
          icon: &#123;
            imageUrl: '/assets/markericon.png',
            size: &#123;
              height: 35,
              width: 25
            &#125;,
            imageSize: &#123;
              height: 35,
              width: 25
            &#125;
          &#125;
        &#125;,
        point: &#123;
          lat: 31.244604,
          lng: 121.51606
        &#125;
      &#125;,
      &#123;
        point: &#123;
          lat: 31.246124,
          lng: 121.51232
        &#125;
      &#125;
    ]


  &#125;

  public setAnimation(marker: BMarker): void &#123;
    marker.setAnimation(Animation.BMAP_ANIMATION_BOUNCE)
  &#125;

  public showWindow(&#123; marker, map &#125;: &#123; marker: BMarker; map: BMapInstance &#125;): void &#123;
    map.openInfoWindow(
      new window.BMap.InfoWindow('地址：浦东南路360号', &#123;
        offset: new window.BMap.Size(0, -30),
        title: '新上海国际大厦'
      &#125;),
      marker.getPosition()
    )
  &#125;
&#125;
  </code></pre>
    </div>
  `
})
export class DocMarkerComponent {
  public opts: MapOptions
  public markers: Array<{ point: Point; options?: MarkerOptions }>

  constructor() {
    this.opts = {
      centerAndZoom: {
        lat: 31.244604,
        lng: 121.51606,
        zoom: 16
      }
    }

    this.markers = [
      {
        options: {
          icon: {
            imageUrl: `${environment.baseUrl}assets/markericon.png`,
            size: {
              height: 35,
              width: 25
            },
            imageSize: {
              height: 35,
              width: 25
            }
          }
        },
        point: {
          lat: 31.244604,
          lng: 121.51606
        }
      },
      {
        point: {
          lat: 31.246124,
          lng: 121.51232
        }
      }
    ]
  }

  public setAnimation(marker: BMarker): void {
    marker.setAnimation(Animation.BMAP_ANIMATION_BOUNCE)
  }

  public showWindow({
    marker,
    map
  }: {
    marker: BMarker
    map: BMapInstance
  }): void {
    map.openInfoWindow(
      new window.BMap.InfoWindow('地址：浦东南路360号', {
        offset: new window.BMap.Size(0, -30),
        title: '新上海国际大厦'
      }),
      marker.getPosition()
    )
  }
}
