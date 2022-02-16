import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcSliderComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcSliderComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
    <igc-slider
      style="margin: 40px 20px; width: 200px;"
      min="0"
      max="2"
      primary-ticks="3"
    >
    Label
  </igc-slider>
    `;
  }
}
