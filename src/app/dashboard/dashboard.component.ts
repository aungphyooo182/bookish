import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  public Pic1 = environment.Pic1;
  public Pic2 = environment.Pic2;
  public Pic3 = environment.Pic3;
  public Pic4 = environment.Pic4;
  public Pic5 = environment.Pic5;

  public _subscription: Subscription = new Subscription();
  public categories: Category[] = [];
  public imageList = [
    this.Pic1,
    this.Pic2,
    this.Pic3,
    this.Pic4,
    this.Pic5,
  ];
  public loading = false;

  public mutedCategories: Category[] = [];
  public limit = 10;
  public skip = 0;
  public listFull = false;
  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      console.log('authenticated');
      this.getCategories();
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  getCategories() {
    this.loading = true;
    this._subscription = this.dashboardService.getCategories().subscribe(
      (res) => {
        console.log('categories', res);
        this.categories = res;
        this.loading = false;
        this.mutedCategories = this.categories.splice(this.skip, this.limit);
        console.log(this.mutedCategories, this.skip, this.limit);
      },
      (error) => {
        this.loading = false;
        console.log('error', error);
        this.loading = false;
      }
    );
  }

  handleCategory(category: string) {
    this.router.navigateByUrl('/books/' + category);
  }

  handleLoadMore() {
    //this should be done in api service but free api service is limited
    if (this.skip < this.categories.length) {
      this.skip += this.limit;
      let array = this.categories.splice(this.skip, this.limit);
      this.mutedCategories = [...this.mutedCategories, ...array];
    } else {
      this.listFull = true;
    }
  }
}
