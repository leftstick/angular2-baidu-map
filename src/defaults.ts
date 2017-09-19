import { MapDefaultOptions, OfflineOptions } from './interfaces/Options';

export const defaultOpts: MapDefaultOptions = {
  navCtrl: true,
  scaleCtrl: true,
  overviewCtrl: true,
  enableScrollWheelZoom: true,
  geolocationCtrl: false,
  zoom: 10,
  polyCtrl: true,

}

export const defaultOfflineOpts: OfflineOptions = {
  retryInterval: 30000,
  txt: 'OFFLINE'
}
