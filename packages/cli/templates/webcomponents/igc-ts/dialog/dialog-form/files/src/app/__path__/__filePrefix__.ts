import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcButtonComponent,
  IgcDialogComponent,
  IgcInputComponent,
} from 'igniteui-webcomponents';

defineComponents(
  IgcButtonComponent,
  IgcDialogComponent,
  IgcInputComponent,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-button command="--show" commandfor="invite-dialog">Invite teammate</igc-button>
      <igc-dialog id="invite-dialog" title="Invite a teammate" close-on-outside-click>
        <form id="invite-form">
          <igc-input name="email" type="email" label="Email address" required></igc-input>
        </form>
        <div slot="footer">
          <igc-button command="--hide" commandfor="invite-dialog" variant="flat">Cancel</igc-button>
          <igc-button command="--hide" commandfor="invite-dialog" variant="contained">Send invite</igc-button>
        </div>
      </igc-dialog>
    `;
  }
}
