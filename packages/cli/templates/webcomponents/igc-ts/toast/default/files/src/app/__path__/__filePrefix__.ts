import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcButtonComponent,
  IgcToastComponent,
} from 'igniteui-webcomponents';

defineComponents(
  IgcButtonComponent,
  IgcToastComponent,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-button command="--show" commandfor="save-toast">Save changes</igc-button>
      <igc-toast id="save-toast" display-time="3000">Your changes have been saved.</igc-toast>
    `;
  }
}
