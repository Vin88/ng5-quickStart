import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SessionStorageService, SessionStorage } from 'angular-web-storage';
import { Constants } from './../config/constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }
  login(un: string, ps: string): Observable<any>{
    return this.http.post(Constants.getAPIUrl()+`adminlogin`, {"userName": un, password: ps}, httpOptions);
  };

}
