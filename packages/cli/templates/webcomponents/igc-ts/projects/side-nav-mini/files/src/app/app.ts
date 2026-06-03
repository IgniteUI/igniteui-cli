import { html, css, LitElement } from 'lit';
import type { PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  defineComponents,
  IgcNavbarComponent,
  IgcNavDrawerComponent,
  IgcIconButtonComponent,
  IgcIconComponent,
  IgcRippleComponent,
  registerIconFromText,
} from 'igniteui-webcomponents';
import { Router } from '@vaadin/router';
import { routes, type AppRoute } from './app-routing.js';

defineComponents(
  IgcNavbarComponent,
  IgcNavDrawerComponent,
  IgcIconButtonComponent,
  IgcIconComponent,
  IgcRippleComponent,
);

const HOME_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const APPS_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"/></svg>';
const MENU_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3zm0-5h18v-2H3zM3 6v2h18V6z"/></svg>';

registerIconFromText('home', HOME_ICON, 'nav-icons');
registerIconFromText('apps', APPS_ICON, 'nav-icons');
registerIconFromText('menu', MENU_ICON, 'nav-icons');

const MINI_BREAKPOINT = 1024;
const navRoutes: AppRoute[] = routes.filter(r => r.name);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    igc-navbar {
      flex-shrink: 0;
    }

    .row-layout {
      display: flex;
      flex-direction: row;
      flex: 1 1 auto;
      min-height: 0;
    }

    igc-nav-drawer {
      flex-shrink: 0;
    }

    .view-container {
      flex: 1 1 auto;
      min-width: 0;
      overflow: auto;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 1rem;
      box-sizing: border-box;
    }

    .nav-toggle-btn {
      display: flex;
    }

    @media (max-width: 1024px) {
      .nav-toggle-btn {
        display: none;
      }
    }
  `;

  @property({ type: Boolean })
  drawerOpen = window.innerWidth > MINI_BREAKPOINT;

  private _onResize = () => {
    if (window.innerWidth <= MINI_BREAKPOINT && this.drawerOpen) {
      this.drawerOpen = false;
    }
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._onResize);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this._onResize);
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
    this._onResize();
  }

  private _toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

  render() {
    return html`
      <igc-navbar>
        <igc-icon-button class="nav-toggle-btn" slot="start" variant="flat" @click="${this._toggleDrawer}">
          <igc-icon collection="nav-icons" name="menu"></igc-icon>
        </igc-icon-button>
        <span>Ignite UI CLI</span>
      </igc-navbar>
      <div class="row-layout">
        <igc-nav-drawer ?open="${this.drawerOpen}" position="relative">
          ${navRoutes.map(({ path, name, icon }) => html`
            <igc-nav-drawer-item>
              <a slot="icon" href="${path}" aria-label="${name}">
                <igc-icon collection="nav-icons" name="${icon ?? 'apps'}"></igc-icon>
              </a>
              <a slot="content" href="${path}">${name}<igc-ripple></igc-ripple></a>
            </igc-nav-drawer-item>
          `)}
          ${navRoutes.map(({ path, name, icon }) => html`
            <igc-nav-drawer-item slot="mini">
              <a slot="icon" href="${path}" aria-label="${name}">
                <igc-icon collection="nav-icons" name="${icon ?? 'apps'}"></igc-icon>
              </a>
            </igc-nav-drawer-item>
          `)}
        </igc-nav-drawer>
        <div class="view-container">
          <router-outlet></router-outlet>
        </div>
      </div>
    `;
  }
}
