/* eslint-disable no-return-assign */
import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
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

@customElement('app-root')
export class App extends LitElement {
  static styles = css`
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
  `;

  render() {
    return html`
      <igc-nav-drawer open=true>
        <igc-nav-drawer-header-item>Ignite UI CLI</igc-nav-drawer-header-item>
        ${routes.filter((element, index) => index < routes.length - 1).map(i => html`
          <igc-nav-drawer-item>
            <span slot="content">
              <a href="${i.path}">${i.name}<igc-ripple></igc-ripple></a>
            </span>
          </igc-nav-drawer-item>
        `)}
      </igc-nav-drawer>
      <router-outlet></router-outlet>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
