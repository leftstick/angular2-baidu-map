import { Component } from '@angular/core'

import {
  TileLayerOptions,
  MapOptions,
  BTileLayer,
  getTilesUrlFunc
} from 'angular2-baidu-map'

@Component({
  selector: 'doc-tilelayer',
  styles: [],
  template: `
    <p>
      The <code>tilelayer</code> component is sub-component of
      <code>baidu-map</code>. It is used to add <code>BMap.TileLayer</code> to
      the map.
    </p>
    <h2 class="title">Usage</h2>
    <div class="snippet" highlight>
      <pre><code class="html">
&lt;baidu-map [options]="expression"&gt;
  &lt;tilelayer [options]="expression" [getTilesUrl]="expression" (loaded)="expression"&gt;&lt;/tilelayer&gt;
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
            Literal for constructing tilelayer. See
            <a href="#/apidoc/tilelayer-options">TileLayerOptions</a>
          </td>
        </tr>
        <tr>
          <td>getTilesUrl</td>
          <td><span class="label">expression</span></td>
          <td>
            The implementation of getTilesUrl function. It should be a function
            with two parameters:
            <a
              href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a1b1
        "
              >Pixel</a
            >, <code>zoom</code>
          </td>
        </tr>
        <tr>
          <td>loaded</td>
          <td><span class="label">expression</span></td>
          <td>
            Expression to evaluate upon tilelayer load event. (<code
              >$event</code
            >
            object is available as
            <a
              href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a6b0"
              target="_blank"
              >BMap.TileLayer</a
            >)
          </td>
        </tr>
      </tbody>
    </table>

    <h2 class="title">Example</h2>
    <baidu-map [options]="opts">
      <tilelayer
        [options]="tilelayerOptions"
        [getTilesUrl]="getTilesUrl"
        (loaded)="tilelayerLoaded($event)"
      ></tilelayer>
    </baidu-map>

    <div class="snippet" highlight>
      <pre><code class="html">
&lt;baidu-map [options]="opts"&gt;
  &lt;tilelayer [options]="tilelayerOptions" [getTilesUrl]="getTilesUrl" (loaded)="tilelayerLoaded($event)"&gt;&lt;/tilelayer&gt;
&lt;/baidu-map&gt;
  </code></pre>
    </div>
    <br />

    <div class="snippet" highlight>
      <pre><code class="typescript">
export class DemoComponent &#123;
  public opts: MapOptions
  public tilelayerOptions: TileLayerOptions
  public getTilesUrl: getTilesUrlFunc

  constructor() &#123;
    this.opts = &#123;
      centerAndZoom: &#123;
        lat: 40.007978,
        lng: 116.332782,
        zoom: 16
      &#125;
    &#125;

    this.tilelayerOptions = &#123;
      transparentPng: true
    &#125;

    this.getTilesUrl = function(tileCoord, zoom) &#123;
      const &#123; x, y &#125; = tileCoord
      return \`https://lbsyun.baidu.com/jsdemo/demo/tiles/$&#123;zoom&#125;/tile$&#123;x&#125;_$&#123;y&#125;.png\`
    &#125;


  &#125;

  public tilelayerLoaded(tilelayer: BTileLayer): void &#123;
    console.log('tilelayer loaded', tilelayer)
  &#125;
&#125;
</code></pre>
    </div>
  `
})
export class DocTileLayerComponent {
  public opts: MapOptions
  public tilelayerOptions: TileLayerOptions
  public getTilesUrl: getTilesUrlFunc

  constructor() {
    this.opts = {
      centerAndZoom: {
        lat: 40.007978,
        lng: 116.332782,
        zoom: 16
      }
    }

    this.tilelayerOptions = {
      transparentPng: true
    }

    this.getTilesUrl = (tileCoord, zoom) => {
      const { x, y } = tileCoord
      return `https://lbsyun.baidu.com/jsdemo/demo/tiles/${zoom}/tile${x}_${y}.png`
    }
  }

  public tilelayerLoaded(tilelayer: BTileLayer): void {
    console.log('tilelayer loaded', tilelayer)
  }
}
