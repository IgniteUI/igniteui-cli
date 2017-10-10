import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
	<nav-menu></nav-menu>

    <div class="outer-outlet">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }

