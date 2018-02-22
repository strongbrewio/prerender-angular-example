import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-brews',
  template: `
    <h1>Brews</h1>
    <p>This doesn't make sense at all on this page but I know your mouse coordinates</p>
    <div *ngIf="coords$|async as coords">
      clientX: {{coords.clientX}} <br/>
      clientY: {{coords.clientY}}
    </div>
  `,
  styleUrls: ['./brews.component.scss']
})
export class BrewsComponent {
  coords$ = fromEvent(document, 'mousemove')
}
