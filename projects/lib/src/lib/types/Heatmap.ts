import { Overlay } from './Overlay'
import { Point } from './Point'

export interface BHeatmapConstructor {
  new (options?: HeatmapOptions): BHeatmap
}

export interface BHeatmap extends Overlay {
  setDataSet(data: HeatmapData): void
  setOptions(options: HeatmapOptions): void
}

export interface HeatmapOptions {
  radius?: number
  visible?: boolean
  gradient?: any
  opacity?: number
}

export interface HeatmapPoint extends Point {
  count: number
}

export interface HeatmapData {
  data: Array<HeatmapPoint>
  max: number
}
