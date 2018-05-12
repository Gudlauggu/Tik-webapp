import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../shared/category';
import { News } from '../shared/news';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tik-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  @Input()
  categories: Category[];
  @Output()
  clickedCategory = new EventEmitter<Category>();
  @Input()
  url: string;

  categoryRef: AngularFirestoreDocument<any>;
  category$: Observable<any>;
  newsRef: AngularFirestoreCollection<any>;
  news$: Observable<any>;

  formValue: string;

  constructor(private afs: AngularFirestore) {
    this.url = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  }

  news = [
    {
      uid: '123',
      displayName: 'Hard coded Test News Title',
      created: '05/05/2018',
      owner: 'Jón Jónsson',
      image: false,
      text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n' +
      '      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n' +
      '      bred for hunting.'
    },
    {
      uid: '123',
      displayName: 'Hard coded Test News Title 2',
      created: '09/05/2018',
      owner: 'Björn Jónsson',
      image: false,
      text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n' +
      '      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n' +
      '      bred for hunting.'
    },
    {
      uid: '123',
      displayName: 'DOES IT WORK?',
      created: '09/05/2018',
      owner: 'BOB BOBBERS',
      image: false,
      text: 'No text yet'
    },
  ];

  ngOnInit() {


  }

  newsClicked(news) {
    console.log('News clicked: ' + news.displayName);
  }
}
