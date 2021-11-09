import {
  defineComponents,
  IgcNavbarComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent);

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="description">
        <p>igc-navbar component</p>
      </div>
      <igc-navbar style="height:30px; width:1300px">
        <igc-icon slot="start" name="home"></igc-icon>
        <h2>Title</h2>
        <igc-icon slot="end" name="search"></igc-icon>
      </igc-navbar>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
