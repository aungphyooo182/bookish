import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  @Output() handleBookDetails = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  clickedDetails(book: Book) {
    this.handleBookDetails.emit(book);
  }
}
