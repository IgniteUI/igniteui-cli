import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcButtonGroupComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcButtonGroupComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
    render() {
        return html`
          <igc-button-group>
            <igc-toggle-button value="left">Left</igc-toggle-button>
            <igc-toggle-button value="center">Center</igc-toggle-button>
            <igc-toggle-button value="right">Right</igc-toggle-button>
          </igc-button-group>
        `;
      }
}
