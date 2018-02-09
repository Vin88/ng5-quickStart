import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbService } from './breadcrumb.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [BreadcrumbComponent],
  declarations: [BreadcrumbComponent],
  providers: [BreadcrumbService]
})
export class BreadcrumbModule { }
