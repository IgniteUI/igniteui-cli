import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcIconComponent,
  IgcNavbarComponent,
  registerIcon,
} from 'igniteui-webcomponents';

defineComponents(
  IgcIconComponent,
  IgcNavbarComponent,
);

registerIcon(
  'home',
  'https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_home_24px.svg',
);

registerIcon(
  'search',
  'https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_search_24px.svg',
);


@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    igc-navbar {
      width:100%;
    }
  `;

  render() {
    return html`
      <igc-navbar>
        <igc-icon slot="start" name="home"></igc-icon>
        <h2>Home</h2>
        <igc-icon slot="end" name="search"></igc-icon>
      </igc-navbar>
    `;
  }
}
