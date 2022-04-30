import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  @Input() books: Book[] = [] as Book[];
  @Output() outputBookDetailsHandler = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleBookDetails(book: Book) {
    this.outputBookDetailsHandler.emit(book);
  }
}
