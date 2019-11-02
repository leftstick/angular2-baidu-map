import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { SharedModule } from '@/app/shared/index.module'

import { QuickstartRouteModule } from '@/app/components/quickstart/route.module'

import { ImportComponent } from '@/app/components/quickstart/import.component'
import { QuickstartComponent } from '@/app/components/quickstart/index.component'
import { InstallComponent } from '@/app/components/quickstart/install.component'
import { UsageComponent } from '@/app/components/quickstart/usage.component'

@NgModule({
  declarations: [
    QuickstartComponent,
    InstallComponent,
    ImportComponent,
    UsageComponent
  ],
  exports: [RouterModule],
  imports: [CommonModule, SharedModule, QuickstartRouteModule]
})
export class QuickstartModule {}
