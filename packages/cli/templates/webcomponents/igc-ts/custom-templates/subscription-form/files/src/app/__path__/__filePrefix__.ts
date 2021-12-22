import {
  defineComponents,
  IgcFormComponent,
  IgcInputComponent,
  IgcCheckboxComponent,
  IgcButtonComponent
} from 'igniteui-webcomponents';

defineComponents(IgcFormComponent, IgcInputComponent, IgcCheckboxComponent, IgcButtonComponent);

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        #form {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .buttonContainer {
          display: flex;
        }
        .buttonContainer > igc-button {
          flex: 1;
        }
      </style>

      <div class="container sample">
        <igc-form id="form">
          <div>Subscribe</div>
          <igc-input required name="name" type="text" label="Your Name"></igc-input>
          <igc-input required name="email" type="email" label="Your E-mail"></igc-input>
          <igc-checkbox name="agreement">I accept the license agreement</igc-checkbox>
          <br />
          <div class="buttonContainer">
            <igc-button type="reset">Reset</igc-button>
            <igc-button type="submit">Submit</igc-button>
          </div>
        </igc-form>
      </div>
    `;

    document.addEventListener('igcSubmit', function (event) {
      const customEvent = event as CustomEvent<FormData>;
      const formData = customEvent.detail;
      const formKeys = formData.keys();
      const formEntries = formData.entries();
      let result = '';
      do {
          const pair = formEntries.next().value;
          if (pair) {
              result += pair[0] + '=' + pair[1] + ';';
          }
        } while (!formKeys.next().done)
      console.log(result);
      alert(result);
    });
  }
}

customElements.define('app-$(path)', $(ClassName));
