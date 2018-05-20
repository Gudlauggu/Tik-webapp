import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { News } from '../shared/news';
import { Router } from '@angular/router';
import { NewsService } from '../../shared/db/news.service';

@Component({
  selector: 'tik-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  url: string;

  news: News;
  newsId: string;

  constructor(private router: Router,
              private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe(news => {
        this.news = news;
      });

  }

  thisNewsClicked() {
    console.log(this.newsId);
    // this.router.navigateByUrl('/news/' + this.news.uid);
  }
}
