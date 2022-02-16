import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcRadioComponent,
  IgcRadioGroupComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcRadioComponent, IgcRadioGroupComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-radio-group>
        <igc-radio name="fruit" value="banana">
          Banana
        </igc-radio>
        <igc-radio name="fruit" value="orange">
          Orange
        </igc-radio>
        <igc-radio name="fruit" value="mango">
          Mango
        </igc-radio>
      </igc-radio-group>
    `;
  }
}
