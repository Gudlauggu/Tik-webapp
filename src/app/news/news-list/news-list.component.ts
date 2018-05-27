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


  news: News[];

  constructor(private router: Router,
              private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe(news => {
        this.news = news;
        // console.log(this.news);
      });
  }

  thisNewsClicked(newsId) {
    // console.log(newsId);
    this.router.navigateByUrl('/news/' + newsId);
  }
}
