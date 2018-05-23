import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../shared/category';
import { CategoryService } from '../../shared/db/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../shared/db/news.service';
import { forEach } from '@angular/router/src/utils/collection';
import { News } from '../shared/news';

@Component({
  selector: 'tik-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {


  category: Category;
  news: News;

  @Input()
  url: string;

  constructor(private categoryService: CategoryService,
              private router: Router,
              private newsService: NewsService,
              private route: ActivatedRoute) {
    this.url = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  }


  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const id = params.get('id');
        this.newsService.getNewsByCategory(id)
          .subscribe(news => {
            this.news = news;
          });
        this.categoryService.getCategory(id)
          .subscribe(category => {
            this.category = category;
          });
      });


  }

  thisNewsClicked(id) {
    this.router.navigateByUrl('/news/' + id);
  }

  backClicked() {
    this.router.navigateByUrl('/category');
  }
}
