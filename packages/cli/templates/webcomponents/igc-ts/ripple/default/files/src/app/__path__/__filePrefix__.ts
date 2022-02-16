import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcRippleComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcRippleComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
    <igc-button>
      <igc-ripple></igc-ripple>
      Button with ripple
    </igc-button>
    `;
  }
}
