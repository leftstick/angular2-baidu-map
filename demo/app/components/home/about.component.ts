import { Component } from '@angular/core'

@Component({
  selector: 'about',
  template: `
    <h1>About</h1>
    <p>
      <code>angular2-baidu-map</code>
      is a set of components written in <code>TypeScript</code> which integrate
      <a href="http://lbsyun.baidu.com/" target="_blank">百度地图</a> in an
      Angular applications.
    </p>
    <p>
      It is based on the
      <a href="http://lbsyun.baidu.com/" target="_blank">百度地图</a> Javascript
      API version 3.0, and
      <a href="https://angular.io" target="_blank">Angular</a> >=version 4.4.1
    </p>
  `
})
export class AboutComponent {}
