import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcButtonComponent,
  IgcNavDrawerComponent,
  IgcNavDrawerItemComponent,
  IgcNavDrawerHeaderItemComponent,
} from 'igniteui-webcomponents';

defineComponents(
  IgcButtonComponent,
  IgcNavDrawerComponent,
  IgcNavDrawerItemComponent,
  IgcNavDrawerHeaderItemComponent,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-button command="--toggle" commandfor="app-drawer">Menu</igc-button>
      <igc-nav-drawer id="app-drawer">
        <igc-nav-drawer-header-item>My Application</igc-nav-drawer-header-item>
        <igc-nav-drawer-item active>
          <span slot="content">Dashboard</span>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item>
          <span slot="content">Orders</span>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item>
          <span slot="content">Settings</span>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item disabled>
          <span slot="content">Archived</span>
        </igc-nav-drawer-item>
      </igc-nav-drawer>
    `;
  }
}
