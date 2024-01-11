import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcTextareaComponent,
  registerIconFromText
} from 'igniteui-webcomponents';

defineComponents(IgcTextareaComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
    render() {
        return html`
          <igc-textarea>
            Text area component
          </igc-textarea>
        `;
      }
}
