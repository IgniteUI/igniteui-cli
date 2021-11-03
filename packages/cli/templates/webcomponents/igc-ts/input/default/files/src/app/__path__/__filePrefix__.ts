import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <igc-input>
        <igc-icon name="github" slot="prefix"></igc-icon>
        <igc-icon name="github" slot="suffix"></igc-icon>
        <span slot="helper-text">This is some helper text</span>
      </igc-input>
    `;
  }
}

customElements.define('lit-$(path)', $(ClassName));
