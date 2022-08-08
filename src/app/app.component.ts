import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //for input
  name = 'jack';

  products = [
    { id: 111, name: 'Watch', price: 1200 },
    { id: 222, name: 'Bag', price: 1500 },
    { id: 333, name: 'Laptop', price: 12000 },
    { id: 444, name: 'Mobile', price: 10000 },
  ];

  //for output
  msg = '';
  getMessage(msg: string) {
    this.msg = msg;
    console.log(msg);
  }

  productStatus = '';
  onStatus(val: boolean) {
    val ? (this.productStatus = 'Enable') : (this.productStatus = 'Disable');
  }
}
