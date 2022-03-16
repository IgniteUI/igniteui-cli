import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcCircularProgressComponent
} from 'igniteui-webcomponents';

defineComponents(IgcCircularProgressComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
    <div style="display: flex; align-items: center; gap: 16px">
      <igc-circular-progress
        style="--diameter: 96px; --stroke-thickness: 12px;"
        animation-duration="1000"
        indeterminate="true"
        variant="danger">
      </igc-circular-progress>
      <igc-circular-progress
        style="--diameter: 96px; --stroke-thickness: 12px;"
        value="92"
        animation-duration="500"></igc-circular-progress>
      <igc-circular-progress
        style="--diameter: 96px; --stroke-thickness: 12px;"
        value="92"
        animation-duration="1500"
        variant="success"
        >
      </igc-circular-progress>
    </div>
    `;
  }
}
