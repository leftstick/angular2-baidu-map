import { Component } from '@angular/core'

@Component({
  selector: 'doc-center-and-zoom',
  styles: [],
  template: `
  <p>
    The literal describes center point and zoom level for <code>baidu-map</code> instance.
  </p>

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
            <td>lng</td>
            <td><span class="label">Number</span></td>
            <td>longitude of a geographic point</td>
        </tr>
        <tr>
            <td>lat</td>
            <td><span class="label">Number</span></td>
            <td>latitude of a geographic point</td>
        </tr>
        <tr>
            <td>zoom</td>
            <td><span class="label">Number</span></td>
            <td>zoom leve of the map. Range: 3 ~ 19</td>
        </tr>
    </tbody>
  </table>
  <blockquote>Required properties are in red</blockquote>
    `
})
export class DocCenterAndZoomComponent {
  constructor() {}
}
