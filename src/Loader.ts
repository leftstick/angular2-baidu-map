import {MapObjct} from './interfaces/MapObjct';
import {MapStatus} from './enum/MapStatus';
import {OfflineOptions} from './interfaces/Options';

export const loader = function(ak: string, offlineOpts: OfflineOptions, callback: Function, protocol: string) {
    let realProtocol = protocol || location.protocol;
    let MAP_URL: string = `${realProtocol}//api.map.baidu.com/api?v=2.0&ak=${ak}&callback=baidumapinit&s=${realProtocol === 'https:' ? 1 : 0}`;
    let LUSHU_URL: string = `${realProtocol}//api.map.baidu.com/library/LuShu/1.2/src/LuShu_min.js`;
    let win: any = (<any>window);

    let baiduMap: MapObjct = win['baiduMap'];
    if (baiduMap && baiduMap.status === MapStatus.LOADING) {
        return baiduMap.callbacks.push(callback);
    }

    if (baiduMap && baiduMap.status === MapStatus.LOADED) {
        return callback();
    }

    win['baiduMap'] = { status: MapStatus.LOADING, callbacks: [] };
    win['baidumapinit'] = function() {
        win['baiduMap'].status = MapStatus.LOADED;
        callback();
        win['baiduMap'].callbacks.forEach((cb: Function) => cb());
        win['baiduMap'].callbacks = [];
        createLuShuTag();
    };

    let createTag = function() {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = MAP_URL;
        script.onerror = function() {
            Array.prototype
                .slice
                .call(document.querySelectorAll('baidu-map div'))
                .forEach(function(node: any) {
                    node.style.opacity = 1;
                });
            document.body.removeChild(script);
            setTimeout(createTag, offlineOpts.retryInterval);
        };
        document.body.appendChild(script);
    };

    var createLuShuTag = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = LUSHU_URL;
        script.onerror = function () {
            document.body.removeChild(script);
            setTimeout(createTag, offlineOpts.retryInterval);
        };
        document.body.appendChild(script);
    };

    createTag();
};
