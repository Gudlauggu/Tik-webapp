import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../shared/category';
import { News } from '../shared/news';

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
  @Input()
  news: News;

  constructor() {
    this.url = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

    this.news = {
      displayName: 'Hard coded Test News Title',
      created: '05/05/2018',
      owner: 'Jón Jónsson',
      image: false,
      text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n' +
      '      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n' +
      '      bred for hunting.'};
    this.url = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  }

  ngOnInit() {
  }

}
