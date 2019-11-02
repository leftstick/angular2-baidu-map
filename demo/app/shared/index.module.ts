import { NgModule } from '@angular/core'

import { HighlightDirective } from '@/app/shared/highlight'

@NgModule({
  declarations: [HighlightDirective],
  exports: [HighlightDirective]
})
export class SharedModule {}
