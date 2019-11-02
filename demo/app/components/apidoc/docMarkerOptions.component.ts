import { Component } from '@angular/core'

@Component({
  selector: 'doc-marker-options',
  styles: [],
  template: `
  <p>
    The literal describes options used by <code>BMap.Marker</code> instance.
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
            <td>offset</td>
            <td><span class="label">Object</span></td>
            <td>See: <a href="#/apidoc/size">Size</a></td>
        </tr>
        <tr>
            <td>icon</td>
            <td><span class="label">Object</span></td>
            <td>See: <a href="#/apidoc/icon">Icon</a></td>
        </tr>
        <tr>
            <td>enableMassClear</td>
            <td><span class="label">Boolean</span></td>
            <td>Whether to allow overlay to be clear while calling <code>map.clearOverlays</code></td>
        </tr>
        <tr>
            <td>enableDragging</td>
            <td><span class="label">Boolean</span></td>
            <td>Whether to enable dragging of the map</td>
        </tr>
        <tr>
            <td>enableClicking</td>
            <td><span class="label">Boolean</span></td>
            <td>Whether to enable clicking of the map</td>
        </tr>
        <tr>
            <td>raiseOnDrag</td>
            <td><span class="label">Boolean</span></td>
            <td>Whether to enable leave-animation on markers while dragging</td>
        </tr>
        <tr>
            <td>draggingCursor</td>
            <td><span class="label">String</span></td>
            <td>Cursor style while dragging</td>
        </tr>
        <tr>
            <td>rotation</td>
            <td><span class="label">Number</span></td>
            <td>Rotation angle</td>
        </tr>
        <tr>
            <td>shadow</td>
            <td><span class="label">Object</span></td>
            <td>See: <a href="#/apidoc/icon">Icon</a></td>
        </tr>
        <tr>
            <td>title</td>
            <td><span class="label">String</span></td>
            <td>Title to be displayed while mouse over on the marker</td>
        </tr>
    </tbody>
  </table>

  <blockquote>Required properties are in red</blockquote>
    `
})
export class DocMarkerOptionsComponent {
  constructor() {}
}
