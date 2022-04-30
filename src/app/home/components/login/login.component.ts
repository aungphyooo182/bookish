import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSignupModel } from 'src/app/models/user-signup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  public user: UserSignupModel = {} as UserSignupModel;
  public btnLoading: boolean = false;
  public emailError = false;
  public passwordError = false;
  public accountError = false;
  public userInfo: UserSignupModel = {} as UserSignupModel;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    this.form.valueChanges.subscribe((data) => {
      this.clearErrorType();
      this.user = data;
    });
  }
  loginFormSubmit(): void {
    this.btnLoading = true;
    delete this.user.confirmPassword;
    console.log(this.user);
    if (this.isAuthenticated()) {
      console.log('authenticated');
      setTimeout(() => {
        this.btnLoading = false;
        this.router.navigateByUrl('/dashboard');
      }, 1000);
    } else {
      this.checkErrorType();
      setTimeout(() => {
        this.btnLoading = false;
      }, 1000);
    }
    // Api Request Here
  }

  isAuthenticated() {
    if (
      this.userInfo.email === this.user.email &&
      this.userInfo.password === this.user.password
    ) {
      return true;
    }
    return false;
  }

  checkErrorType() {
    this.accountError =
      this.userInfo.email != this.user.email &&
      this.userInfo.password != this.user.password
        ? true
        : false;
    this.emailError = this.userInfo.email != this.user.email ? true : false;
    this.passwordError =
      this.userInfo.password != this.user.password ? true : false;
  }

  clearErrorType() {
    this.accountError = false;
    this.emailError = false;
    this.passwordError = false;
  }
}
