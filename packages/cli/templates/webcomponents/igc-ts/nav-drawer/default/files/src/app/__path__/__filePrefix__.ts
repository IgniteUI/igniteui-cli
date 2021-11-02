import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'igniteui-webcomponents';

@customElement('lit-$(path)')
export default class $(ClassName) extends LitElement {
  const handleOpen = () => {
    const drawer = document.querySelector(
      'igc-nav-drawer'
    ) as IgcNavDrawerComponent;
    drawer?.show();
  };

  const handleClose = () => {
    const drawer = document.querySelector(
      'igc-nav-drawer'
    ) as IgcNavDrawerComponent;
    drawer?.hide();
  };

  const handleToggle = () => {
    const drawer = document.querySelector(
      'igc-nav-drawer'
    ) as IgcNavDrawerComponent;
    drawer?.toggle();
  };

  render() {
    return html`
    <div style="display: flex;">
      <igc-nav-drawer>
        <igc-nav-drawer-header-item>Sample Drawer</igc-nav-drawer-header-item>
        <igc-nav-drawer-item>
          <igc-icon slot="icon" name="home"></igc-icon>
          <span slot="content">Home</span>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item>
          <igc-icon slot="icon" name="search"></igc-icon>
          <span slot="content">Search</span>
        </igc-nav-drawer-item>
        <div slot="mini">
          <igc-nav-drawer-item>
            <igc-icon slot="icon" name="home"></igc-icon>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item>
            <igc-icon slot="icon" name="search"></igc-icon>
          </igc-nav-drawer-item>
        </div>
      </igc-nav-drawer>
      <div>
        <p>Sample page content</p>
        <igc-button @click="${handleOpen}">Open</igc-button>
        <igc-button @click="${handleClose}">Close</igc-button>
        <igc-button @click="${handleToggle}">Toggle</igc-button>
      </div>
    </div>
    `;
  }
}
