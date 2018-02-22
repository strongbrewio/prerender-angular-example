import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home</h1>
    <h2>Frontend training by experts</h2>
    <p>To show that the javascript still works I've added this cool counter, you could increment the value by click on
      the button below:</p>
    <button (click)="increment()">Counter: {{counter}}</button>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  counter = 0;

  increment(): void {
    this.counter++;
  }
}
