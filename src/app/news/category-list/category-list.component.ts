import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Category } from '../shared/category';

@Component({
  selector: 'tik-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

 constructor() {


  }

  categories = [
    {name: 'Games'},
    {name: 'Movies'},
    {name: 'Culture'},
  ];

  ngOnInit() {
  }

  categoryClicked() {
    console.log('Category clicked');
  }
}
