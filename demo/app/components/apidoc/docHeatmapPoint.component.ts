import { Component } from '@angular/core'

@Component({
  selector: 'doc-heatmap-point',
  styles: [],
  template: `
  <p>
    The data describes the display unit of heatmap.
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
            <td>Longitude of this display unit</td>
        </tr>
        <tr>
            <td>lat</td>
            <td><span class="label">Number</span></td>
            <td>Latitude of this display unit</td>
        </tr>
        <tr>
            <td>count</td>
            <td><span class="label">Number</span></td>
            <td>Weight of this display unit</td>
        </tr>
    </tbody>
  </table>

  <blockquote>Required properties are in red</blockquote>
    `
})
export class DocHeatmapPointComponent {
  constructor() {}
}
