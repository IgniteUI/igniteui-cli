import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcRatingComponent
} from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
    <igc-rating></igc-rating>
    `;
  }
}
