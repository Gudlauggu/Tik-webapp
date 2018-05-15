import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { SharedModule } from '../shared/shared.module';
import { CommentsComponent } from './comments/comments.component';
import { WriteComponent } from './write/write.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  declarations: [NewsListComponent, NewsDetailsComponent, CategoryListComponent,
    CategoryDetailsComponent, CommentsComponent, WriteComponent],
  exports: [NewsListComponent]
})
export class NewsModule { }
