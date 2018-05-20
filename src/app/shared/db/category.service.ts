import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../news/shared/category';


@Injectable()
export class CategoryService {


  constructor(private afs: AngularFirestore) {
  }

  getCategories(): Observable<any> {
    return this.afs.collection<Category>('categories')
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data};
      });
    });
  }

  getCategory(categoryId: string): Observable<Category> {
    return this.afs.doc<Category>('categories/' + categoryId).valueChanges();
  }








}
