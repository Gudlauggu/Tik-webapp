import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { News } from '../shared/news';

@Component({
  selector: 'tik-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  @Input()
  url: string;
  @Input()
  news: News;
  @Output()
  newsClicked = new EventEmitter<News>();

  constructor() { }

  ngOnInit() {
  }

}
