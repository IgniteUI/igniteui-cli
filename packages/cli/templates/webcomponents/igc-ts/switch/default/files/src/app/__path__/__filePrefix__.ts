import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcSwitchComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcSwitchComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-switch>
        Label
      </igc-switch>
    `;
  }
}
