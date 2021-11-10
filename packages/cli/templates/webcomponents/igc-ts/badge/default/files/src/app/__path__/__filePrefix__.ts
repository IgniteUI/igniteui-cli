import {
  defineComponents,
  IgcBadgeComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcBadgeComponent);

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <igc-badge> </igc-badge>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
