import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcSelectComponent,
  IgcSelectItemComponent,
} from 'igniteui-webcomponents';

defineComponents(
  IgcSelectComponent,
  IgcSelectItemComponent,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-select label="Priority" placeholder="Choose a priority">
        <igc-select-item value="low">Low</igc-select-item>
        <igc-select-item value="medium">Medium</igc-select-item>
        <igc-select-item value="high">High</igc-select-item>
        <igc-select-item value="urgent" disabled>Urgent</igc-select-item>
      </igc-select>
    `;
  }
}
