import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcButtonComponent,
  IgcDialogComponent,
} from 'igniteui-webcomponents';

defineComponents(
  IgcButtonComponent,
  IgcDialogComponent,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-button command="--show" commandfor="delete-dialog">Delete account</igc-button>
      <igc-dialog id="delete-dialog" title="Delete account">
        <p>Are you sure you want to delete your account? This action cannot be undone.</p>
        <div slot="footer">
          <igc-button command="--hide" commandfor="delete-dialog" variant="flat">Cancel</igc-button>
          <igc-button command="--hide" commandfor="delete-dialog" variant="contained">Delete</igc-button>
        </div>
      </igc-dialog>
    `;
  }
}
