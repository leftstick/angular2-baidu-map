import { Component } from '@angular/core'

@Component({
  selector: 'doc-navigation-control-type',
  styles: [],
  template: `
  <p>
    The enum to describe what kind of navigation it is.
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
            <td>BMAP_NAVIGATION_CONTROL_LARGE</td>
            <td><span class="label">Number</span></td>
            <td>0</td>
        </tr>
        <tr>
            <td>BMAP_NAVIGATION_CONTROL_SMALL</td>
            <td><span class="label">Number</span></td>
            <td>1</td>
        </tr>
        <tr>
            <td>BMAP_NAVIGATION_CONTROL_PAN</td>
            <td><span class="label">Number</span></td>
            <td>2</td>
        </tr>
        <tr>
            <td>BMAP_NAVIGATION_CONTROL_ZOOM</td>
            <td><span class="label">Number</span></td>
            <td>3</td>
        </tr>
    </tbody>
  </table>
    `
})
export class DocNavigationControlTypeComponent {
  constructor() {}
}
