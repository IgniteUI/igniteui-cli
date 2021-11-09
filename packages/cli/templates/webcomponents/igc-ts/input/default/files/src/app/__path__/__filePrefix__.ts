import {
  defineComponents,
  IgcInputComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcInputComponent);

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="description">
        <p>igc-input component</p>
      </div>
      <igc-input>
        <igc-icon name="github" slot="prefix"></igc-icon>
        <igc-icon name="github" slot="suffix"></igc-icon>
        <span slot="helper-text">This is some helper text</span>
      </igc-input>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
