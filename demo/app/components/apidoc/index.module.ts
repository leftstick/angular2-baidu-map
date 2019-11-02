import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { BaiduMapModule } from 'angular2-baidu-map'
import { SharedModule } from '@/app/shared/index.module'

import { ApidocRouteModule } from '@/app/components/apidoc/route.module'

import { DocBaidumapComponent } from '@/app/components/apidoc/docBaidumap.component'
import { DocCenterAndZoomComponent } from '@/app/components/apidoc/docCenterAndZoom.component'
import { DocControlComponent } from '@/app/components/apidoc/docControl.component'
import { DocControlAnchorComponent } from '@/app/components/apidoc/docControlAnchor.component'
import { DocIconComponent } from '@/app/components/apidoc/docIcon.component'
import { DocMapOptionsComponent } from '@/app/components/apidoc/docMapOptions.component'
import { DocMarkerComponent } from '@/app/components/apidoc/docMarker.component'
import { DocMarkerOptionsComponent } from '@/app/components/apidoc/docMarkerOptions.component'
import { DocHeatmapOptionsComponent } from '@/app/components/apidoc/docHeatmapOptions.component'
import { DocHeatmapDataComponent } from '@/app/components/apidoc/docHeatmapData.component'
import { DocHeatmapPointComponent } from '@/app/components/apidoc/docHeatmapPoint.component'
import { DocPolylineComponent } from '@/app/components/apidoc/docPolyline.component'
import { DocCircleComponent } from '@/app/components/apidoc/docCircle.component'
import { DocPolygonComponent } from '@/app/components/apidoc/docPolygon.component'
import { DocHeatmapComponent } from '@/app/components/apidoc/docHeatmap.component'
import { DocTileLayerComponent } from '@/app/components/apidoc/docTileLayer.component'
import { DocTrafficLayerComponent } from '@/app/components/apidoc/docTrafficLayer.component'
import { DocCanvasLayerComponent } from '@/app/components/apidoc/docCanvasLayer.component'
import { DocMarkerClustererComponent } from '@/app/components/apidoc/docMarkerClusterer.component'
import { DocTileLayerOptionsComponent } from '@/app/components/apidoc/docTileLayerOptions.component'
import { DocTrafficLayerOptionsComponent } from '@/app/components/apidoc/docTrafficLayerOptions.component'
import { DocCanvasLayerOptionsComponent } from '@/app/components/apidoc/docCanvasLayerOptions.component'
import { DocNavigationControlOptionsComponent } from '@/app/components/apidoc/docNavigationControlOptions.component'
import { DocNavigationControlTypeComponent } from '@/app/components/apidoc/docNavigationControlType.component'
import { DocPredictDateComponent } from '@/app/components/apidoc/docPredictDate.component'
import { DocPointComponent } from '@/app/components/apidoc/docPoint.component'
import { DocSizeComponent } from '@/app/components/apidoc/docSize.component'
import { DocMapTypeEnumComponent } from '@/app/components/apidoc/docMapTypeEnum.component'
import { ApidocComponent } from '@/app/components/apidoc/index.component'
import { SidebarComponent } from '@/app/components/apidoc/sidebar.component'
import { DocMarkerLiteralComponent } from '@/app/components/apidoc/docMarkerLiteral.component'
import { DocMarkerClustererOptionsComponent } from '@/app/components/apidoc/docMarkerClustererOptions.component'
import { DocTextIconStyleComponent } from '@/app/components/apidoc/docTextIconStyle.component'

@NgModule({
  declarations: [
    ApidocComponent,
    SidebarComponent,
    DocBaidumapComponent,
    DocCenterAndZoomComponent,
    DocControlAnchorComponent,
    DocIconComponent,
    DocPointComponent,
    DocMapOptionsComponent,
    DocMarkerOptionsComponent,
    DocHeatmapOptionsComponent,
    DocHeatmapDataComponent,
    DocHeatmapPointComponent,
    DocNavigationControlOptionsComponent,
    DocNavigationControlTypeComponent,
    DocSizeComponent,
    DocMarkerComponent,
    DocPolylineComponent,
    DocCircleComponent,
    DocPolygonComponent,
    DocHeatmapComponent,
    DocTileLayerComponent,
    DocTrafficLayerComponent,
    DocCanvasLayerComponent,
    DocTileLayerOptionsComponent,
    DocTrafficLayerOptionsComponent,
    DocCanvasLayerOptionsComponent,
    DocControlComponent,
    DocPredictDateComponent,
    DocMapTypeEnumComponent,
    DocMarkerClustererComponent,
    DocMarkerLiteralComponent,
    DocMarkerClustererOptionsComponent,
    DocTextIconStyleComponent
  ],
  exports: [RouterModule],
  imports: [
    CommonModule,
    SharedModule,
    BaiduMapModule.forRoot({ ak: 'gd0GyxGUxSCoAbmdyQBhyhrZ' }),
    ApidocRouteModule
  ]
})
export class ApidocModule {}
