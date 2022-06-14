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

  public Pic1 = '../../assets/images/row-1-column-1.png';
  public Pic2 = '../../assets/images/row-1-column-2.png';
  public Pic3 = '../../assets/images/row-1-column-3.png';
  public Pic4 = '../../assets/images/row-1-column-4.png';
  public Pic5 = '../../assets/images/row-1-column-5.png';

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
