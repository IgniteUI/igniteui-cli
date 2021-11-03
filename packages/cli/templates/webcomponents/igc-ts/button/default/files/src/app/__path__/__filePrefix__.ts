import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <igc-button
        size='large'>
        Large button
      </igc-button>
    `;
  }
}

customElements.define('lit-$(path)', $(ClassName));
