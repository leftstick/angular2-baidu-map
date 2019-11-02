import { Component } from '@angular/core'

import { PolygonOptions, Point, MapOptions, BPolygon } from 'angular2-baidu-map'

@Component({
  selector: 'doc-polygon',
  styles: [],
  template: `
    <p>
      The <code>polygon</code> component is sub-component of
      <code>baidu-map</code>. It is used to add <code>BMap.Polygon</code> to the
      map.
    </p>
    <h2 class="title">Usage</h2>
    <div class="snippet" highlight>
      <pre><code class="html">
    &lt;baidu-map [options]="expression"&gt;
      &lt;polygon [points]="expression" [options]="expression" (loaded)="expression"&gt;&lt;/polygon&gt;
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
            How the polygon draws. It should be an Array of point. See
            <a href="#/apidoc/point">point</a>
          </td>
        </tr>
        <tr>
          <td>options</td>
          <td><span class="label">expression</span></td>
          <td>
            Literal for constructing polygon. See
            <a
              href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a3b15"
              >PolygonOptions</a
            >
          </td>
        </tr>
        <tr>
          <td>loaded</td>
          <td><span class="label">expression</span></td>
          <td>
            Expression to evaluate upon polygon load event. (<code>$event</code>
            object is available as
            <a
              href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a3b14"
              target="_blank"
              >BMap.Polygon</a
            >)
          </td>
        </tr>
      </tbody>
    </table>

    <h2 class="title">Example</h2>
    <baidu-map [options]="opts">
      <polygon
        [points]="points"
        [options]="polygonOptions"
        (loaded)="polygonLoaded($event)"
      ></polygon>
    </baidu-map>

    <div class="snippet" highlight>
      <pre><code class="html">
    &lt;baidu-map [options]="opts"&gt;
      &lt;polygon [points]="points" [options]="polygonOptions" (loaded)="polygonLoaded($event)"&gt;&lt;/polygon&gt;
    &lt;/baidu-map&gt;
  </code></pre>
    </div>
    <br />

    <div class="snippet" highlight>
      <pre><code class="typescript">
  export class DemoComponent &#123;
    public opts: MapOptions
    public points: Array&lt;Point&gt;
    public polygonOptions: PolygonOptions

    constructor() &#123;
      this.opts = &#123;
        centerAndZoom: &#123;
          lat: 39.915,
          lng: 116.404,
          zoom: 14
        &#125;
      &#125;

      this.points = [&#123;
          lng: 116.387112,
          lat: 39.920977
      &#125;, &#123;
          lng: 116.385243,
          lat: 39.913063
      &#125;, &#123;
          lng: 116.394226,
          lat: 39.917988
      &#125;, &#123;
          lng: 116.401772,
          lat: 39.921364
      &#125;, &#123;
          lng: 116.41248,
          lat: 39.927893
      &#125;]

      this.polygonOptions = &#123;
        strokeColor: 'blue',
        strokeWeight: 2
      &#125;


    &#125;

    public polygonLoaded(polygon: BPolygon): void &#123;
      console.log('polygon loaded', polygon)
    &#125;
  &#125;
  </code></pre>
    </div>
  `
})
export class DocPolygonComponent {
  public opts: MapOptions
  public points: Array<Point>
  public polygonOptions: PolygonOptions

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
        lng: 116.387112,
        lat: 39.920977
      },
      {
        lng: 116.385243,
        lat: 39.913063
      },
      {
        lng: 116.394226,
        lat: 39.917988
      },
      {
        lng: 116.401772,
        lat: 39.921364
      },
      {
        lng: 116.41248,
        lat: 39.927893
      }
    ]

    this.polygonOptions = {
      strokeColor: 'blue',
      strokeWeight: 2
    }
  }

  public polygonLoaded(polygon: BPolygon): void {
    console.log('polygon loaded', polygon)
  }
}
