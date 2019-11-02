import { Component } from '@angular/core'

@Component({
  selector: 'doc-predictdate',
  styles: [],
  template: `
  <p>
    The literal describes a <code>BMap.PredictDate</code> instance.
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
            <td>weekday</td>
            <td><span class="label">Number</span></td>
            <td>Predict week number, 1 ~ 7</td>
        </tr>
        <tr>
            <td>hour</td>
            <td><span class="label">Number</span></td>
            <td>Predict hour number, 0 ~ 23</td>
        </tr>
    </tbody>
  </table>

  <blockquote>Required properties are in red</blockquote>
    `
})
export class DocPredictDateComponent {
  constructor() {}
}
