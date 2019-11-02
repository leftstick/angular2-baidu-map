import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { DRouteModule } from '@/app/d.routing.module'

import { MenuComponent } from '@/app/components/menu'
import { DComponent } from '@/app/d.component'

import { ApidocModule } from '@/app/components/apidoc/index.module'
import { HomeModule } from '@/app/components/home/index.module'
import { QuickstartModule } from '@/app/components/quickstart/index.module'

@NgModule({
  bootstrap: [DComponent],
  declarations: [DComponent, MenuComponent],
  imports: [
    BrowserModule,
    DRouteModule,
    HomeModule,
    QuickstartModule,
    ApidocModule
  ]
})
export class DModule {}
