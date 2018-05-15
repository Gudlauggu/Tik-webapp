import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/db/category.service';
import { Category } from '../shared/category';
import { Router } from '@angular/router';


@Component({
  selector: 'tik-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];
  categoryId: string;

  constructor(private categoryService: CategoryService,
              private router: Router) {}

  ngOnInit() {
    this.categoryService.currentCategoryUid
      .subscribe(categoryId => this.categoryId = categoryId);

    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  categoryClicked(category) {
    // console.log(category.id);
    this.categoryService.changeCategory(category.id);
    console.log(this.categoryId);
    this.router.navigateByUrl('/category-detail');

  }


}
