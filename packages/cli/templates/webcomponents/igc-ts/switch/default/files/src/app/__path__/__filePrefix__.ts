import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <igc-switch>
        Label
      </igc-switch>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
