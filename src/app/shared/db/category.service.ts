import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../news/shared/category';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class CategoryService {

  private categoryUid = new BehaviorSubject<string>('');
  currentCategoryUid = this.categoryUid.asObservable();
  // categoryUid: string;

  constructor(private afs: AngularFirestore) {
  }

  getCategories(): Observable<any> {
    return this.afs.collection<Category>('categories').snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, data};
      });
    });
  }

  getCategory(categoryId): Observable<Category> {
    return this.afs.doc<Category>('categories/' + categoryId ).valueChanges();
  }

  changeCategory(category) {
    this.categoryUid.next(category);
  }






}
