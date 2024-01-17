import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcTextareaComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcTextareaComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
      return html`
        <igc-textarea
          label="Leave your comment">
        </igc-textarea>
      `;
  }
}
