import { Router } from '@vaadin/router';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { routes } from './app-routing.js';

@customElement('app-root')
export class App extends LitElement {
  static styles = css`
    router-outlet {
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
      <router-outlet></router-outlet>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
