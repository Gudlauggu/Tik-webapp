import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { News } from '../../news/shared/news';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsService {

  constructor(private afs: AngularFirestore) { }

  getNews(): Observable<News> {
    return this.afs.doc<News>('news/').valueChanges()
      .map(news => {
        return news;
      });
  }
}
