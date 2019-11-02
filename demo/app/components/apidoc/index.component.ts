import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'

import { Subscription, Observable } from 'rxjs'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'apidoc',
  styles: [
    `
      :host {
        width: 100%;
        display: flex;
        justify-content: center;
      }

      :host .container {
        width: 1200px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      :host .container .doc {
        display: flex;
        width: 100%;
        flex-grow: 2;
      }

      :host .container .doc api-sidebar {
        flex-shrink: 0;
      }

      .api-content {
        width: 989px;
        display: flex;
        flex-direction: column;
        border: 1px solid #cccccc;
        border-left: none;
        border-radius: 0 4px 4px 0;
      }

      .api-content .api-name {
        width: 100%;
        padding: 15px;
        border-bottom: 1px solid #cccccc;
        flex-shrink: 0;
      }

      .api-content .api-introduction {
        width: 100%;
        padding: 15px;
      }

      .api-content .api-introduction .title {
        margin: 5px 0 5px 0;
      }

      .api-content .api-introduction >>> baidu-map {
        width: 100%;
        height: 300px;
        display: block;
        margin: 10px 0 10px 0;
      }

      .api-content .api-introduction .line-text {
        word-break: break-word;
      }

      @media screen and (max-width: 1215px) {
        .api-content {
          width: 880px;
        }
      }

      @media screen and (max-width: 1115px) {
        .api-content {
          width: 800px;
        }
      }

      @media screen and (max-width: 1030px) {
        .api-content {
          width: 700px;
        }
      }

      @media screen and (max-width: 960px) {
        .api-content {
          border-left: 1px solid #cccccc;
          border-radius: 4px;
          width: 100%;
        }
      }

      @media screen and (max-width: 1200px) {
        :host .container {
          width: 100%;
        }
      }
    `
  ],
  template: `
    <div class="container">
      <h1 class="page-title">API Documentation</h1>
      <div class="doc">
        <api-sidebar [api]="api"></api-sidebar>

        <div class="api-content">
          <div class="api-name">
            <h3>{{ name }}</h3>
          </div>
          <div class="api-introduction">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ApidocComponent implements OnInit, OnDestroy {
  public api: string
  public name: string
  public routeChangeSub: Subscription
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.api = this.router.url.substr(this.router.url.lastIndexOf('/') + 1)

    this.name = this.activeRoute.firstChild.snapshot.data.name || this.api

    this.routeChangeSub = this.router.events
      .pipe(filter(evt => evt instanceof NavigationEnd))
      .subscribe((val: NavigationEnd) => {
        this.api = val.url.substr(val.url.lastIndexOf('/') + 1)
        this.name = this.activeRoute.firstChild.snapshot.data.name || this.api
      })
  }

  public ngOnDestroy(): void {
    this.routeChangeSub.unsubscribe()
  }
}
