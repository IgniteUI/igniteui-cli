import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcQrCodeComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcQrCodeComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-qr-code
        value="https://www.infragistics.com/products/ignite-ui-web-components"
        size="160"
      ></igc-qr-code>
    `;
  }
}
