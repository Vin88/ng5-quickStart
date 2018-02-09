import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from "@angular/router";
import { BreadcrumbsModule } from "ng2-breadcrumbs";
import { MydashboardComponent } from './mydashboard.component';
import { CategoriesModule } from './../categories/categories.module';
import { BreadcrumbModule } from './../breadcrumb/breadcrumb.module';
import { VideosModule } from "../videos/videos.module";

export const APP_ROUTES: Routes = [ {
    path: 'mydashboard',
    component: MydashboardComponent,
    data: {
      breadcrumb: 'My Dashboard',
    },      
}];

@NgModule({
  imports: [
    CommonModule,
    CategoriesModule,
    VideosModule,
    RouterModule.forChild(
      APP_ROUTES),
    BreadcrumbModule
  ],
  exports: [DashboardComponent],
  declarations: [DashboardComponent, MydashboardComponent]
})
export class DashboardModule { }

