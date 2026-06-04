import { Router } from '@vaadin/router';
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import {
  defineComponents,
  IgcIconComponent,
  IgcNavDrawerComponent,
  IgcNavDrawerItemComponent,
  registerIcon,
} from 'igniteui-webcomponents';
import { routes } from './app-routing.js';

type AppRoute = {
  path: string;
  name?: string;
  icon?: string;
};

defineComponents(
  IgcIconComponent,
  IgcNavDrawerComponent,
  IgcNavDrawerItemComponent,
);

const materialIcons = [
  ['home', 'action/svg/production/ic_home_24px.svg'],
  ['menu', 'navigation/svg/production/ic_menu_24px.svg'],
  ['apps', 'navigation/svg/production/ic_apps_24px.svg'],
  ['code', 'action/svg/production/ic_code_24px.svg'],
  ['build', 'action/svg/production/ic_build_24px.svg'],
  ['palette', 'image/svg/production/ic_palette_24px.svg'],
] as const;

materialIcons.forEach(([name, path]) =>
  registerIcon(name, `https://unpkg.com/material-design-icons@3.0.1/${path}`, 'material')
);

@customElement('app-root')
export default class App extends LitElement {
  @state()
  private drawerOpen = true;

  @state()
  private drawerPosition: 'relative' | 'start' = 'relative';

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
            position=${this.drawerPosition}
          >
            ${visibleRoutes.map((route) => html`
              <igc-nav-drawer-item
                ?active=${this.currentPath === route.path}
                @click=${() => this.navigate(route.path)}
              >
                <igc-icon
                  slot="icon"
                  name=${route.icon || 'home'}
                  collection="material"
                  style=${this.currentPath === route.path ? 'color: #0075D2;' : ''}
                ></igc-icon>
                <span slot="content">${route.name}</span>
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

    if (!this.mediaQuery?.matches) {
      this.drawerOpen = false;
    }
  }

  private updateDrawerState = () => {
    const pinned = Boolean(this.mediaQuery?.matches);

    this.drawerOpen = pinned;
    this.drawerPosition = pinned ? 'relative' : 'start';
  };

  private updateCurrentPath = () => {
    this.currentPath = window.location.pathname;
  };
}
