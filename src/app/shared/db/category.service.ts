import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../news/shared/category';
import { User } from '../../user/shared/user';



@Injectable()
export class CategoryService {

  constructor(private afs: AngularFirestore) {
    /*const categoryCollection: AngularFirestoreCollection<Category> = this.afs.collection('categories');*/
  }

  /*getCategories(): Observable<Category> {
    return this.afs.doc<Category>('categories').valueChanges();
  }*/





}
