import {
  defineComponents,
  IgcIconComponent,
  IgcNavbarComponent,
} from 'igniteui-webcomponents';
import {
  registerIcon,
} from "igniteui-webcomponents/components/icon/icon.registry";

defineComponents(IgcIconComponent, IgcNavbarComponent);

registerIcon(
  'home',
  'https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_home_24px.svg'
);

registerIcon(
  'search',
  'https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_search_24px.svg'
);

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        igc-navbar {
          width:100%;
        }
      </style>

      <igc-navbar>
        <igc-icon slot="start" name="home"></igc-icon>
        <h2>Home</h2>
        <igc-icon slot="end" name="search"></igc-icon>
      </igc-navbar>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
