import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <igc-checkbox
      checked="true"
    >
      Label
    </igc-checkbox>
    `;
  }
}

customElements.define('lit-$(path)', $(ClassName));
