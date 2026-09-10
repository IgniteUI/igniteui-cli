import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcDateRangePickerComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcDateRangePickerComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-date-range-picker label="Trip dates"></igc-date-range-picker>
    `;
  }
}
