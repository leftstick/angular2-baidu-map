import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from '@/app/components/home/index.component'

const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home'
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class HomeRouteModule {}
