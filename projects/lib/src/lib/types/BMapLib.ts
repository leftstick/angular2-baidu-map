import { BHeatmapConstructor } from './Heatmap'
import { BMarkerClustererConstructor } from './MarkerClusterer'

export interface BMapLib {
  HeatmapOverlay: BHeatmapConstructor
  MarkerClusterer: BMarkerClustererConstructor
}
