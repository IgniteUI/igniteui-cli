import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcButtonGroupComponent,
  registerIconFromText
} from 'igniteui-webcomponents';

defineComponents(IgcButtonGroupComponent);

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
