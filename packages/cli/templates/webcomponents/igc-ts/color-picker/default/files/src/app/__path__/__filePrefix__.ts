import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcColorPickerComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcColorPickerComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  private swatches = [
    '#4a6fa5',
    '#6b8f71',
    '#a5644a',
    '#8a4fbe',
    '#c94f4f',
  ];

  render() {
    return html`
      <igc-color-picker
        label="Brand color"
        value="#4a6fa5"
        .swatches=${this.swatches}
      ></igc-color-picker>
    `;
  }
}
