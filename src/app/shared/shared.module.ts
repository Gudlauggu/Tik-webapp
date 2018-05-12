import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MarginIconComponent } from './margin-icon/margin-icon.component';
import { UploadDirective } from './directives/upload.directive';
import { StorageService } from './storage/storage.service';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { NewsService } from './db/news.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CategoryService } from './db/category.service';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  declarations: [ToolbarComponent, MarginIconComponent, UploadDirective],
  exports: [ToolbarComponent, MarginIconComponent, UploadDirective],
  providers: [StorageService, NewsService, CategoryService]
})
export class SharedModule { }
