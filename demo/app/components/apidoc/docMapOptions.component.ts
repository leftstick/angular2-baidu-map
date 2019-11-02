import { Component } from '@angular/core'

@Component({
  selector: 'doc-map-options',
  styles: [],
  template: `
    <p>The literal for constructing a <code>baidu-map</code> instance.</p>
    <p>
      Basic options introduced at
      <a
        href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a0b1"
        target="_blank"
        >MapOptions</a
      >
      are supported.
    </p>

    <table class="matrix">
      <thead>
        <tr>
          <th style="width: 180px;">Property</th>
          <th>Type</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>minZoom</td>
          <td><span class="label">Number</span></td>
          <td><p class="line-text">Minimal zoom level of the map</p></td>
        </tr>
        <tr>
          <td>maxZoom</td>
          <td><span class="label">Number</span></td>
          <td><p class="line-text">Maximal zoom level of the map</p></td>
        </tr>
        <tr>
          <td>enableHighResolution</td>
          <td><span class="label">Boolean</span></td>
          <td>
            <p class="line-text">
              Whether to use high resolution map. Default: <code>true</code>
            </p>
          </td>
        </tr>
        <tr>
          <td>enableAutoResize</td>
          <td><span class="label">Boolean</span></td>
          <td>
            <p class="line-text">
              Whether to use auto-resize function. Default: <code>true</code>
            </p>
          </td>
        </tr>
        <tr>
          <td>enableMapClick</td>
          <td><span class="label">Boolean</span></td>
          <td>
            <p class="line-text">
              Whether to enable map click. Default: <code>true</code>
            </p>
          </td>
        </tr>
        <tr>
          <td>disableDragging</td>
          <td><span class="label">Boolean</span></td>
          <td>
            <p class="line-text">Whether to disable map dragable function</p>
          </td>
        </tr>
        <tr>
          <td>enableScrollWheelZoom</td>
          <td><span class="label">Boolean</span></td>
          <td>
            <p class="line-text">
              Whether to enable wheel for zooming function
            </p>
          </td>
        </tr>
        <tr>
          <td>disableDoubleClickZoom</td>
          <td><span class="label">Boolean</span></td>
          <td>
            <p class="line-text">
              Whether to disable double click for zooming function
            </p>
          </td>
        </tr>
        <tr>
          <td>enableKeyboard</td>
          <td><span class="label">Boolean</span></td>
          <td>
            <p class="line-text">
              Whether to enable keyboard for moving map function. You can use
              <code>up</code>, <code>right</code>, <code>down</code>,
              <code>left</code>, to move map.
            </p>
          </td>
        </tr>
        <tr>
          <td>enableInertialDragging</td>
          <td><span class="label">Boolean</span></td>
          <td>
            <p class="line-text">Whether to enable inertial drag function</p>
          </td>
        </tr>
        <tr>
          <td>enableContinuousZoom</td>
          <td><span class="label">Boolean</span></td>
          <td>
            <p class="line-text">
              Whether to enable continuous zooming function
            </p>
          </td>
        </tr>
        <tr>
          <td>disablePinchToZoom</td>
          <td><span class="label">Boolean</span></td>
          <td>
            <p class="line-text">
              Whether to disable pinch for zooming function
            </p>
          </td>
        </tr>
        <tr>
          <td>cursor</td>
          <td><span class="label">String</span></td>
          <td>
            <p class="line-text">
              Set default style of cursor, should follow CSS specification
            </p>
          </td>
        </tr>
        <tr>
          <td>draggingCursor</td>
          <td><span class="label">String</span></td>
          <td>
            <p class="line-text">
              Set default style of dragging cursor, should follow CSS
              specification
            </p>
          </td>
        </tr>
        <tr>
          <td>currentCity</td>
          <td><span class="label">String</span></td>
          <td><p class="line-text">Set current city. Like: 北京市</p></td>
        </tr>
        <tr>
          <td>centerAndZoom</td>
          <td><span class="label required">Object</span></td>
          <td>
            <p class="line-text">
              See <a href="#/apidoc/center-and-zoom">centerAndZoom</a>
            </p>
          </td>
        </tr>
        <tr>
          <td>mapType</td>
          <td><span class="label required">Object</span></td>
          <td>
            Should be an instance of
            <a
              href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a5b0"
              >BMap.MapType</a
            >, or constant <a href="#/apidoc/maptypeenum">MapTypeEnum</a>
          </td>
        </tr>
      </tbody>
    </table>
    <blockquote>Required properties are in red</blockquote>
  `
})
export class DocMapOptionsComponent {
  constructor() {}
}
