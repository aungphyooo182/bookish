import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input() category: Category = {} as Category;
  @Output() handleSeeBooks = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickedSeeBooks(category: string) {
    this.handleSeeBooks.emit(category);
  }
}
