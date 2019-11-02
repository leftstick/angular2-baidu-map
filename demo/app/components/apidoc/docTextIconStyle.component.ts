import { Component } from '@angular/core'

@Component({
  selector: 'doc-text-icon-style',
  styles: [],
  template: `
  <p>
    The literal describes style used by <code>BMapLib.MarkerClusterer</code> instance.
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
            <td>url</td>
            <td><span class="label">String</span></td>
            <td>Image url</td>
        </tr>
        <tr>
            <td>size</td>
            <td><span class="label">Object</span></td>
            <td>See: <a href="#/apidoc/size">Size</a></td>
        </tr>
        <tr>
            <td>anchor</td>
            <td><span class="label">Object</span></td>
            <td>See: <a href="#/apidoc/size">Size</a></td>
        </tr>
        <tr>
            <td>offset</td>
            <td><span class="label">Object</span></td>
            <td>See: <a href="#/apidoc/size">Size</a></td>
        </tr>
        <tr>
            <td>textSize</td>
            <td><span class="label">Number</span></td>
            <td>Font size, <code>10</code> by default</td>
        </tr>
        <tr>
            <td>textColor</td>
            <td><span class="label">String</span></td>
            <td>Font color. <code>black</code> by default</td>
        </tr>
    </tbody>
  </table>

  <blockquote>Required properties are in red</blockquote>
    `
})
export class DocTextIconStyleComponent {
  constructor() {}
}
