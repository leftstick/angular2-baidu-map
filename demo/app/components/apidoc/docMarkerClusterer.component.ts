import { Component } from '@angular/core'

import {
  BMarkerClusterer,
  Marker,
  MapOptions,
  MarkerClustererOptions
} from 'angular2-baidu-map'

@Component({
  selector: 'doc-marker-clusterer',
  styles: [],
  template: `
    <p>
      The <code>marker-clusterer</code> component is sub-component of
      <code>baidu-map</code>. It is used to add
      <code>BMapLib.MarkerClusterer</code> to the map.
    </p>
    <h2 class="title">Usage</h2>
    <div class="snippet" highlight>
      <pre><code class="html">
    &lt;baidu-map [options]="expression"&gt;
      &lt;marker-clusterer [options]="expression" (loaded)="expression"&gt;&lt;/marker-clusterer&gt;
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
            Literal for constructing MarkerClusterer. See
            <a href="#/apidoc/marker-clusterer-options"
              >MarkerClustererOptions</a
            >
          </td>
        </tr>
        <tr>
          <td>loaded</td>
          <td><span class="label">expression</span></td>
          <td>
            Expression to evaluate upon marker-clusterer load event. (<code
              >$event</code
            >
            object is available as
            <a
              href="http://api.map.baidu.com/library/MarkerClusterer/1.2/docs/symbols/BMapLib.MarkerClusterer.html"
              target="_blank"
              >BMapLib.MarkerClusterer</a
            >)
          </td>
        </tr>
      </tbody>
    </table>

    <h2 class="title">Example</h2>
    <baidu-map [options]="opts">
      <marker-clusterer
        [options]="clustererOptions"
        (loaded)="markerClustererLoaded($event)"
      ></marker-clusterer>
    </baidu-map>

    <div class="snippet" highlight>
      <pre><code class="html">
    &lt;baidu-map [options]="opts"&gt;
      &lt;marker-clusterer [options]="clustererOptions" (loaded)="markerClustererLoaded($event)"&gt;&lt;/marker-clusterer&gt;
    &lt;/baidu-map&gt;
  </code></pre>
    </div>
    <br />

    <div class="snippet" highlight>
      <pre><code class="typescript">
  export class DemoComponent &#123;
    public opts: MapOptions
    public clustererOptions: MarkerClustererOptions

    constructor() &#123;
      this.opts = &#123;
        centerAndZoom: &#123;
          lat: 39.915,
          lng: 116.404,
          zoom: 14
        &#125;
      &#125;

      this.clustererOptions = &#123;
        markers: this.getRandomMarkers()
      &#125;


    &#125;

    private getRandomMarkers() &#123;
      const markers: Array&lt;Marker&gt; = []

      for (let i = 0; i &lt; 20; i++) &#123;
        markers.push(&#123;
          point: &#123;
            lng: Math.random() * 40 + 85,
            lat: Math.random() * 30 + 21
          &#125;
        &#125;)
      &#125;
      return markers
    &#125;

    public markerClustererLoaded(clusterer: BMarkerClusterer): void &#123;
      console.log('clusterer loaded', clusterer)
    &#125;
  &#125;
  </code></pre>
    </div>
  `
})
export class DocMarkerClustererComponent {
  public opts: MapOptions
  public clustererOptions: MarkerClustererOptions

  constructor() {
    this.opts = {
      centerAndZoom: {
        lat: 39.915,
        lng: 116.404,
        zoom: 4
      }
    }

    this.clustererOptions = {
      markers: this.getRandomMarkers()
    }
  }

  private getRandomMarkers() {
    const markers: Array<Marker> = []

    for (let i = 0; i < 20; i++) {
      markers.push({
        point: {
          lng: Math.random() * 40 + 85,
          lat: Math.random() * 30 + 21
        }
      })
    }
    return markers
  }

  public markerClustererLoaded(clusterer: BMarkerClusterer): void {
    console.log('clusterer loaded', clusterer)
  }
}
