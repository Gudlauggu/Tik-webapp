import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { News } from '../../news/shared/news';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

@Injectable()
export class NewsService {
  latest: DocumentSnapshot;
  constructor(private afs: AngularFirestore) { }


  getNews(): Observable<News[]> {
    let newsRef;
    if (this.latest) {
       newsRef = this.afs.collection<News>('news', ref =>
        ref.orderBy('created', 'desc').limit(3).startAfter(this.latest));
    } else {
       newsRef = this.afs.collection<News>('news', ref =>
        ref.orderBy('created', 'desc').limit(3));
    }
    return newsRef
      .snapshotChanges()
      .map(actions => {

        return actions.map(a => {
          this.latest = a.payload.doc;
          const news = a.payload.doc.data() as News;
          news.uid = a.payload.doc.id;
          return news;
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
