import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import {
  defineComponents,
  IgcIconComponent,
  IgcNavDrawerComponent,
  IgcNavDrawerItemComponent,
  registerIconFromText,
} from 'igniteui-webcomponents';
import { Router } from '@vaadin/router';
import { routes, type AppRoute } from './app-routing.js';

const icons = [
  {
    name: 'home',
    value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
  },
  {
    name: 'apps',
    value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"/></svg>',
  },
  {
    name: 'menu',
    value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
  },
];

defineComponents(
  IgcIconComponent,
  IgcNavDrawerComponent,
  IgcNavDrawerItemComponent,
);

icons.forEach((icon) => registerIconFromText(icon.name, icon.value, 'material'));

@customElement('app-root')
export default class App extends LitElement {
  @state()
  private drawerOpen = true;

  @state()
  private currentPath = window.location.pathname;

  private mediaQuery?: MediaQueryList;

  static styles = css`
    :host {
      display: flex;
      height: 100%;
    }

    .app {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .app__navbar {
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      height: 56px;
      padding: 0 16px;
      background: #239ef0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .24);
      box-sizing: border-box;
    }

    .app__menu-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      padding: 0;
      color: #000;
      border: 0;
      background: transparent;
      cursor: pointer;
    }

    .app__menu-button igc-icon {
      font-size: 24px;
    }

    .app__title {
      margin: 0 0 0 16px;
      color: #000;
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1;
    }

    .app__body {
      display: flex;
      flex: 1 1 auto;
      min-height: 0;
    }

    .app__drawer {
      flex: 0 0 auto;
      height: 100%;
      --ig-nav-drawer-size: 280px;
      --ig-navdrawer-item-active-background: #e0f2ff;
      --ig-navdrawer-item-active-text-color: #0075d2;
      --ig-navdrawer-item-active-icon-color: #0075d2;
    }

    igc-nav-drawer-item[active]::part(base) {
      background: #e0f2ff;
      color: #0075d2;
    }

    igc-nav-drawer-item[active] igc-icon {
      color: #0075d2;
    }

    router-outlet {
      flex: 1 1 auto;
      display: flex;
      align-items: stretch;
      justify-content: center;
      min-width: 0;
      overflow: auto;
    }

    @media (max-width: 1024px) {
      .app__menu-button {
        display: none;
      }
    }
  `;

  render() {
    const visibleRoutes = (routes as AppRoute[]).filter((route) => route.name);

    return html`
      <div class="app">
        <header class="app__navbar">
          <button
            class="app__menu-button"
            type="button"
            aria-label="Toggle navigation"
            @click=${this.toggleDrawer}
          >
            <igc-icon name="menu" collection="material"></igc-icon>
          </button>
          <h1 class="app__title">$(name)</h1>
        </header>
        <div class="app__body">
          <igc-nav-drawer
            class="app__drawer"
            ?open=${this.drawerOpen}
            position="relative"
          >
            ${visibleRoutes.map((route) => html`
              <igc-nav-drawer-item
                ?active=${this.currentPath === route.path}
                @click=${() => this.navigate(route.path)}
              >
                <igc-icon
                  slot="icon"
                  name=${route.icon || 'apps'}
                  collection="material"
                  style=${this.currentPath === route.path ? 'color: #0075D2;' : ''}
                ></igc-icon>
                <span slot="content">${route.name}</span>
              </igc-nav-drawer-item>
            `)}
            ${visibleRoutes.map((route) => html`
              <igc-nav-drawer-item
                slot="mini"
                ?active=${this.currentPath === route.path}
                @click=${() => this.navigate(route.path)}
              >
                <igc-icon
                  slot="icon"
                  name=${route.icon || 'apps'}
                  collection="material"
                  style=${this.currentPath === route.path ? 'color: #0075D2;' : ''}
                ></igc-icon>
              </igc-nav-drawer-item>
            `)}
          </igc-nav-drawer>
          <router-outlet></router-outlet>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.mediaQuery = window.matchMedia('(min-width: 1025px)');
    this.updateDrawerState();
    this.mediaQuery.addEventListener('change', this.updateDrawerState);
    window.addEventListener('popstate', this.updateCurrentPath);
  }

  disconnectedCallback() {
    this.mediaQuery?.removeEventListener('change', this.updateDrawerState);
    window.removeEventListener('popstate', this.updateCurrentPath);
    super.disconnectedCallback();
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }

  private toggleDrawer = () => {
    this.drawerOpen = !this.drawerOpen;
  };

  private navigate(path: string) {
    this.currentPath = path;
    Router.go(path);
  }

  private updateDrawerState = () => {
    this.drawerOpen = Boolean(this.mediaQuery?.matches);
  };

  private updateCurrentPath = () => {
    this.currentPath = window.location.pathname;
  };
}
