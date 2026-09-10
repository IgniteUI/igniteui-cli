import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcRangeSliderComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcRangeSliderComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
    <igc-range-slider
      style="margin: 40px 20px; width: 200px;"
      min="0"
      max="100"
      lower="20"
      upper="80"
      primary-ticks="5"
    >
      Price range
    </igc-range-slider>
    `;
  }
}
