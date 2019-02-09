import { Component } from '@angular/core'

import {
  ControlAnchor,
  MapOptions,
  MapTypeControlOptions,
  MapTypeControlType,
  NavigationControlOptions,
  NavigationControlType,
  OverviewMapControlOptions,
  ScaleControlOptions,
  BNavigationControl,
  MapTypeEnum
} from 'angular2-baidu-map'

@Component({
  selector: 'doc-control',
  styles: [``],
  template: `
    <p>
      The <code>control</code> component is sub-component of <code>baidu-map</code>. It is used to add
      <code>BMap.Control</code> to the map.
    </p>
    <h2 class="title">Usage</h2>
    <div class="snippet" highlight>
      <pre><code class="html">
    &lt;baidu-map [options]="expression"&gt;
      &lt;control type="string" [options]="expression"&gt;&lt;/control&gt;    
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
          <td>type</td>
          <td><span class="label required">string</span></td>
          <td>
            <p class="line-text">
              What kind of control to be added to the map. Available options:
              <a href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a2b2" target="_blank"
                >navigation</a
              >,
              <a href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a2b7" target="_blank"
                >overviewmap</a
              >,
              <a href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a2b9" target="_blank"
                >scale</a
              >,
              <a href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a2b15" target="_blank"
                >maptype</a
              >,
              <a href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a2b5" target="_blank"
                >geolocation</a
              >,
              <a href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a2b18" target="_blank"
                >panorama</a
              >
            </p>
          </td>
        </tr>
        <tr>
          <td>options</td>
          <td><span class="label">expression</span></td>
          <td>
            Literal for constructing control. See
            <a href="#/apidoc/navigation-control-options">NavigationControlOptions</a> for example
          </td>
        </tr>
      </tbody>
    </table>

    <h2 class="title">Example</h2>
    <baidu-map [options]="opts">
      <control type="navigation" [options]="controlOpts" (loaded)="controlLoaded($event)"></control>
      <control type="overviewmap" [options]="overviewmapOpts"></control>
      <control type="scale" [options]="scaleOpts"></control>
      <control type="maptype" [options]="mapTypeOpts"></control>
    </baidu-map>

    <div class="snippet" highlight>
      <pre><code class="html">
    &lt;baidu-map [options]="opts"&gt;
      &lt;control type="navigation" [options]="controlOpts" (loaded)="controlLoaded($event)"&gt;&lt;/control&gt;
      &lt;control type="overviewmap" [options]="overviewmapOpts"&gt;&lt;/control&gt;
      &lt;control type="scale" [options]="scaleOpts"&gt;&lt;/control&gt;
      &lt;control type="maptype" [options]="mapTypeOpts"&gt;&lt;/control&gt;
    &lt;/baidu-map&gt;
  </code></pre>
    </div>
    <br />

    <div class="snippet" highlight>
      <pre><code class="typescript">
import &#123;
  ControlAnchor,
  MapOptions,
  MapTypeControlOptions,
  MapTypeControlType,
  NavigationControlOptions,
  NavigationControlType,
  OverviewMapControlOptions,
  ScaleControlOptions,
  BNavigationControl,
  MapTypeEnum
&#125; from 'angular2-baidu-map'

export class DemoComponent &#123;
  public opts: MapOptions
  public controlOpts: NavigationControlOptions
  public overviewmapOpts: OverviewMapControlOptions
  public scaleOpts: ScaleControlOptions
  public mapTypeOpts: MapTypeControlOptions

  constructor() &#123;
    this.opts = &#123;
      centerAndZoom: &#123;
        lat: 31.244604,
        lng: 121.51606,
        zoom: 16
      &#125;
    &#125;

    this.controlOpts = &#123;
      anchor: ControlAnchor.BMAP_ANCHOR_TOP_LEFT,
      type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
    &#125;
    
    this.overviewmapOpts = &#123;
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT,
      isOpen: true
    &#125;

    this.scaleOpts = &#123;
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
    &#125;

    this.mapTypeOpts = &#123;
      type: MapTypeControlType.BMAP_MAPTYPE_CONTROL_HORIZONTAL,
      mapTypes: [MapTypeEnum.BMAP_NORMAL_MAP, MapTypeEnum.BMAP_SATELLITE_MAP]
    &#125;

  &#125;

  public controlLoaded(control: BNavigationControl): void &#123;
    console.log('control loaded', control)
  &#125;

&#125;  
  </code></pre>
    </div>
  `
})
export class DocControlComponent {
  public opts: MapOptions
  public controlOpts: NavigationControlOptions
  public overviewmapOpts: OverviewMapControlOptions
  public scaleOpts: ScaleControlOptions
  public mapTypeOpts: MapTypeControlOptions

  constructor() {
    this.opts = {
      centerAndZoom: {
        lat: 31.244604,
        lng: 121.51606,
        zoom: 16
      }
    }

    this.controlOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_TOP_LEFT,
      type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
    }

    this.overviewmapOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT,
      isOpen: true
    }

    this.scaleOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
    }

    this.mapTypeOpts = {
      type: MapTypeControlType.BMAP_MAPTYPE_CONTROL_HORIZONTAL,
      mapTypes: [MapTypeEnum.BMAP_NORMAL_MAP, MapTypeEnum.BMAP_SATELLITE_MAP]
    }
  }

  controlLoaded(control: BNavigationControl): void {
    console.log('control loaded', control.getType)
  }
}
