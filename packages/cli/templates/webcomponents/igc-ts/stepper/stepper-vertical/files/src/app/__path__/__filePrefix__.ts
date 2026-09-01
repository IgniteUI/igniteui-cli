import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcStepperComponent,
  IgcStepComponent,
} from 'igniteui-webcomponents';

defineComponents(
  IgcStepperComponent,
  IgcStepComponent,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-stepper orientation="vertical" linear>
        <igc-step complete>
          <span slot="title">Shipping address</span>
          <span slot="subtitle">Where should we send your order?</span>
          <p>123 Main St, Springfield</p>
        </igc-step>
        <igc-step active>
          <span slot="title">Payment method</span>
          <span slot="subtitle">Add a card or choose a saved one</span>
          <p>Enter your payment details to continue.</p>
        </igc-step>
        <igc-step disabled>
          <span slot="title">Review order</span>
          <span slot="subtitle">Double-check everything before you pay</span>
          <p>Available once payment is complete.</p>
        </igc-step>
      </igc-stepper>
    `;
  }
}
