import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <igc-icon name="github" slot="suffix">
      </igc-icon>
    `;
  }
}

customElements.define('lit-$(path)', $(ClassName));
