import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="description">
        <p>igc-navbar component</p>
      </div>
      <igc-navbar style="height:30px">
        <igc-icon slot="start" name="home"></igc-icon>
        <h2>Title</h2>
        <igc-icon slot="end" name="search"></igc-icon>
      </igc-navbar>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
