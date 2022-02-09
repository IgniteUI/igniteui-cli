/* eslint-disable no-return-assign */
import {
  defineComponents,
  IgcNavDrawerComponent,
  IgcNavDrawerItemComponent,
  IgcNavDrawerHeaderItemComponent,
  IgcRippleComponent,
} from 'igniteui-webcomponents';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';

defineComponents(
  IgcNavDrawerComponent,
  IgcNavDrawerItemComponent,
  IgcNavDrawerHeaderItemComponent,
  IgcRippleComponent,
);

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
      <igc-nav-drawer open=true>
        <igc-nav-drawer-header-item>Ignite UI CLI</igc-nav-drawer-header-item>

        ${routes.filter((element, index) => index < routes.length - 1).map(i => `
          <igc-nav-drawer-item>
            <span slot="content">
              <a style="text-decoration: none;" href="${i.path}">${i.name}<igc-ripple></igc-ripple></a>
            </span>
          </igc-nav-drawer-item>
        `).join('')}
      </igc-nav-drawer>
      <router-outlet></router-outlet>
    `;

    const outlet = document.getElementsByTagName('router-outlet')[0];
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}

customElements.define('app-root', App);
