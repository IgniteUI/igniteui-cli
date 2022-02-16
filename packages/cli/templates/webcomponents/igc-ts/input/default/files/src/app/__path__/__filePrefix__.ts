import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcInputComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcInputComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-input>
        <span slot="helper-text">This is some helper text</span>
      </igc-input>
    `;
  }
}
