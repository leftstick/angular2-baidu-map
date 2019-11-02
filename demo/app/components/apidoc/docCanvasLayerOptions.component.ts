import { Component } from '@angular/core'

@Component({
  selector: 'doc-canvaslayer-options',
  styles: [],
  template: `
    <p>The literal describes a <code>BMap.CanvasLayer</code> instance.</p>
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
          <td>zIndex</td>
          <td><span class="label">Number</span></td>
          <td><code>z-index</code> property of <code>canvas</code></td>
        </tr>
        <tr>
          <td>paneName</td>
          <td><span class="label">String</span></td>
          <td>
            see <code>paneName</code> in
            <a
              href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b29"
              >paneName</a
            >
          </td>
        </tr>
        <tr>
          <td>update</td>
          <td>
            <span class="label">(BMapInstance, HTMLCanvasElement) => void</span>
          </td>
          <td>the main drawing logic</td>
        </tr>
      </tbody>
    </table>

    <blockquote>Required properties are in red</blockquote>
  `
})
export class DocCanvasLayerOptionsComponent {
  constructor() {}
}
