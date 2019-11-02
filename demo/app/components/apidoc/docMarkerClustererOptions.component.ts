import { Component } from '@angular/core'

@Component({
  selector: 'doc-marker-clusterer-options',
  styles: [],
  template: `
  <p>
    The literal describes a <code>BMapLib.MarkerClusterer</code> instance.
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
            <td>markers</td>
            <td><span class="label">Array&lt;Marker&gt;</span></td>
            <td>See: <a href="#/apidoc/marker-literal">Marker</a></td>
        </tr>
        <tr>
            <td>girdSize</td>
            <td><span class="label">Number</span></td>
            <td>Pixel to be used in clusterer grid, <code>60</code> by default</td>
        </tr>
        <tr>
            <td>maxZoom</td>
            <td><span class="label">Number</span></td>
            <td>Maximum clusterer level</td>
        </tr>
        <tr>
            <td>minClusterSize</td>
            <td><span class="label">Number</span></td>
            <td>Minimum clusterer level, <code>2</code> by default</td>
        </tr>
        <tr>
            <td>isAverangeCenter</td>
            <td><span class="label">Boolean</span></td>
            <td>Whether to use the averange as the center point. <code>false</code> by default</td>
        </tr>
        <tr>
            <td>styles</td>
            <td><span class="label">Array&lt;TextIconStyle&gt;</span></td>
            <td>See: <a href="#/apidoc/text-icon-style">TextIconStyle</a></td>
        </tr>
    </tbody>
  </table>

  <blockquote>Required properties are in red</blockquote>
    `
})
export class DocMarkerClustererOptionsComponent {
  constructor() {}
}
