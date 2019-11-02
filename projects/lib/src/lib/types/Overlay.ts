export interface OverlayConstructor {
  new (opts: OverlayOptions): any
}

export interface Overlay {}

export interface NavigationControl extends Overlay {}

export interface OverlayOptions {}
