import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'igniteui-webcomponents';

@customElement('lit-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
    <igc-checkbox
      checked=${checked}
    >
      Label
    </igc-checkbox>
    `;
  }
}
