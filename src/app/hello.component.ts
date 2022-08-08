import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  //input => parent to child, means here we declared the parent components property in the child components selectors.
  @Input() name;
  @Input() product;

  //output => parent listens for child event
  @Output() message = new EventEmitter<string>();
  @Output() status = new EventEmitter<boolean>();

  enabled: boolean;
  disabled: boolean;

  setMessage(msg: string) {
    this.message.emit(msg);
    console.log(msg);
  }

  isActive(active: boolean) {
    this.status.emit(active);
    if (active) {
      this.enabled = true;
      this.disabled = false;
    } else {
      this.enabled = false;
      this.disabled = true;
    }
  }
}
