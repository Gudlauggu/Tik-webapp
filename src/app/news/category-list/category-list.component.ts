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

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
      this.categoryService.getCategories()
        .subscribe(categories => {
          this.categories = categories;
    });
  }

  categoryClicked(category) {
     this.router.navigateByUrl('/category-detail/' + category.id);
  }

}
