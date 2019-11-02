import { Component } from '@angular/core'

@Component({
  selector: 'doc-point',
  styles: [],
  template: `
  <p>
    The literal describes a <code>BMap.Point</code> instance.
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
            <td>longitude</td>
            <td><span class="label required">Number</span></td>
            <td>longitude of a geographic point</td>
        </tr>
        <tr>
            <td>latitude</td>
            <td><span class="label required">Number</span></td>
            <td>latitude of a geographic point</td>
        </tr>
    </tbody>
  </table>
  <blockquote>Required properties are in red</blockquote>
    `
})
export class DocPointComponent {
  constructor() {}
}
