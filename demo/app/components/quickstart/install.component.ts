import { Component } from '@angular/core'

@Component({
  selector: 'install',
  template: `
    <h1>Install</h1>
    <ul class="menu" highlight>
      <li>
        <div>
          <div class="type-name">Npm:</div>
          <div class="snippet">
            <pre><code class="bash">npm install angular2-baidu-map --save</code></pre>
          </div>
        </div>
      </li>
    </ul>
  `
})
export class InstallComponent {}
