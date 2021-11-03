import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        #form {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
      </style>

      <igc-form id="form" novalidate="true">
        <label for="full-name">Full name:</label>
        <input type="text" id="full-name" name="full-name" value="Your name" />
        <label for="phone-number">Phone number:</label>
        <input type="tel" id="phone-number" name="phone-number" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
        <div>
          <label for="gender">Gender:</label>
          <igc-radio-group id="gender">
            <igc-radio name="gender" value="Male">Male</igc-radio>
            <igc-radio name="gender" value="Female">Female</igc-radio>
          </igc-radio-group>
        </div>
      </igc-form>
    `;
  }
}

customElements.define('lit-$(path)', $(ClassName));
