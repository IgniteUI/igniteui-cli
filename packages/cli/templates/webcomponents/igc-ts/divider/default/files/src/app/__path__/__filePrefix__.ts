import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcDividerComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcDividerComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <p>First paragraph</p>
      <igc-divider ?middle=true type=solid></igc-divider>
      <p>Second paragraph</p>
    `;
  }
}
