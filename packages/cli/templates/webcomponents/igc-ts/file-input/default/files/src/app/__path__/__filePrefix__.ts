import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcFileInputComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcFileInputComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-file-input
        label="Attach files"
        accept=".jpg, .png, .pdf"
        multiple
      ></igc-file-input>
    `;
  }
}
