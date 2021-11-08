import {
  defineComponents,
  IgcButtonComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent);

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="description">
        <p>igc-button component</p>
      </div>
      <igc-button
        size='large'>
        Large button
      </igc-button>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
