import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcButtonComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-button
        size='large'>
        Large button
      </igc-button>
    `;
  }
}
