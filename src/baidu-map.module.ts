import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BaiduMapComponent } from "./baidu-map.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BaiduMapComponent
  ],
  exports: [
    BaiduMapComponent
  ]
})
export class BaiduMapModule { }