import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcLinearProgressComponent
} from 'igniteui-webcomponents';

defineComponents(IgcLinearProgressComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
    <div style="width: 200px; padding: 20px;">
      <igc-linear-progress
        value="92"
        animation-duration="1000"
        label-align="top-end"
        variant="success">
      </igc-linear-progress>
    </div>
    `;
  }
}
