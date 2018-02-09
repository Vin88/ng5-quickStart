import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from "./categories.component";
import { RouterModule, Routes } from "@angular/router";
import { CategoryService } from './category.service';

export const APP_ROUTES: Routes = [{
    path: 'categories',
    component: CategoriesComponent,
    data: {
      breadcrumb: 'Categories',
    },      
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      APP_ROUTES)    
  ],
  declarations: [CategoriesComponent],
  providers: [CategoryService]
})
export class CategoriesModule { }
