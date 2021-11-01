import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'igniteui-webcomponents';

@customElement('lit-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
    <igc-form id="form" ?novalidate=${novalidate}>
    <textarea name="textarea" rows="5" cols="30">
The cat was playing<br> in the garden.</textarea
    >
    <br /><br />
    <label for="full-name">Full name:</label>
    <input type="text" id="full-name" name="full-name" value="Your name" />
    <div>
      <label>Gender:</label>
      <igc-radio-group id="gender">
        ${radios.map(
          (v) => html`<igc-radio name="gender" value=${v}>${v}</igc-radio> `
        )}
      </igc-radio-group>
    </div>
    <label for="cars-multiple">Choose multiple cars:</label>
    <select name="cars-multiple" id="cars-multiple" multiple>
      <option value="volvo" selected>Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes" selected>Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  </igc-form>
    `;
  }
}
