import { Injectable } from '@angular/core'
import { isString } from '../helpers/object'
import { ScriptType } from '../types/Script'

export enum LOADING_STATE {
  NON = 0,
  LOADED = 1,
  LOADING = 2
}

export class ScriptLoaderConfig {
  public ak = ''
}

@Injectable()
export class ScriptLoader {
  constructor() {
    window._scriptLoadState = {}
    window._loadingCallbacks = {}
  }

  public load(
    url: string | ScriptType,
    isMain: boolean = false,
    cb: () => void
  ): void {
    // tslint:disable: no-string-literal
    const scriptKey = isString(url) ? url : url['key']
    const scriptUrls = isString(url) ? [url] : url['scripts']
    // tslint:enable: no-string-literal

    if (window._scriptLoadState[scriptKey] === LOADING_STATE.LOADED) {
      if (isMain) {
        switchDisplay('baidu-map .baidu-map-instance', 'block')
        switchDisplay('baidu-map .baidu-map-offline', 'none')
      }
      return cb()
    }
    if (!window._loadingCallbacks[scriptKey]) {
      window._loadingCallbacks[scriptKey] = []
    }
    if (window._scriptLoadState[scriptKey] === LOADING_STATE.LOADING) {
      window._loadingCallbacks[scriptKey].push(cb)
      return
    }
    window._scriptLoadState[scriptKey] = LOADING_STATE.LOADING
    window._loadingCallbacks[scriptKey].push(cb)

    if (isMain) {
      window.baidumapinit = () => {
        window._scriptLoadState[scriptKey] = LOADING_STATE.LOADED
        switchDisplay('baidu-map .baidu-map-instance', 'block')
        switchDisplay('baidu-map .baidu-map-offline', 'none')
        window._loadingCallbacks[scriptKey].forEach((c: () => void) => {
          c()
        })
      }
    }
    appendScriptsTag(scriptKey, scriptUrls, isMain)
  }
}

function appendScriptsTag(
  scriptKey: string,
  urls: Array<string>,
  isMain: boolean
) {
  const leftObj = {
    count: urls.length
  }
  urls.forEach(url => {
    appendScriptTag(scriptKey, url, isMain, leftObj)
  })
}

function appendScriptTag(
  scriptKey: string,
  url: string,
  isMain: boolean,
  leftObj: { count: number }
) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  script.onerror = () => {
    if (isMain) {
      switchDisplay('baidu-map .baidu-map-offline', 'block')
      switchDisplay('baidu-map .baidu-map-instance', 'none')
    }
    document.body.removeChild(script)

    setTimeout(() => {
      appendScriptTag(scriptKey, url, isMain, leftObj)
    }, 30000)
  }

  if (!isMain) {
    script.onload = () => {
      leftObj.count--
      if (leftObj.count) {
        return
      }
      window._scriptLoadState[scriptKey] = LOADING_STATE.LOADED
      window._loadingCallbacks[scriptKey].forEach((c: () => void) => {
        c()
      })
    }
  }
  document.body.appendChild(script)
}

function switchDisplay(selector: string, state: string) {
  Array.prototype.slice
    .call(document.querySelectorAll(selector))
    .forEach((node: HTMLElement) => {
      node.style.display = state
    })
}
