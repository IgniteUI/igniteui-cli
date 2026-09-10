import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcButtonComponent,
  IgcSnackbarComponent,
} from 'igniteui-webcomponents';

defineComponents(
  IgcButtonComponent,
  IgcSnackbarComponent,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-button command="--show" commandfor="offline-snackbar">Go offline</igc-button>
      <igc-snackbar id="offline-snackbar" display-time="3000">
        You are currently offline.
      </igc-snackbar>
    `;
  }
}
