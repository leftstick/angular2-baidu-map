import { Component } from '@angular/core'

@Component({
  selector: 'doc-trafficlayer-options',
  styles: [],
  template: `
  <p>
    The literal describes a <code>BMap.TrafficLayer</code> instance.
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
            <td>predictDate</td>
            <td><span class="label">PredictDate</span></td>
            <td>See <a href="#/apidoc/predictdate">PredictDate</a></td>
        </tr>
    </tbody>
  </table>

  <blockquote>Required properties are in red</blockquote>
    `
})
export class DocTrafficLayerOptionsComponent {
  constructor() {}
}
