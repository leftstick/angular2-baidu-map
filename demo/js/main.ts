import 'core-js/es6';
import 'core-js/es7/reflect';
import 'rxjs';
import 'zone.js/dist/zone';
import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainApp } from './demo.app';
import { Splash } from 'splash-screen';

import { BaiduMapComponent } from '../../';
@NgModule({
    imports: [BrowserModule],
    declarations: [MainApp, BaiduMapComponent],
    bootstrap: [MainApp]
})
class AppModule { }

class App {

    constructor() {
        enableProdMode();
    }

    destroySplash(): void {
        var _this = this;
        Splash.destroy();
        (<any>require('splash-screen/dist/splash.min.css')).unuse();
        setTimeout(function () {
            if (Splash.isRunning()) {
                _this.destroySplash();
            }
        }, 100);
    }

    launch() {
        platformBrowserDynamic().bootstrapModule(AppModule);
    }

    run(): void {
        this.destroySplash();
        this.launch();
    }
}

export default App;
