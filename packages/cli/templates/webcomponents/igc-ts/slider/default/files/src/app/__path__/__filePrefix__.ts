import {
  defineComponents,
  IgcSliderComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcSliderComponent);

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
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

customElements.define('app-$(path)', $(ClassName));
