import { Component, Input, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
  }

}
