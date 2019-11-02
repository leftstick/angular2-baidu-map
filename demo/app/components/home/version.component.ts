import { Component } from '@angular/core'

@Component({
  selector: 'version',
  template: `
    <h1>Version</h1>
    <p>
      There are 3 major versions available, and each of them is not backwards
      compatible. Version of <code>angular2-baidu-map</code> is consistent with
      angular. Below are documentation references for previous versions:
    </p>
    <br />
    <ul>
      <li>
        <a
          href="https://github.com/leftstick/angular2-baidu-map/tree/3.x"
          target="_blank"
          >version 3.x</a
        >
      </li>
      <li>
        <a
          href="https://github.com/leftstick/angular2-baidu-map/tree/4.x"
          target="_blank"
          >version 4.x</a
        >
      </li>
      <li>
        current, 8.x
      </li>
    </ul>
  `
})
export class VersionComponent {}
