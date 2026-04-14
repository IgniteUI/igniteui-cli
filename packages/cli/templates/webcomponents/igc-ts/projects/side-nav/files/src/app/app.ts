import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcNavDrawerComponent,
  IgcRippleComponent,
} from 'igniteui-webcomponents';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';

defineComponents(
  IgcNavDrawerComponent,
  IgcRippleComponent,
);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      display: flex;
      height: 100%;
    }

    router-outlet {
      height: 100%;
      width: 100%;
      display: flex;
      text-align: center;
      flex-flow: column nowrap;
      justify-content: stretch;
      align-items: center;
      padding: 1rem;
      box-sizing: border-box;
    }
  `;

  render() {
    return html`
      <igc-nav-drawer open position="relative">
        <igc-nav-drawer-header-item>Ignite UI CLI</igc-nav-drawer-header-item>
        ${routes.filter(route => route.name).map(({path, name}) => html`
          <igc-nav-drawer-item>
            <span slot="content">
              <a href="${path}">${name}<igc-ripple></igc-ripple></a>
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
