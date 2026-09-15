import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcComboComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcComboComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  private countries = [
    'Bulgaria',
    'France',
    'Germany',
    'Italy',
    'Spain',
    'United Kingdom',
    'United States',
  ];

  render() {
    return html`
      <igc-combo
        label="Country"
        placeholder="Select countries"
        .data=${this.countries}
      ></igc-combo>
    `;
  }
}
