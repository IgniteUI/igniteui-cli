import {
  defineComponents,
  IgcBadgeComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcBadgeComponent);

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="description">
        <p>igc-badge component</p>
      </div>
      <igc-badge> </igc-badge>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
