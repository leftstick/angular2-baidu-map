import { Component } from '@angular/core'

@Component({
  selector: 'doc-icon',
  styles: [],
  template: `
  <p>
    The literal describes a <code>BMap.Icon</code> instance.
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
        <td>anchor</td>
        <td><span class="label">Object</span></td>
        <td>See: <a href="#/apidoc/size">Size</a></td>
      </tr>
      <tr>
        <td>size</td>
        <td><span class="label">Object</span></td>
        <td>See: <a href="#/apidoc/size">Size</a></td>
      </tr>
      <tr>
        <td>imageOffset</td>
        <td><span class="label">Object</span></td>
        <td>See: <a href="#/apidoc/size">Size</a></td>
      </tr>
      <tr>
        <td>imageSize</td>
        <td><span class="label">Object</span></td>
        <td>See: <a href="#/apidoc/size">Size</a></td>
      </tr>
      <tr>
        <td>imageUrl</td>
        <td><span class="label">String</span></td>
        <td>URL of the customized icon</td>
      </tr>
      <tr>
        <td>infoWindowAnchor</td>
        <td><span class="label">Object</span></td>
        <td>See: <a href="#/apidoc/size">Size</a></td>
      </tr>
      <tr>
        <td>printImageUrl</td>
        <td><span class="label">String</span></td>
        <td>Only for IE6. You won't use it in most cases</td>
      </tr>
    </tbody>
  </table>
  <blockquote>Required properties are in red</blockquote>
    `
})
export class DocIconComponent {
  constructor() {}
}
