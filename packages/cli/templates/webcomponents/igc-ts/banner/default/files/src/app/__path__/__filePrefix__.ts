import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcBannerComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcBannerComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-banner id="banner" .open=${open}>
        You are currently not logged in! Please, log into your account first.
      </igc-banner>
      <igc-button onclick="banner.toggle()">Toggle Banner</igc-button>
    `;
  }
}
