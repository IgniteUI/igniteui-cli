import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcComboComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcComboComponent);

interface Country {
  name: string;
  continent: string;
}

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  private countries: Country[] = [
    { name: 'Bulgaria', continent: 'Europe' },
    { name: 'France', continent: 'Europe' },
    { name: 'Germany', continent: 'Europe' },
    { name: 'Japan', continent: 'Asia' },
    { name: 'South Korea', continent: 'Asia' },
    { name: 'Canada', continent: 'North America' },
    { name: 'United States', continent: 'North America' },
  ];

  render() {
    return html`
      <igc-combo
        label="Country"
        placeholder="Select countries"
        value-key="name"
        display-key="name"
        group-key="continent"
        .data=${this.countries}
      ></igc-combo>
    `;
  }
}
