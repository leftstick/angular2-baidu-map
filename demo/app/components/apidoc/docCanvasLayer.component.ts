import { Component } from '@angular/core'

import {
  BMapInstance,
  CanvasLayerOptions,
  MapOptions,
  BCanvasLayer
} from 'angular2-baidu-map'

@Component({
  selector: 'doc-canvaslayer',
  styles: [],
  template: `
    <p>
      The <code>canvaslayer</code> component is sub-component of
      <code>baidu-map</code>. It is used to add <code>BMap.Canvaslayer</code> to
      the map.
    </p>
    <h2 class="title">Usage</h2>
    <div class="snippet" highlight>
      <pre><code class="html">
&lt;baidu-map [options]="expression"&gt;
  &lt;canvaslayer [options]="expression" (loaded)="expression"&gt;&lt;/canvaslayer&gt;
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
          <td>options</td>
          <td><span class="label">expression</span></td>
          <td>
            Literal for constructing canvaslayer. See
            <a href="#/apidoc/canvaslayer-options">CanvasLayerOptions</a>
          </td>
        </tr>
        <tr>
          <td>loaded</td>
          <td><span class="label">expression</span></td>
          <td>
            Expression to evaluate upon canvaslayer load event. (<code
              >$event</code
            >
            object is available as
            <a
              href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a6b2"
              target="_blank"
              >BMap.CanvasLayer</a
            >)
          </td>
        </tr>
      </tbody>
    </table>

    <h2 class="title">Example</h2>
    <baidu-map [options]="opts">
      <canvaslayer
        [options]="canvaslayerOptions"
        (loaded)="canvaslayerLoaded($event)"
      ></canvaslayer>
    </baidu-map>

    <div class="snippet" highlight>
      <pre><code class="html">
&lt;baidu-map [options]="opts"&gt;
  &lt;canvaslayer [options]="canvaslayerOptions" (loaded)="canvaslayerLoaded($event)"&gt;&lt;/canvaslayer&gt;
&lt;/baidu-map&gt;
  </code></pre>
    </div>
    <br />

    <div class="snippet" highlight>
      <pre><code class="typescript">
import &#123; BMapInstance, CanvasLayerOptions, MapOptions, BCanvasLayer &#125; from 'angular2-baidu-map'

export class DemoComponent &#123;
  public opts: MapOptions
  public canvasOptions: CanvasLayerOptions

  constructor() &#123;
    this.opts = &#123;
      centerAndZoom: &#123;
        lat: 39.915,
        lng: 116.404,
        zoom: 15
      &#125;
    &#125;

    this.canvaslayerOptions = &#123;
      update(map: BMapInstance, canvas: HTMLCanvasElement) &#123;
        const ctx = canvas.getContext('2d')

        if (!ctx) &#123;
          return
        &#125;

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        ctx.fillStyle = 'blue'
        ctx.beginPath()
        var data = [new window.BMap.Point(116.404, 39.915)]

        for (var i = 0, len = data.length; i < len; i++) &#123;
          var pixel = map.pointToPixel(data[i])
          ctx.fillRect(pixel.x, pixel.y, 30, 30)
        &#125;
      &#125;
    &#125;

  &#125;

  public canvaslayerLoaded(canvaslayer: BCanvasLayer): void &#123;
    console.log('canvaslayer loaded', canvaslayer)
  &#125;
&#125;
</code></pre>
    </div>
  `
})
export class DocCanvasLayerComponent {
  public opts: MapOptions
  public canvaslayerOptions: CanvasLayerOptions

  constructor() {
    this.opts = {
      centerAndZoom: {
        lat: 39.915,
        lng: 116.404,
        zoom: 15
      }
    }

    this.canvaslayerOptions = {
      update(map: BMapInstance, canvas: HTMLCanvasElement) {
        const ctx = canvas.getContext('2d')

        if (!ctx) {
          return
        }

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        ctx.fillStyle = 'blue'
        ctx.beginPath()
        const data = [new window.BMap.Point(116.404, 39.915)]

        for (let i = 0, len = data.length; i < len; i++) {
          const pixel = map.pointToPixel(data[i])
          ctx.fillRect(pixel.x, pixel.y, 30, 30)
        }
      }
    }
  }

  public canvaslayerLoaded(canvaslayer: BCanvasLayer): void {
    console.log('canvaslayer loaded', canvaslayer)
  }
}
