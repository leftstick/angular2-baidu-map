import { MapOptions } from '../interfaces/Options';

export const setpolylineCtrl = function(map: any, opts: MapOptions) {
  var BMap: any = (<any>window)['BMap'];
  var polylineOpts: any = {};
  if (typeof opts.polyCtrl !== 'boolean') {
    var ctrl = <PolylineControlOptions>opts.polyCtrl;

    if (ctrl.setStrokeColor) {
      polylineOpts.strokeColor = ctrl.setStrokeColor;
    }
    if (typeof ctrl.setStrokeOpacity !== 'undefined') {
      polylineOpts.strokeOpacity = ctrl.setStrokeOpacity;
    }
    if (typeof ctrl.setStrokeWeight !== 'undefined') {
      polylineOpts.strokeWeight = ctrl.setStrokeWeight;
    }

    let tmp = []

    if (ctrl.setPath) {
      for (let i = 0; i < ctrl.setPath.length; i++) {
        tmp.push(new BMap.Point(ctrl.setPath[i][0], ctrl.setPath[i][1]))
      }
    }

    if (tmp.length > 0) {
      map.addOverlay(new BMap.Polyline(tmp, polylineOpts));
    }
  } else if (opts.polyCtrl) {
    map.addOverlay(new BMap.Polyline());
  }
};

export interface PolylineControlOptions {
  setPath?: any[];        //设置折线的点数组
  setStrokeColor?: string;        //设置折线的颜色
  setStrokeOpacity?: number;      //设置透明度，取值范围0 - 1
  setStrokeWeight?: number;   //设置线的宽度，范围为大于等于1的整数
  setStrokeStyle?: string;    //设置是为实线或虚线，solid或dashed
}
