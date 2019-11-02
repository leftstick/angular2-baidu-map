import { Directive, ElementRef, AfterViewInit } from '@angular/core'
import hljs from 'highlight.js'

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  public ngAfterViewInit() {
    const snippets = this.el.nativeElement
      .querySelectorAll('.snippet pre code')
      .forEach((s: any) => {
        hljs.highlightBlock(s)
      })
  }
}
