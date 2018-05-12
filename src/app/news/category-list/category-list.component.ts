import { Component, EventEmitter, Input, OnInit } from '@angular/core';

import { CategoryService } from '../../shared/db/category.service';


@Component({
  selector: 'tik-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {


  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories();

  }



  ngOnInit() {
  }

  categoryClicked(categories) {
    console.log('Category clicked: ' + categories.name);
  }
}
