import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcButtonComponent,
  IgcDropdownComponent,
} from 'igniteui-webcomponents';

defineComponents(
  IgcButtonComponent,
  IgcDropdownComponent,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-dropdown>
        <igc-button slot="target">Countries</igc-button>
        <igc-dropdown-group>
          <span slot="label">Europe</span>
          <igc-dropdown-item>
            Germany
            <span slot="suffix">DE</span>
          </igc-dropdown-item>
          <igc-dropdown-item>
            France
            <span slot="suffix">FR</span>
          </igc-dropdown-item>
          <igc-dropdown-item>
            Spain
            <span slot="suffix">ES</span>
          </igc-dropdown-item>
        </igc-dropdown-group>

        <igc-dropdown-group>
          <span slot="label">North America</span>
          <igc-dropdown-item>
            USA
            <span slot="suffix">US</span>
          </igc-dropdown-item>
          <igc-dropdown-item disabled>
            Canada
            <span slot="suffix">CA</span>
          </igc-dropdown-item>
          <igc-dropdown-item>
            Mexico
            <span slot="suffix">MX</span>
          </igc-dropdown-item>
        </igc-dropdown-group>
      </igc-dropdown>
    `;
  }
}
