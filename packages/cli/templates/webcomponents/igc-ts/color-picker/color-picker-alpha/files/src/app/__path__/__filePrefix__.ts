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
    'rgba(0, 0, 0, 0.5)',
    'rgba(255, 255, 255, 0.5)',
    '#4a6fa5',
    '#a5644a',
  ];

  render() {
    return html`
      <igc-color-picker
        label="Overlay color"
        mode="input"
        format="rgb"
        show-alpha
        value="rgba(74, 111, 165, 0.6)"
        .swatches=${this.swatches}
      ></igc-color-picker>
    `;
  }
}
