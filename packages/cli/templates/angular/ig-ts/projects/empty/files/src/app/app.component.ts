import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <nav-menu></nav-menu>

    <div class="content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      background: url(src/app/assets/lines-bottom-right.svg) right bottom;	
      background-repeat: no-repeat;
      height:  100%;
    }
  `]
})
export class AppComponent { }
