import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcCheckboxComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcCheckboxComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-checkbox
        checked="true"
      >
        Label
      </igc-checkbox>
    `;
  }
}
