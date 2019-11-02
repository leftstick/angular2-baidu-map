import { Component } from '@angular/core'

import {
  PolylineOptions,
  Point,
  MapOptions,
  BPolyline
} from 'angular2-baidu-map'

@Component({
  selector: 'doc-polyline',
  styles: [],
  template: `
    <p>
      The <code>polyline</code> component is sub-component of
      <code>baidu-map</code>. It is used to add <code>BMap.Polyline</code> to
      the map.
    </p>
    <h2 class="title">Usage</h2>
    <div class="snippet" highlight>
      <pre><code class="html">
    &lt;baidu-map [options]="expression"&gt;
      &lt;polyline [points]="expression" [options]="expression" (loaded)="expression" (clicked)="expression"&gt;&lt;/polyline&gt;
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
          <td>points</td>
          <td><span class="label required">expression</span></td>
          <td>
            How the polyline draws. It should be an Array of point. See
            <a href="#/apidoc/point">point</a>
          </td>
        </tr>
        <tr>
          <td>options</td>
          <td><span class="label">expression</span></td>
          <td>
            Literal for constructing polyline. See
            <a
              href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a3b12"
              >PolylineOptions</a
            >
          </td>
        </tr>
        <tr>
          <td>loaded</td>
          <td><span class="label">expression</span></td>
          <td>
            Expression to evaluate upon polyline load event. (<code
              >$event</code
            >
            object is available as
            <a
              href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a3b11"
              target="_blank"
              >BMap.Polyline</a
            >)
          </td>
        </tr>
        <tr>
          <td>clicked</td>
          <td><span class="label">expression</span></td>
          <td>
            Expression to evaluate upon polyline click event. (Three objects
            passed to this callback,
            <code>e</code> for event, <code>polyline</code> for instance of
            <a
              href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a3b11"
              target="_blank"
              >BMap.Polyline</a
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
      <polyline
        [points]="points"
        [options]="polylineOptions"
        (loaded)="polylineLoaded($event)"
        (clicked)="polylineClicked($event)"
      ></polyline>
    </baidu-map>

    <div class="snippet" highlight>
      <pre><code class="html">
    &lt;baidu-map [options]="opts"&gt;
      &lt;polyline [points]="points"
        [options]="polylineOptions"
        (loaded)="polylineLoaded($event)"
        (clicked)="polylineClicked($event)" &gt;
      &lt;/polyline&gt;
    &lt;/baidu-map&gt;
  </code></pre>
    </div>
    <br />

    <div class="snippet" highlight>
      <pre><code class="typescript">
  export class DemoComponent &#123;
    public opts: MapOptions
    public points: Array&lt;Point&gt;
    public polylineOptions: PolylineOptions

    constructor() &#123;
      this.opts = &#123;
        centerAndZoom: &#123;
          lat: 39.915,
          lng: 116.404,
          zoom: 14
        &#125;
      &#125;

      this.points = [
        &#123;
          lat: 39.910,
          lng: 116.399
        &#125;, &#123;
          lat: 39.920,
          lng: 116.405
        &#125;, &#123;
          lat: 39.900,
          lng: 116.425
        &#125;
      ]

      this.polylineOptions = &#123;
        strokeColor: 'blue',
        strokeWeight: 2
      &#125;

      setTimeout(() => &#123;
        this.points = [
          &#123;
            lat: 39.945255,
            lng: 116.372648
          &#125;,
          &#123;
            lat: 39.916042,
            lng: 116.434452
          &#125;,
          &#123;
            lat: 39.902316,
            lng: 116.372648
          &#125;
        ]
      &#125;, 5000)


    &#125;

    public polylineLoaded(polyline: BPolyline): void &#123;
      console.log('polyline loaded', polyline)
    &#125;

    public polylineClicked(&#123; polyline &#125;): void &#123;
      console.log('polyline clicked', click)
    &#125;

  &#125;
  </code></pre>
    </div>
  `
})
export class DocPolylineComponent {
  public opts: MapOptions
  public points: Array<Point>
  public polylineOptions: PolylineOptions

  constructor() {
    this.opts = {
      centerAndZoom: {
        lat: 39.915,
        lng: 116.404,
        zoom: 14
      }
    }

    this.points = [
      {
        lat: 39.91,
        lng: 116.399
      },
      {
        lat: 39.92,
        lng: 116.405
      },
      {
        lat: 39.9,
        lng: 116.425
      }
    ]

    this.polylineOptions = {
      strokeColor: 'blue',
      strokeWeight: 2
    }

    setTimeout(() => {
      this.points = [
        {
          lat: 39.945255,
          lng: 116.372648
        },
        {
          lat: 39.916042,
          lng: 116.434452
        },
        {
          lat: 39.902316,
          lng: 116.372648
        }
      ]
    }, 5000)
  }

  public polylineLoaded(polyline: BPolyline): void {
    console.log('polyline loaded', polyline)
  }

  public polylineClicked({ polyline }): void {
    console.log('polyline clicked', polyline)
  }
}
