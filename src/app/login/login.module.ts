import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2Webstorage } from 'ngx-webstorage';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Webstorage
  ],
  exports: [LoginComponent],
  providers: [LoginService],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule { }
