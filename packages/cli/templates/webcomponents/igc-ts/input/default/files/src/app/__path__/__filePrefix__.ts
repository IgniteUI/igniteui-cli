import {
  defineComponents,
  IgcInputComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcInputComponent);

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <igc-input>
        <span slot="helper-text">This is some helper text</span>
      </igc-input>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
