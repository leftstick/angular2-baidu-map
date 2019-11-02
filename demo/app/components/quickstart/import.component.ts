import { Component } from '@angular/core'

@Component({
  selector: 'import',
  template: `
    <h1>Import</h1>
    <ul class="menu" highlight>
      <li>
        <div>
          <div class="type-name">Typescript:</div>
          <div class="snippet">
            <pre><code class="typescript">import &#123; BaiduMapModule &#125; from 'angular2-baidu-map';</code></pre>
          </div>
        </div>
      </li>
    </ul>
  `
})
export class ImportComponent {}
