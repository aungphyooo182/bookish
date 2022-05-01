import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/lib/shared.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private location: Location
  ) {}
  public book: Book = {} as Book;
  ngOnInit(): void {
    this.book = this.sharedService.getBook();
    if (!this.book.title) {
      this.location.back();
    }
  }

  back() {
    this.location.back();
  }
}
