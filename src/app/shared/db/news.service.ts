import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { News } from '../../news/shared/news';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CategoryService } from './category.service';

@Injectable()
export class NewsService {

  constructor(private afs: AngularFirestore) { }

  getNews(): Observable<News> {
    return this.afs.doc<News>('news').valueChanges()
      .map(news => {
        return news;
      });
  }

  getOneNews(newsId: string): Observable<News> {
    return this.afs.doc<News>('news/' + newsId).valueChanges();
  }


}
