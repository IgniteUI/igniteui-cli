import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcFormComponent,
  IgcInputComponent,
  IgcCheckboxComponent,
  IgcButtonComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcFormComponent, IgcInputComponent, IgcCheckboxComponent, IgcButtonComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
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
  `;

  private handleSubmit = (event:any) => {
    const customEvent = event as CustomEvent<FormData>;
    const formData = customEvent.detail;
    const formKeys = formData.keys();
    const formEntries = formData.entries();
    let result = '';
    do {
      const pair = formEntries.next().value;
      if (pair) {
        result += `${pair[0]}=${pair[1]};`;
      }
    } while (!formKeys.next().done);
    alert(result);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('igcSubmit', this.handleSubmit);
  }

  disconnectedCallback() {
    this.removeEventListener('igcSubmit', this.handleSubmit);
    super.disconnectedCallback();
  }

  render() {
    return html`
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
  }
}
