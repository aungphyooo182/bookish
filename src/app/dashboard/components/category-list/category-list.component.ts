import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Output() outputForCategory = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleSeeBooks(category: string) {
    this.outputForCategory.emit(category);
  }
}
