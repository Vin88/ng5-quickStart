import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Category } from './category';
import { Constants } from './../config/constants';
import 'rxjs/add/operator/map'

@Injectable()
export class CategoryService {
  
  constructor(public http: HttpClient) { }

  getCategories() : Observable<Category[]>{
    return this.http.get(Constants.getAPIUrl()+'getCategory').map(res => {
      return (res as any ).data as Category[];
    });
  };

}
