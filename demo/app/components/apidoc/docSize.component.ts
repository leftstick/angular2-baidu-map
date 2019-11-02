import { Component } from '@angular/core'

@Component({
  selector: 'doc-size',
  styles: [],
  template: `
  <p>
    The literal describes a <code>BMap.Size</code> instance.
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
            <td>width</td>
            <td><span class="label required">Number</span></td>
            <td>width of an object</td>
        </tr>
        <tr>
            <td>height</td>
            <td><span class="label required">Number</span></td>
            <td>height of an object</td>
        </tr>
    </tbody>
  </table>
  <blockquote>Required properties are in red</blockquote>
    `
})
export class DocSizeComponent {
  constructor() {}
}
