import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'igniteui-webcomponents';

@customElement('lit-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
  <igc-input>
      <igc-icon name="github" slot="prefix"></igc-icon>
      <igc-icon name="github" slot="suffix"></igc-icon>
      <span slot="helper-text">This is some helper text</span>
  </igc-input>
    `;
  }
}
