import { BTileLayer } from './TileLayer'

export interface BTrafficLayerConstructor {
  new (options?: TrafficLayerOptions): BTrafficLayer
}

export interface BTrafficLayer extends BTileLayer {}

export interface TrafficLayerOptions {
  predictDate?: PredictDate
}

export interface PredictDate {
  weekday?: number
  hour?: number
}
