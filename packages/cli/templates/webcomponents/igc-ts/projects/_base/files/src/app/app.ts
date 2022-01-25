import { Router, } from '@vaadin/router';
import { routes } from './app-routing.js';

export class App extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="outer-wrapper">
        <router-outlet></router-outlet>
      </div>
    `;

    const outlet = document.getElementsByTagName('router-outlet')[0];
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}

customElements.define('app-root', App);
