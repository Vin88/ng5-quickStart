import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.session.retrieve("auth_token");
    req.headers.set("Content-Type", "application/json");
    if (token) {
      const newRequest = req.clone({
        headers: req.headers.set('auth', "token")
      });
      return next.handle(newRequest);
    } else {
      return next.handle(req);
    }

  }

  constructor(private session: SessionStorageService) { }

}
