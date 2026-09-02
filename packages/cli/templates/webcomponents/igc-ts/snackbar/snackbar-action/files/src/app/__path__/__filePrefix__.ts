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
      <igc-button command="--show" commandfor="delete-snackbar">Delete message</igc-button>
      <igc-snackbar id="delete-snackbar" display-time="4000">
        Message deleted.
        <igc-button slot="action" variant="flat">Undo</igc-button>
      </igc-snackbar>
    `;
  }
}
