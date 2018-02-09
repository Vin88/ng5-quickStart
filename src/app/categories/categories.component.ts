import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(public categorySvc: CategoryService) { }
  categoryList: Category[];

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.categorySvc.getCategories().subscribe(result => {
      this.categoryList = result;
    });
  }

}
