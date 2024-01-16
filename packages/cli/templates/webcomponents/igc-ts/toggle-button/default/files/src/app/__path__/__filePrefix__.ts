import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcToggleButtonComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcToggleButtonComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
    render() {
        return html`
          <igc-toggle-button>Toggle button</igc-toggle-button>
        `;
      }
}
