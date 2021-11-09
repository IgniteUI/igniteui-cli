import {
  defineComponents,
  IgcButtonComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent);

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

customElements.define('app-$(path)', $(ClassName));
