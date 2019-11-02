import { Component } from '@angular/core'

@Component({
  selector: 'doc-heatmap-options',
  styles: [],
  template: `
  <p>
    The literal describes how a <code>BMapLib.HeatmapOverlay</code> constructed.
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
            <td>radius</td>
            <td><span class="label">Number</span></td>
            <td>Radius of the heatmap</td>
        </tr>
        <tr>
            <td>visible</td>
            <td><span class="label">Boolean</span></td>
            <td>Whether to display the heatmap</td>
        </tr>
        <tr>
            <td>gradient</td>
            <td><span class="label">Object</span></td>
            <td>Gradient of the heatmap</td>
        </tr>
        <tr>
            <td>opacity</td>
            <td><span class="label">Number</span></td>
            <td>Opacity of the heatmap</td>
        </tr>
    </tbody>
  </table>

  <blockquote>Required properties are in red</blockquote>
    `
})
export class DocHeatmapOptionsComponent {
  constructor() {}
}
