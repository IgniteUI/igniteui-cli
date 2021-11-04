import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <igc-link-button>
        Click me
      </igc-link-button>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
