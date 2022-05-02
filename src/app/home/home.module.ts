import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalComponentsModule } from '../global-components/global-components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HomeComponent, SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    GlobalComponentsModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
