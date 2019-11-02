import { Component } from '@angular/core'

@Component({
  selector: 'doc-control-anchor',
  styles: [],
  template: `
  <p>
    The enum to describe where the control to be displayed.
  </p>
  <table class="matrix">
    <thead>
        <tr>
            <th style="width: 80px;">Property</th>
            <th>Type</th>
            <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>BMAP_ANCHOR_TOP_LEFT</td>
            <td><span class="label">Number</span></td>
            <td>0</td>
        </tr>
        <tr>
            <td>BMAP_ANCHOR_TOP_RIGHT</td>
            <td><span class="label">Number</span></td>
            <td>1</td>
        </tr>
        <tr>
            <td>BMAP_ANCHOR_BOTTOM_LEFT</td>
            <td><span class="label">Number</span></td>
            <td>2</td>
        </tr>
        <tr>
            <td>BMAP_ANCHOR_BOTTOM_RIGHT</td>
            <td><span class="label">Number</span></td>
            <td>3</td>
        </tr>
    </tbody>
  </table>
    `
})
export class DocControlAnchorComponent {
  constructor() {}
}
