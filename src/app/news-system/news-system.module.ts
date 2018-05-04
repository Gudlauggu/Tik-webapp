import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsSystemContainerComponent } from './news-system-container/news-system-container.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ NewsDetailsComponent, NewsSystemContainerComponent],
  providers: [],
  exports: [NewsSystemContainerComponent]
})
export class NewsSystemModule { }
