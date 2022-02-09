import {
  defineComponents,
  IgcRippleComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcRippleComponent);

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <igc-button>
      <igc-ripple></igc-ripple>
      Button with ripple
    </igc-button>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
