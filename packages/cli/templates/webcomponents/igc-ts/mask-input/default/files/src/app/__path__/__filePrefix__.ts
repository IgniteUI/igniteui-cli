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
      <igc-mask-input label="Phone number" mask="(000) 000-0000"></igc-mask-input>
    `;
  }
}
