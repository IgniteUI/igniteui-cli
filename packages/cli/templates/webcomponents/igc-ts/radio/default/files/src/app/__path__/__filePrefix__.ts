import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <igc-radio>
        Label
      </igc-radio>
    `;
  }
}

customElements.define('lit-$(path)', $(ClassName));
