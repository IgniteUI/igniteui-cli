import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcStepperComponent,
  IgcStepComponent,
} from 'igniteui-webcomponents';

defineComponents(
  IgcStepperComponent,
  IgcStepComponent,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-stepper>
        <igc-step complete>
          <span slot="title">Account</span>
          <p>Your account details have been saved.</p>
        </igc-step>
        <igc-step active>
          <span slot="title">Profile</span>
          <p>Tell us a bit more about yourself.</p>
        </igc-step>
        <igc-step optional>
          <span slot="title">Preferences</span>
          <p>Choose how you'd like to be notified.</p>
        </igc-step>
        <igc-step>
          <span slot="title">Confirmation</span>
          <p>Review and confirm your details.</p>
        </igc-step>
      </igc-stepper>
    `;
  }
}
