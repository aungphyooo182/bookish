import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css'],
})
export class DisclaimerComponent implements OnInit {
  @Input() type: string = '';
  public text: string = '';
  constructor() {}

  ngOnInit(): void {
    switch (this.type) {
      case 'signup':
        this.text =
          'Sign up process does not use api service and it uses only local storeage!';
        break;
      case 'login':
        this.text =
          'Login process does not use api service and it uses only local storeage!';
        break;
      default:
        this.text = 'Default';
    }
  }
}
