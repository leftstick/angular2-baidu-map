import { MapOptions } from '../interfaces/Options';

// import {ControlAnchor} from '../enum/ControlAnchor';
// import {Size} from '../interfaces/Size';
// import {NavigationControlType} from '../enum/NavigationControlType';

export const setpolylineCtrl = function(map: any, opts: MapOptions) {
  var BMap: any = (<any>window)['BMap'];
  //enable NavigationControl
  var polylineOpts: any = {};

  if (typeof opts.polyCtrl !== 'boolean') {
    var ctrl = <PolylineControlOptions>opts.polyCtrl;
    // if (ctrl.setPath) {
    //     polylineOpts.setPath = ctrl.setPath;
    // }
    if (ctrl.setStrokeColor) {
      polylineOpts.setStrokeColor = ctrl.setStrokeColor;
    }
    if (typeof ctrl.setStrokeOpacity !== 'undefined') {
      polylineOpts.type = ctrl.setStrokeOpacity;
    }
    if (typeof ctrl.setStrokeWeight !== 'undefined') {
      polylineOpts.showZoomInfo = ctrl.setStrokeWeight;
    }
    if (typeof ctrl.setStrokeStyle !== 'undefined') {
      polylineOpts.enableGeolocation = ctrl.setStrokeStyle;
    }
    map.addOverlay(new BMap.Polyline([
      new BMap.Point(120.195677, 30.184529),//120.195677,30.184529,  120.193777, 30.184620,
      new BMap.Point(120.193777, 30.184620),
    ], ctrl));
    // console.log(ctrl)
  } else if (opts.polyCtrl) {
    map.addOverlay(new BMap.Polyline());
  }
};

export interface PolylineControlOptions {
  //setPath?: any[];        //设置折线的点数组
  setStrokeColor?: string;        //设置折线的颜色
  setStrokeOpacity?: number;      //设置透明度，取值范围0 - 1
  setStrokeWeight?: number;   //设置线的宽度，范围为大于等于1的整数
  setStrokeStyle?: string;    //设置是为实线或虚线，solid或dashed
}
