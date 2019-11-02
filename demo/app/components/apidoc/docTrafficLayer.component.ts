import { Component } from '@angular/core'

import {
  TrafficLayerOptions,
  MapOptions,
  BTrafficLayer
} from 'angular2-baidu-map'

@Component({
  selector: 'doc-trafficlayer',
  styles: [],
  template: `
    <p>
      The <code>trafficlayer</code> component is sub-component of
      <code>baidu-map</code>. It is used to add
      <code>BMap.TrafficLayer</code> to the map.
    </p>
    <h2 class="title">Usage</h2>
    <div class="snippet" highlight>
      <pre><code class="html">
&lt;baidu-map [options]="expression"&gt;
  &lt;trafficlayer [options]="expression" (loaded)="expression"&gt;&lt;/trafficlayer&gt;
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
            Literal for constructing trafficlayer. See
            <a href="#/apidoc/trafficlayer-options">TrafficLayerOptions</a>
          </td>
        </tr>
        <tr>
          <td>loaded</td>
          <td><span class="label">expression</span></td>
          <td>
            Expression to evaluate upon trafficlayer load event. (<code
              >$event</code
            >
            object is available as
            <a
              href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a6b2"
              target="_blank"
              >BMap.TrafficLayer</a
            >)
          </td>
        </tr>
      </tbody>
    </table>

    <h2 class="title">Example</h2>
    <baidu-map [options]="opts">
      <trafficlayer
        [options]="trafficlayerOptions"
        (loaded)="trafficlayerLoaded($event)"
      ></trafficlayer>
    </baidu-map>

    <div class="snippet" highlight>
      <pre><code class="html">
&lt;baidu-map [options]="opts"&gt;
  &lt;trafficlayer [options]="trafficlayerOptions" (loaded)="trafficlayerLoaded($event)"&gt;&lt;/trafficlayer&gt;
&lt;/baidu-map&gt;
  </code></pre>
    </div>
    <br />

    <div class="snippet" highlight>
      <pre><code class="typescript">
export class DemoComponent &#123;
  public opts: MapOptions
  public trafficlayerOptions: TrafficLayerOptions

  constructor() &#123;
    this.opts = &#123;
      centerAndZoom: &#123;
        lat: 39.915,
        lng: 116.404,
        zoom: 15
      &#125;
    &#125;

    this.trafficlayerOptions = &#123;
      predictDate: &#123;
        weekday: 3
      &#125;
    &#125;

  &#125;

  public trafficlayerLoaded(trafficlayer: BTrafficLayer): void &#123;
    console.log('trafficlayer loaded', trafficlayer)
  &#125;
&#125;
</code></pre>
    </div>
  `
})
export class DocTrafficLayerComponent {
  public opts: MapOptions
  public trafficlayerOptions: TrafficLayerOptions

  constructor() {
    this.opts = {
      centerAndZoom: {
        lat: 39.915,
        lng: 116.404,
        zoom: 15
      }
    }

    this.trafficlayerOptions = {
      predictDate: {
        weekday: 3
      }
    }
  }

  public trafficlayerLoaded(trafficlayer: BTrafficLayer): void {
    console.log('trafficlayer loaded', trafficlayer)
  }
}
