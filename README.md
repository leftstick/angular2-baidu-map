# angular2-baidu-map

[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

Baidu-Map module for Angular8

Read full documentation here: [documentation](https://leftstick.github.io/angular2-baidu-map/)

Read code example here: [example](https://github.com/leftstick/angular8-baidu-map-example)

> Be aware that it is a totally rewrite version, therefore, backward compatibility is not considered

* If you are using the previous version `3.x`, [read it here](https://github.com/leftstick/angular2-baidu-map/tree/3.x)
* If you are using the previous version `4.x`, [read it here](https://github.com/leftstick/angular2-baidu-map/tree/4.x)

## Getting started

```bash
npm install angular2-baidu-map
```

## Usage

**app.module.ts**

```typescript
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

import { BaiduMapModule } from 'angular2-baidu-map'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BaiduMapModule.forRoot({ ak: 'your ak' })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

**app.component.ts**

```typescript
import { Component } from '@angular/core'

import { MapOptions } from 'angular2-baidu-map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  options: MapOptions

  constructor() {
    this.options = {
      centerAndZoom: {
        lat: 39.920116,
        lng: 116.403703,
        zoom: 16
      },
      enableKeyboard: true
    }
  }
}
```

**app.component.html**

```html
<baidu-map [options]="options" style="display: block; width: 550px; height: 350px;"></baidu-map>
```

For more information, see [documentation](http://leftstick.github.io/angular2-baidu-map/)

## LICENSE

[GPL License](https://raw.githubusercontent.com/leftstick/angular2-baidu-map/master/LICENSE)

[npm-url]: https://npmjs.org/package/angular2-baidu-map
[npm-image]: https://img.shields.io/npm/v/angular2-baidu-map.svg
[david-url]: https://david-dm.org/leftstick/angular2-baidu-map.png
[dt-url]: https://img.shields.io/npm/dt/angular2-baidu-map.svg
[license-url]: https://img.shields.io/npm/l/angular2-baidu-map.svg
