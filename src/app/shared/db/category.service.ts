import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../news/shared/category';



@Injectable()
export class CategoryService {

  categoryCollection: AngularFirestoreCollection<Category>;
  categories: Observable<Category[]>;

  constructor(private afs: AngularFirestore) {
  }

  getCategories() {
    this.categoryCollection = this.afs.collection('categories');
    this.categories = this.categoryCollection.valueChanges();
  }





}
