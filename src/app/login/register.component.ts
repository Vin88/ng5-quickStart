import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import 'rxjs/Rx';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private location: Location, private formBuilder: FormBuilder) { }
  register: any = {};
  registerForm: FormGroup;
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name': new FormControl(this.register.name, [
        Validators.required,
        Validators.minLength(4)
      ]
      ),
      'email': new FormControl(this.register.email, {
        validators: [Validators.required, Validators.minLength(4), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],
        updateOn: 'submit'
      }),
      'username': new FormControl(this.register.userName, {
        validators: [Validators.required, Validators.minLength(4)]
      }),
      'password': new FormControl(this.register.password, {
        validators: [Validators.required, Validators.minLength(4)]
      }),
      'confirm': new FormControl(this.register.retypePassword, {
        validators: [Validators.required, Validators.minLength(4)]
      })
    }, {updateOn: 'submit'});

      // Observable on reactive forms
  this.registerForm.valueChanges
    .filter(data => this.registerForm.valid)
    .subscribe(data => console.log(JSON.stringify(data)));

  }
  get name() { return this.registerForm.get('name'); }

  get email() { return this.registerForm.get('email'); }
  get username() { return this.registerForm.get('username'); }
  get password() { return this.registerForm.get('password'); }
  get confirm() { return this.registerForm.get('confirm'); }

  goLogin(): void {
    this.location.back();
  }  

}
