import {
  defineComponents,
  IgcCheckboxComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcCheckboxComponent);

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

customElements.define('app-$(path)', $(ClassName));
