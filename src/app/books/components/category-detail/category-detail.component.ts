import { Component, Input, OnInit } from '@angular/core';
import { CategoryDetail } from 'src/app/models/category-detail';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
})
export class CategoryDetailComponent implements OnInit {
  @Input() categoryDetail: CategoryDetail = {} as CategoryDetail;

  constructor() {}

  ngOnInit(): void {}
}
