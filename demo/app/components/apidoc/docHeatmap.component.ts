import { Component } from '@angular/core'

import {
  HeatmapOptions,
  MapOptions,
  BHeatmap,
  HeatmapData
} from 'angular2-baidu-map'

@Component({
  selector: 'doc-heatmap',
  styles: [],
  template: `
    <p>
      The <code>heatmap</code> component is sub-component of
      <code>baidu-map</code>. It is used to add
      <code>BMapLib.HeatmapOverlay</code> to the map.
    </p>
    <h2 class="title">Usage</h2>
    <div class="snippet" highlight>
      <pre><code class="html">
    &lt;baidu-map [options]="expression"&gt;
      &lt;heatmap [dataset]="expression" [options]="expression" (loaded)="expression"&gt;&lt;/heatmap&gt;
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
          <td>dataset</td>
          <td><span class="label required">expression</span></td>
          <td>
            Dataset for the heatmap. It should be an literal object. See
            <a href="#/apidoc/heatmap-data">HeatmapData</a>
          </td>
        </tr>
        <tr>
          <td>options</td>
          <td><span class="label">expression</span></td>
          <td>
            Literal for constructing heatmap. See
            <a href="#/apidoc/heatmap-options">HeatmapOptions</a>
          </td>
        </tr>
        <tr>
          <td>loaded</td>
          <td><span class="label">expression</span></td>
          <td>
            Expression to evaluate upon heatmap load event. (<code>$event</code>
            object is available as
            <a
              href="http://api.map.baidu.com/library/Heatmap/2.0/docs/symbols/BMapLib.HeatmapOverlay.html"
              target="_blank"
              >BMapLib.HeatmapOverlay</a
            >)
          </td>
        </tr>
      </tbody>
    </table>

    <h2 class="title">Example</h2>
    <baidu-map [options]="opts">
      <heatmap
        [dataset]="data"
        [options]="heatmapOptions"
        (loaded)="heatmapLoaded($event)"
      ></heatmap>
    </baidu-map>

    <div class="snippet" highlight>
      <pre><code class="html">
    &lt;baidu-map [options]="opts"&gt;
      &lt;heatmap [dataset]="data" [options]="heatmapOptions" (loaded)="heatmapLoaded($event)"&gt;&lt;/heatmap&gt;
    &lt;/baidu-map&gt;
  </code></pre>
    </div>
    <br />

    <div class="snippet" highlight>
      <pre><code class="typescript">
  export class DemoComponent &#123;
    public opts: MapOptions
    public data: HeatmapData
    public heatmapOptions: HeatmapOptions

    constructor() &#123;
      this.opts = &#123;
        centerAndZoom: &#123;
          lat: 39.915,
          lng: 116.404,
          zoom: 14
        &#125;
      &#125;

      this.data = [&#123;
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

      this.heatmapOptions = &#123;
        visible: true
      &#125;


    &#125;

    public heatmapLoaded(heatmap: BHeatmap): void &#123;
      console.log('heatmap loaded', heatmap)
    &#125;
  &#125;
  </code></pre>
    </div>
  `
})
export class DocHeatmapComponent {
  public opts: MapOptions
  public data: HeatmapData
  public heatmapOptions: HeatmapOptions

  constructor() {
    this.opts = {
      centerAndZoom: {
        lat: 39.915,
        lng: 116.404,
        zoom: 14
      }
    }

    this.data = {
      data: [
        {
          lng: 116.418261,
          lat: 39.921984,
          count: 50
        },
        {
          lng: 116.423332,
          lat: 39.916532,
          count: 51
        },
        {
          lng: 116.419787,
          lat: 39.930658,
          count: 15
        },
        {
          lng: 116.418455,
          lat: 39.920921,
          count: 40
        },
        {
          lng: 116.418843,
          lat: 39.915516,
          count: 100
        },
        {
          lng: 116.42546,
          lat: 39.918503,
          count: 6
        },
        {
          lng: 116.423289,
          lat: 39.919989,
          count: 18
        },
        {
          lng: 116.418162,
          lat: 39.915051,
          count: 80
        },
        {
          lng: 116.422039,
          lat: 39.91782,
          count: 11
        },
        {
          lng: 116.41387,
          lat: 39.917253,
          count: 7
        },
        {
          lng: 116.41773,
          lat: 39.919426,
          count: 42
        },
        {
          lng: 116.421107,
          lat: 39.916445,
          count: 4
        },
        {
          lng: 116.417521,
          lat: 39.917943,
          count: 27
        },
        {
          lng: 116.419812,
          lat: 39.920836,
          count: 23
        },
        {
          lng: 116.420682,
          lat: 39.91463,
          count: 60
        },
        {
          lng: 116.415424,
          lat: 39.924675,
          count: 8
        },
        {
          lng: 116.419242,
          lat: 39.914509,
          count: 15
        },
        {
          lng: 116.422766,
          lat: 39.921408,
          count: 25
        },
        {
          lng: 116.421674,
          lat: 39.924396,
          count: 21
        },
        {
          lng: 116.427268,
          lat: 39.92267,
          count: 1
        },
        {
          lng: 116.417721,
          lat: 39.920034,
          count: 51
        },
        {
          lng: 116.412456,
          lat: 39.92667,
          count: 7
        },
        {
          lng: 116.420432,
          lat: 39.919114,
          count: 11
        },
        {
          lng: 116.425013,
          lat: 39.921611,
          count: 35
        },
        {
          lng: 116.418733,
          lat: 39.931037,
          count: 22
        },
        {
          lng: 116.419336,
          lat: 39.931134,
          count: 4
        },
        {
          lng: 116.413557,
          lat: 39.923254,
          count: 5
        },
        {
          lng: 116.418367,
          lat: 39.92943,
          count: 3
        },
        {
          lng: 116.424312,
          lat: 39.919621,
          count: 100
        },
        {
          lng: 116.423874,
          lat: 39.919447,
          count: 87
        },
        {
          lng: 116.424225,
          lat: 39.923091,
          count: 32
        },
        {
          lng: 116.417801,
          lat: 39.921854,
          count: 44
        },
        {
          lng: 116.417129,
          lat: 39.928227,
          count: 21
        },
        {
          lng: 116.426426,
          lat: 39.922286,
          count: 80
        }
      ],
      max: 100
    }

    this.heatmapOptions = {
      visible: true
    }
  }

  public heatmapLoaded(heatmap: BHeatmap): void {
    console.log('heatmap loaded', heatmap)
  }
}
