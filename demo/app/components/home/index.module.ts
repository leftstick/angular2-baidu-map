import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { BaiduMapModule } from 'angular2-baidu-map'

import { HomeRouteModule } from '@/app/components/home/route.module'

import { AboutComponent } from '@/app/components/home/about.component'
import { ContributeComponent } from '@/app/components/home/contribute.component'
import { GithubComponent } from '@/app/components/home/github.component'
import { HomeComponent } from '@/app/components/home/index.component'
import { VersionComponent } from '@/app/components/home/version.component'

@NgModule({
  declarations: [
    HomeComponent,
    GithubComponent,
    VersionComponent,
    ContributeComponent,
    AboutComponent
  ],
  exports: [RouterModule],
  imports: [
    CommonModule,
    BaiduMapModule.forRoot({ ak: 'gd0GyxGUxSCoAbmdyQBhyhrZ' }),
    HomeRouteModule
  ]
})
export class HomeModule {}
