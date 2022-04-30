import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@saleor/sdk/dist/apollo/types';
import { UserSignupModel } from 'src/app/models/user-signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
  });

  public user: UserSignupModel = {} as UserSignupModel;
  public btnLoading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((data) => {
      this.user = data;
    });
  }

  registerFormSubmit(): void {
    this.btnLoading = true;
    delete this.user.confirmPassword;
    console.log(this.user);
    localStorage.setItem('userInfo', JSON.stringify(this.user));
    setTimeout(() => {
      this.btnLoading = false;
      this.router.navigateByUrl('/login');
    }, 1000);

    // Api Request Here
  }
}
