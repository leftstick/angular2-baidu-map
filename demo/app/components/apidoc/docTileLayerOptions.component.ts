import { Component } from '@angular/core'

@Component({
  selector: 'doc-tilelayer-options',
  styles: [],
  template: `
    <p>The literal describes a <code>BMap.TileLayer</code> instance.</p>
    <table class="matrix">
      <thead>
        <tr>
          <th style="width: 80px;">Property</th>
          <th>Type</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>transparentPng</td>
          <td><span class="label">Boolean</span></td>
          <td>Define the used png if it is transparent or not</td>
        </tr>
        <tr>
          <td>tileUrlTemplate</td>
          <td><span class="label">String</span></td>
          <td>
            Specify the tile template. If you don't provide this template URL,
            you must provide implementation of <code>getTilesUrl</code> to
            <code>&lt;tillayer/&gt;</code>
          </td>
        </tr>
        <tr>
          <td>copyright</td>
          <td><span class="label">Copyright</span></td>
          <td>
            Copyright information, see
            <a
              href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a2b14"
              >Copyright</a
            >
          </td>
        </tr>
        <tr>
          <td>zIndex</td>
          <td><span class="label">Number</span></td>
          <td>Zindex of this tilelayer</td>
        </tr>
      </tbody>
    </table>

    <blockquote>Required properties are in red</blockquote>
  `
})
export class DocTileLayerOptionsComponent {
  constructor() {}
}
