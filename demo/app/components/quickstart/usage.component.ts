import { Component } from '@angular/core'

@Component({
  selector: 'usage',
  template: `
    <h1>Usage</h1>
    <ul class="menu" highlight>
      <li>
        <div>
          <div class="type-name">
            Use <code>angular2-baidu-map</code> module:
          </div>
          <div class="snippet">
            <pre><code class="typescript">import &#123; BaiduMapModule &#125; from 'angular2-baidu-map';
import &#123; DemoComponent &#125; from './demo.component';

@NgModule(&#123;
    imports: [
        BrowserModule,
        BaiduMapModule.forRoot(&#123; ak: 'your ak' &#125;)
    ],
    declarations: [
        DemoComponent
    ],
    bootstrap: [DemoComponent]
&#125;)
export class DemoModule &#123; &#125;</code></pre>
          </div>
        </div>
      </li>
      <li>
        <div>
          <div class="type-name">
            Use <code>&lt;baidu-map&gt;</code> element:
          </div>
          <div class="snippet">
            <pre><code class="typescript">import &#123; Component &#125; from '@angular/core';
import &#123; MapOptions &#125; from 'angular2-baidu-map';

@Component(&#123;
    selector: 'demo',
    template: '&lt;baidu-map [options]="opts"&gt;&lt;/baidu-map&gt;',
    styles: [&#96;
        baidu-map &#123;
            width: 800px;
            height: 290px;
        &#125;
    &#96;
    ]
&#125;)
export class DemoComponent &#123;
    public opts: MapOptions;

    constructor() &#123;
        this.opts = &#123;
            centerAndZoom: &#123;
                lng: 121.506191,
                lat: 31.245554,
                zoom: 15
            &#125;
        &#125;;
    &#125;
&#125;
</code></pre>
          </div>
          <blockquote>Map won't be visible if no size specified</blockquote>
        </div>
      </li>
    </ul>
  `
})
export class UsageComponent {}
