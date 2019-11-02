import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { QuickstartComponent } from '@/app/components/quickstart/index.component'

const routes: Routes = [
  {
    component: QuickstartComponent,
    path: 'quickstart'
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class QuickstartRouteModule {}
