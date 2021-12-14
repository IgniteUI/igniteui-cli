/* eslint-disable no-return-assign */
import {
  defineComponents,
  IgcNavDrawerComponent,
  IgcNavDrawerItemComponent,
  IgcNavDrawerHeaderItemComponent,
  IgcRippleComponent,
} from 'igniteui-webcomponents';
import { routes } from './index.js';
import './app/home/home.component';
import './app/not-found/not-found.component';

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
      igc-nav-drawer-header-item {
        text-align: center;
        font-weight: bold;
      }
    </style>
    <div id="navigation-outlet">
      <igc-nav-drawer open=true>
        <igc-nav-drawer-header-item>Ignite UI CLI</igc-nav-drawer-header-item>

        ${routes.filter((element, index) => index < routes.length - 1).map(i => this.innerHTML = `
          <igc-nav-drawer-item>
            <span slot="content">
              <a style="text-decoration: none;" href="${i.path}">${i.name}<igc-ripple></igc-ripple></a>
            </span>
          </igc-nav-drawer-item>
        `)}
      </igc-nav-drawer>
    </div>
    `;
  }
}

customElements.define('app-navigation', App);
