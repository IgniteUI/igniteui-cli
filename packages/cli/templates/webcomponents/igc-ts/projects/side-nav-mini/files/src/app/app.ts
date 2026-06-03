import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import {
  defineComponents,
  IgcIconComponent,
  IgcNavDrawerComponent,
  IgcNavDrawerItemComponent,
  registerIcon,
} from 'igniteui-webcomponents';
import { Router } from '@vaadin/router';
import { routes, type AppRoute } from './app-routing.js';

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
      --menu-full-width: 280px;
      --ig-nav-drawer-item-active-background: #e0f2ff;
      --ig-nav-drawer-item-active-text-color: #0075d2;
      --ig-nav-drawer-item-active-icon-color: #0075d2;
    }

    .app--mini .app__drawer {
      --menu-full-width: 68px;
    }

    igc-nav-drawer.app__drawer::part(base) {
      transition: width 0.3s ease-out;
      overflow: hidden;
    }

    .app--mini igc-nav-drawer-item::part(base) {
      justify-content: center;
      width: 40px;
      min-height: 40px;
      padding: 0;
      margin: 4px auto;
      border-radius: 8px;
    }

    .app--mini igc-nav-drawer-item::part(content) {
      display: none;
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
        <div class=${this.drawerOpen ? 'app__body' : 'app__body app--mini'}>
          <igc-nav-drawer
            class="app__drawer"
            ?open=${true}
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
