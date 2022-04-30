import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public book: Book = {} as Book;

  constructor() {}

  setBook(book: Book) {
    this.book = book;
  }

  getBook() {
    return this.book;
  }
}
