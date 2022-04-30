import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() disabled: boolean = true;
  @Input() type: string = 'button';
  @Input() class: string = 'btn';
  @Input() loading: boolean = false;
  @Input() loadingText: string = '';

  constructor() {}

  ngOnInit(): void {}
}
