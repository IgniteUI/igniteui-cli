import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcMaskInputComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcMaskInputComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 280px;">
        <igc-mask-input label="Postal code" mask="L0L 0L0" placeholder="A1A 1A1"></igc-mask-input>
        <igc-mask-input label="Confirmation code" mask="CCCC-CCCC" prompt="*"></igc-mask-input>
      </div>
    `;
  }
}
