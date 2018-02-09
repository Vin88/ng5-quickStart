import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from "./videos.component";
import { RouterModule, Routes } from "@angular/router";

export const APP_ROUTES: Routes = [{
    path: 'videos',
    component: VideosComponent,
    data: {
      breadcrumb: 'videos',
    },      
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      APP_ROUTES)    
  ],
  declarations: [VideosComponent]
})
export class VideosModule { }
