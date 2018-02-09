import { Component, Input, ViewContainerRef, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LoginService } from "./login.service";
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private router: Router, private loginService: LoginService, private toastr: ToastsManager, vcr: ViewContainerRef, private session: SessionStorageService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  userName: string = "";
  password: string = "";

  login(loginForm): void {
    console.log(loginForm);
    this.loginService.login(this.userName, this.password).subscribe(data => {
      if (data.status) {
        this.session.store("auth_token", data.token);
        this.router.navigate(['/dashboard/mydashboard']);
      } else {
        this.toastr.error('Invalid credentials!', 'Oops!');
      }
    });
  }

  registerUser(): void {
    this.router.navigate(['/register']);
  }


}
