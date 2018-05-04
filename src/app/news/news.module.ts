import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsSystemModule } from '../news-system/news-system.module';

@NgModule({
  imports: [
    CommonModule,
    NewsSystemModule
  ],
  declarations: [NewsListComponent]
})
export class NewsModule { }
