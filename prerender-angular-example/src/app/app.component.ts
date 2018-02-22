import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>StrongBrew website</h1>
    <ul class="navigation">
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/brews">Brews</a></li>
      <li><a routerLink="/consultancy">Consultancy</a></li>
      <li><a routerLink="/about">About</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
