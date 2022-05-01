import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Input() listFull: boolean = false;
  @Output() outputForCategory = new EventEmitter();
  @Output() outputForLoadMore = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickedLoadMore() {
    this.outputForLoadMore.emit();
  }

  handleSeeBooks(category: string) {
    this.outputForCategory.emit(category);
  }
}
