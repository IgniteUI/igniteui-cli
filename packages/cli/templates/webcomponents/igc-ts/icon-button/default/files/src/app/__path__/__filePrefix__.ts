import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <igc-icon-button>
      </igc-icon-button>
    `;
  }
}

customElements.define('lit-$(path)', $(ClassName));
