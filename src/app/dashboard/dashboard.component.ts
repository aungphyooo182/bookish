import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../lib/auth.service';
import { Category } from '../models/category';
import { DashboardService } from './service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private dashboardService: DashboardService
  ) {}
  public _subscription: Subscription = new Subscription();
  public categories: Category[] = [];
  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      console.log('authenticated');
      this.getCategories();
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  getCategories() {
    this._subscription = this.dashboardService.getCategories().subscribe(
      (res) => {
        console.log('categories', res);
        this.categories = res;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  handleCategory(category: string) {
    this.router.navigateByUrl('/books/' + category);
  }
}
