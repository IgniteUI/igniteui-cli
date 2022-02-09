import { Router, } from '@vaadin/router';
import { routes } from './app-routing.js';

export class App extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        router-outlet {
          width: 100%;
          height: 100%;
          display: flex;
          text-align: center;
          flex-flow: column nowrap;
          justify-content: stretch;
          align-items: center;
          overflow: inherit;
        }
      </style>
      <router-outlet></router-outlet>
    `;

    const outlet = document.getElementsByTagName('router-outlet')[0];
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}

customElements.define('app-root', App);
