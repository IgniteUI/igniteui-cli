import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcDatePickerComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcDatePickerComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-date-picker>
      </igc-date-picker>
    `;
  }
}
