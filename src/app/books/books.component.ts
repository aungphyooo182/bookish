import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../lib/shared.service';
import { Book } from '../models/book';
import { CategoryDetail } from '../models/category-detail';
import { BookService } from './service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  public category: string = '';
  public _subscription = new Subscription();
  public categoryDetail: CategoryDetail = {} as CategoryDetail;
  public books: Book[] = [] as Book[];
  public apiError = false;
  public loading = false;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private sharedService: SharedService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.category = params['id'] ? params['id'] : '';
    });
  }

  ngOnInit(): void {
    if (this.category) {
      this.getBooksByCategory(this.category);
    }
  }

  getBooksByCategory(category: string) {
    this.apiError = false;
    this.loading = true;
    this._subscription = this.bookService
      .getBooksByCategory(category)
      .subscribe(
        (data) => {
          console.log('data', data[0]);
          this.categoryDetail = data[0];
          this.books = this.categoryDetail.books;
          this.loading = false;
        },
        (error) => {
          console.log('error', error);
          this.apiError = true;
          this.loading = false;
        }
      );
  }

  handleBookDetail(book: Book) {
    this.sharedService.setBook(book);
    this.router.navigate(['book-detail'], { relativeTo: this.route });
  }
}
