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
      <div class="outer-wrapper">
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
      </div>
    `;

    const outlet = document.getElementsByTagName('router-outlet')[0];
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}

customElements.define('app-root', App);
