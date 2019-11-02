import { Component } from '@angular/core'

import { CircleOptions, Point, MapOptions, BCircle } from 'angular2-baidu-map'

@Component({
  selector: 'doc-circle',
  styles: [],
  template: `
    <p>
      The <code>circle</code> component is sub-component of
      <code>baidu-map</code>. It is used to add <code>BMap.Circle</code> to the
      map.
    </p>
    <h2 class="title">Usage</h2>
    <div class="snippet" highlight>
      <pre><code class="html">
    &lt;baidu-map [options]="expression"&gt;
      &lt;circle [center]="expression" [radius]="expression" [options]="expression" (loaded)="expression"&gt;&lt;/circle&gt;
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
          <td>center</td>
          <td><span class="label required">expression</span></td>
          <td>
            Where to display this circle overlay. See
            <a href="#/apidoc/point">point</a>
          </td>
        </tr>
        <tr>
          <td>radius</td>
          <td><span class="label">expression</span></td>
          <td>The radius of this circle, should be a number</td>
        </tr>
        <tr>
          <td>options</td>
          <td><span class="label">expression</span></td>
          <td>
            Literal for constructing circle. See
            <a
              href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a3b17"
              >CircleOptions</a
            >
          </td>
        </tr>
        <tr>
          <td>loaded</td>
          <td><span class="label">expression</span></td>
          <td>
            Expression to evaluate upon circle load event. (<code>$event</code>
            object is available as
            <a
              href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a3b16"
              target="_blank"
              >BMap.Circle</a
            >)
          </td>
        </tr>
      </tbody>
    </table>

    <h2 class="title">Example</h2>
    <baidu-map [options]="opts">
      <circle
        [center]="center"
        radius="600"
        [options]="circleOptions"
        (loaded)="circleLoaded($event)"
      ></circle>
    </baidu-map>

    <div class="snippet" highlight>
      <pre><code class="html">
    &lt;baidu-map [options]="opts"&gt;
      &lt;circle [center]="center" radius="600" [options]="circleOptions" (loaded)="circleLoaded($event)"&gt;&lt;/circle&gt;
    &lt;/baidu-map&gt;
  </code></pre>
    </div>
    <br />

    <div class="snippet" highlight>
      <pre><code class="typescript">
  export class DemoComponent &#123;
    public opts: MapOptions
    public center: Point
    public circleOptions: CircleOptions

    constructor() &#123;
      this.opts = &#123;
        centerAndZoom: &#123;
          lng: 116.404,
          lat: 39.915,
          zoom: 14
        &#125;
      &#125;

      this.center = &#123;
        lng: 116.404,
        lat: 39.915
      &#125;

      this.circleOptions = &#123;
        strokeColor: 'blue',
        strokeWeight: 2
      &#125;


    &#125;

    public circleLoaded(circle: BCircle): void &#123;
      console.log('circle loaded', circle)
    &#125;
  &#125;
  </code></pre>
    </div>
  `
})
export class DocCircleComponent {
  public opts: MapOptions
  public center: Point
  public circleOptions: CircleOptions

  constructor() {
    this.opts = {
      centerAndZoom: {
        lng: 116.404,
        lat: 39.915,
        zoom: 14
      }
    }

    this.center = {
      lng: 116.404,
      lat: 39.915
    }

    this.circleOptions = {
      strokeColor: 'blue',
      strokeWeight: 2
    }
  }

  public circleLoaded(circle: BCircle): void {
    console.log('circle loaded', circle)
  }
}
