import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { GlobalComponentsModule } from '../global-components/global-components.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryMapper } from './mappers/category.mapper';
import { DashboardService } from './service/dashboard.service';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryComponent } from './components/category/category.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { CategoryLoadingComponent } from './components/category-loading/category-loading.component';
const components = [
  CategoryListComponent,
  CategoryComponent,
  CategoryLoadingComponent,
];
@NgModule({
  declarations: [DashboardComponent, components],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    GlobalComponentsModule,
    HttpClientModule,
    NgxShimmerLoadingModule,
  ],
  providers: [CategoryMapper, DashboardService],
})
export class DashboardModule {}
