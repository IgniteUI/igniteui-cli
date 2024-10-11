import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcRadioGroupComponent,
} from 'igniteui-webcomponents';

defineComponents(
  IgcRadioGroupComponent,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    #form {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
  `;

  render() {
    return html`
      <form id="form">
        <igc-input label="Full name" type="text" id="full-name" name="full-name"></igc-input>
        <igc-input label="Phone number" type="tel" id="phone-number" name="phone-number" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></igc-input>
        <div>
        <label for="gender">Gender:</label>
        <igc-radio-group id="gender">
            <igc-radio name="gender" value="Male">Male</igc-radio>
            <igc-radio name="gender" value="Female">Female</igc-radio>
          </igc-radio-group>
        </div>
      </form>
    `;
  }
}
