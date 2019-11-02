import { Component } from '@angular/core'

@Component({
  selector: 'doc-heatmap-data',
  styles: [],
  template: `
  <p>
    The data describes how a <code>BMapLib.HeatmapOverlay</code> displayed.
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
            <td>data</td>
            <td><span class="label">Array</span></td>
            <td>Array of <a href="#/apidoc/heatmap-point">HeatmapPoint</a></td>
        </tr>
        <tr>
            <td>max</td>
            <td><span class="label">Number</span></td>
            <td>Max weight of the heatmap</td>
        </tr>
    </tbody>
  </table>

  <blockquote>Required properties are in red</blockquote>
    `
})
export class DocHeatmapDataComponent {
  constructor() {}
}
