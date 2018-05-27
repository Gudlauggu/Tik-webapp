import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { News } from '../shared/news';
import { NewsService } from '../../shared/db/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tik-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  news: News;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const id = params.get('id');
        this.newsService.getOneNews(id)
          .subscribe(news => {
            this.news = news;
          });
      });


  }

}
