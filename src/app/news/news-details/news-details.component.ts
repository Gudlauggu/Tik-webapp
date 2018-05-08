import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { News } from '../shared/news';

@Component({
  selector: 'tik-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  news: News;
  url: string;
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

  like() {
    console.log('Liked the files');
  }

}
