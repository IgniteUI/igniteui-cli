import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'igniteui-webcomponents';

@customElement('lit-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-navbar style="height:30px">
        <igc-icon slot="start" name="home"></igc-icon>
        <h2>Title</h2>
        <igc-icon slot="end" name="search"></igc-icon>
      </igc-navbar>
    `;
  }
}
