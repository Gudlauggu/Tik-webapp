import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { News } from '../../news/shared/news';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CategoryService } from './category.service';
import { StorageService } from '../storage/storage.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class NewsService {

  constructor(private afs: AngularFirestore) { }


  getNews(): Observable<any> {
    const newsRef = this.afs.collection<News>('news', ref =>
      ref.orderBy('created', 'desc'));
    return newsRef
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data};
        });
      });
  }

  getNewsByCategory(categoryId: string): Observable<any> {
    return this.afs.collection<News>('news', ref => ref.orderBy('created', 'desc')
          .where('categoryUid', '==', categoryId))
      .valueChanges();
  }

  getOneNews(newsId: string): Observable<News> {
    return this.afs.doc<News>('news/' + newsId).valueChanges();
  }

  saveNews(news: News): Promise<any> {
     return this.afs.collection('news').add(news);
  }

}
