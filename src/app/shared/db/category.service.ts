import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../news/shared/category';


@Injectable()
export class CategoryService {


  constructor(private afs: AngularFirestore) {
  }

  getCategories(): Observable<Category[]> {
    const categoryRef = this.afs.collection<Category>('categories', ref =>
      ref.orderBy('name'));
    return categoryRef
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const category = a.payload.doc.data() as Category;
          category.uid = a.payload.doc.id;
          return category;
      });
    });
  }

  getCategory(categoryId: string): Observable<Category> {
    return this.afs.doc<Category>('categories/' + categoryId).valueChanges();
  }








}
