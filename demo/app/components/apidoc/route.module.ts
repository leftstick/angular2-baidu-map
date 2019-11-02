import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DocBaidumapComponent } from '@/app/components/apidoc/docBaidumap.component'
import { DocCenterAndZoomComponent } from '@/app/components/apidoc/docCenterAndZoom.component'
import { DocControlComponent } from '@/app/components/apidoc/docControl.component'
import { DocControlAnchorComponent } from '@/app/components/apidoc/docControlAnchor.component'
import { DocIconComponent } from '@/app/components/apidoc/docIcon.component'
import { DocMapOptionsComponent } from '@/app/components/apidoc/docMapOptions.component'
import { DocMarkerComponent } from '@/app/components/apidoc/docMarker.component'
import { DocPolylineComponent } from '@/app/components/apidoc/docPolyline.component'
import { DocCircleComponent } from '@/app/components/apidoc/docCircle.component'
import { DocPolygonComponent } from '@/app/components/apidoc/docPolygon.component'
import { DocHeatmapComponent } from '@/app/components/apidoc/docHeatmap.component'
import { DocMarkerOptionsComponent } from '@/app/components/apidoc/docMarkerOptions.component'
import { DocHeatmapOptionsComponent } from '@/app/components/apidoc/docHeatmapOptions.component'
import { DocHeatmapDataComponent } from '@/app/components/apidoc/docHeatmapData.component'
import { DocHeatmapPointComponent } from '@/app/components/apidoc/docHeatmapPoint.component'
import { DocTileLayerComponent } from '@/app/components/apidoc/docTileLayer.component'
import { DocTrafficLayerComponent } from '@/app/components/apidoc/docTrafficLayer.component'
import { DocCanvasLayerComponent } from '@/app/components/apidoc/docCanvasLayer.component'
import { DocMarkerClustererComponent } from '@/app/components/apidoc/docMarkerClusterer.component'
import { DocTileLayerOptionsComponent } from '@/app/components/apidoc/docTileLayerOptions.component'
import { DocTrafficLayerOptionsComponent } from '@/app/components/apidoc/docTrafficLayerOptions.component'
import { DocCanvasLayerOptionsComponent } from '@/app/components/apidoc/docCanvasLayerOptions.component'
import { DocNavigationControlOptionsComponent } from '@/app/components/apidoc/docNavigationControlOptions.component'
import { DocNavigationControlTypeComponent } from '@/app/components/apidoc/docNavigationControlType.component'
import { DocMapTypeEnumComponent } from '@/app/components/apidoc/docMapTypeEnum.component'
import { DocPointComponent } from '@/app/components/apidoc/docPoint.component'
import { DocSizeComponent } from '@/app/components/apidoc/docSize.component'
import { DocPredictDateComponent } from '@/app/components/apidoc/docPredictDate.component'
import { ApidocComponent } from '@/app/components/apidoc/index.component'
import { DocMarkerLiteralComponent } from '@/app/components/apidoc/docMarkerLiteral.component'
import { DocMarkerClustererOptionsComponent } from '@/app/components/apidoc/docMarkerClustererOptions.component'
import { DocTextIconStyleComponent } from '@/app/components/apidoc/docTextIconStyle.component'

const routes: Routes = [
  {
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'baidu-map'
      },
      {
        component: DocBaidumapComponent,
        path: 'baidu-map'
      },
      {
        component: DocMarkerComponent,
        path: 'marker'
      },
      {
        component: DocPolylineComponent,
        path: 'polyline'
      },
      {
        component: DocCircleComponent,
        path: 'circle'
      },
      {
        component: DocPolygonComponent,
        path: 'polygon'
      },
      {
        component: DocHeatmapComponent,
        path: 'heatmap'
      },
      {
        component: DocTileLayerComponent,
        path: 'tilelayer'
      },
      {
        component: DocTrafficLayerComponent,
        path: 'trafficlayer'
      },
      {
        component: DocCanvasLayerComponent,
        path: 'canvaslayer'
      },
      {
        component: DocMarkerClustererComponent,
        path: 'marker-clusterer'
      },
      {
        component: DocControlComponent,
        path: 'control'
      },
      {
        component: DocMapOptionsComponent,
        data: {
          name: 'MapOptions'
        },
        path: 'map-options'
      },
      {
        component: DocMarkerLiteralComponent,
        data: {
          name: 'Marker'
        },
        path: 'marker-literal'
      },
      {
        component: DocMarkerOptionsComponent,
        data: {
          name: 'MarkerOptions'
        },
        path: 'marker-options'
      },
      {
        component: DocMarkerClustererOptionsComponent,
        data: {
          name: 'MarkerClustererOptions'
        },
        path: 'marker-clusterer-options'
      },
      {
        component: DocHeatmapOptionsComponent,
        data: {
          name: 'HeatmapOptions'
        },
        path: 'heatmap-options'
      },
      {
        component: DocTextIconStyleComponent,
        data: {
          name: 'TextIconStyle'
        },
        path: 'text-icon-style'
      },
      {
        component: DocTileLayerOptionsComponent,
        data: {
          name: 'TileLayerOptions'
        },
        path: 'tilelayer-options'
      },
      {
        component: DocTrafficLayerOptionsComponent,
        data: {
          name: 'TrafficLayerOptions'
        },
        path: 'trafficlayer-options'
      },
      {
        component: DocCanvasLayerOptionsComponent,
        data: {
          name: 'CanvasLayerOptions'
        },
        path: 'canvaslayer-options'
      },
      {
        component: DocHeatmapDataComponent,
        data: {
          name: 'HeatmapData'
        },
        path: 'heatmap-data'
      },
      {
        component: DocHeatmapPointComponent,
        data: {
          name: 'HeatmapPoint'
        },
        path: 'heatmap-point'
      },
      {
        component: DocNavigationControlOptionsComponent,
        data: {
          name: 'NavigationControlOptions'
        },
        path: 'navigation-control-options'
      },
      {
        component: DocCenterAndZoomComponent,
        data: {
          name: 'CenterAndZoom'
        },
        path: 'center-and-zoom'
      },
      {
        component: DocPredictDateComponent,
        data: {
          name: 'PredictDate'
        },
        path: 'predictdate'
      },
      {
        component: DocPointComponent,
        data: {
          name: 'Point'
        },
        path: 'point'
      },
      {
        component: DocSizeComponent,
        data: {
          name: 'Size'
        },
        path: 'size'
      },
      {
        component: DocIconComponent,
        data: {
          name: 'Icon'
        },
        path: 'icon'
      },
      {
        component: DocControlAnchorComponent,
        data: {
          name: 'ControlAnchor'
        },
        path: 'control-anchor'
      },
      {
        component: DocNavigationControlTypeComponent,
        data: {
          name: 'NavigationControlType'
        },
        path: 'navigation-control-type'
      },
      {
        component: DocMapTypeEnumComponent,
        data: {
          name: 'MapTypeEnum'
        },
        path: 'maptypeenum'
      },
      {
        path: '**',
        redirectTo: 'baidu-map'
      }
    ],
    component: ApidocComponent,
    path: 'apidoc'
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ApidocRouteModule {}
