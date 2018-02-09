import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { Ng2Webstorage } from 'ngx-webstorage';

import { AppRoutingModule } from './config/app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { HttpInterceptorService } from './config/http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    Ng2Webstorage,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers: [HttpInterceptorService, {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}]
})
export class AppModule { }  
