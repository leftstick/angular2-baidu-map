import { Component } from '@angular/core'

@Component({
  selector: 'doc-marker-literal',
  styles: [],
  template: `
  <p>
    The literal describes a <code>BMap.Marker</code> instance.
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
            <td>point</td>
            <td><span class="label">Object</span></td>
            <td>See: <a href="#/apidoc/point">Point</a></td>
        </tr>
        <tr>
            <td>options</td>
            <td><span class="label">Object</span></td>
            <td>See: <a href="#/apidoc/marker-options">MarkerOptions</a></td>
        </tr>
    </tbody>
  </table>

  <blockquote>Required properties are in red</blockquote>
    `
})
export class DocMarkerLiteralComponent {
  constructor() {}
}
