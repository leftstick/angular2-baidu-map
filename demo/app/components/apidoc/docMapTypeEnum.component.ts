import { Component } from '@angular/core'

@Component({
  selector: 'doc-maptypeenum',
  styles: [],
  template: `
  <p>
    The constant enum for constructing specifing a MapType
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
            <td>BMAP_NORMAL_MAP</td>
            <td><span class="label">BMAP_NORMAL_MAP</span></td>
            <td>Normal street view</td>
        </tr>
        <tr>
            <td>BMAP_PERSPECTIVE_MAP</td>
            <td><span class="label">BMAP_PERSPECTIVE_MAP</span></td>
            <td>Normal perspective view</td>
        </tr>
        <tr>
            <td>BMAP_SATELLITE_MAP</td>
            <td><span class="label">BMAP_SATELLITE_MAP</span></td>
            <td>Normal satellite view</td>
        </tr>
        <tr>
            <td>BMAP_HYBRID_MAP</td>
            <td><span class="label">BMAP_HYBRID_MAP</span></td>
            <td>Normal hybrid view</td>
        </tr>
    </tbody>
  </table>

  <blockquote>Required properties are in red</blockquote>
    `
})
export class DocMapTypeEnumComponent {
  constructor() {}
}
