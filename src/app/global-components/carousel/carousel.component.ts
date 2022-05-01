import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() imageList: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
