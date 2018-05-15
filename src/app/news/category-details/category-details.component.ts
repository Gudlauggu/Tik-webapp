import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../shared/category';
import { News } from '../shared/news';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { CategoryService } from '../../shared/db/category.service';

@Component({
  selector: 'tik-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  categoryId: string;

  @Input()
  category: Category;

  @Output()
  clickedCategory = new EventEmitter<Category>();

  @Input()
  url: string;

  constructor(private categoryService: CategoryService) {
    this.url = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  }


  ngOnInit() {
    this.categoryService.currentCategoryUid
      .subscribe(categoryId => this.categoryId = categoryId);

    this.categoryService.getCategory(this.categoryId).subscribe(category => {
      this.category = category;
      });
  }

  newsClicked(news) {
    console.log('News clicked: ' + news.displayName);
  }
}
