import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './service/book.service';
import { BookMapper } from './mappers/book.mapper';
import { GlobalComponentsModule } from '../global-components/global-components.module';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { CategoryDetailLoadingComponent } from './components/category-detail-loading/category-detail-loading.component';
import { BookComponent } from './components/book/book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { SharedService } from '../lib/shared.service';
const components = [
  CategoryDetailComponent,
  BookListComponent,
  CategoryDetailLoadingComponent,
  BookComponent,
  BookDetailComponent,
];
@NgModule({
  declarations: [BooksComponent, components],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    GlobalComponentsModule,
    NgxShimmerLoadingModule,
  ],
  providers: [BookService, BookMapper, SharedService],
})
export class BooksModule {}
