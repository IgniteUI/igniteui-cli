import { LitElement, html, customElement } from 'lit-element';
import 'igniteui-webcomponents';
import { routes } from './index';
import './app/home/home-component';
import './app/not-found/not-found.component';

@customElement('lit-app')
export class App extends LitElement {
  render() {
    return html`
    <div id="navigation-outlet">
      <igc-nav-drawer open=true>
        <igc-nav-drawer-header-item>Ignite UI CLI</igc-nav-drawer-header-item>

        ${routes.map(i => html`
          <igc-nav-drawer-item>
            <span slot="content">
              <a href="${i.path}">${i.name}</a>
            </span>
          </igc-nav-drawer-item>
        `)}
      </igc-nav-drawer>
    </div>
    `;
  }
}
