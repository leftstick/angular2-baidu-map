import { Component } from '@angular/core'

@Component({
  selector: 'quickstart',
  styles: [
    `
      :host {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      baidu-map {
        width: 800px;
        height: 290px;
      }
      .home-desc {
        width: 800px;
      }
      @media screen and (max-width: 800px) {
        baidu-map,
        .home-desc {
          width: 100%;
        }
      }
    `
  ],
  template: `
    <div class="container">
      <h1 class="page-title">Quickstart</h1>
      <p style="margin-bottom: 15px;">
        To start using <code>angular2-baidu-map</code>, follow these simple
        steps for module setup. Afterwards, read
        <a href="#!/apidoc">API documentation</a> to learn about advanced usage.
      </p>
      <install class="section"></install>
      <import class="section"></import>
      <usage class="section"></usage>
    </div>
  `
})
export class QuickstartComponent {
  constructor() {}
}
