import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'igniteui-webcomponents';

@customElement('lit-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    #form {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
  `;

  render() {
    const radios = ['Male', 'Female'];
    return html`
    <igc-form id="form" novalidate="true">
    <label for="full-name">Full name:</label>
    <input type="text" id="full-name" name="full-name" value="Your name" />
    <label for="phone-number">Phone number:</label>
    <input type="tel" id="phone-number" name="phone-number" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
    <div>
      <label for="gender">Gender:</label>
      <igc-radio-group id="gender">
        ${radios.map(
          (v) => html`<igc-radio name="gender" value=${v}>${v}</igc-radio> `
        )}
      </igc-radio-group>
    </div>
  </igc-form>
    `;
  }
}
