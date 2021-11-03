import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
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
    </div>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
