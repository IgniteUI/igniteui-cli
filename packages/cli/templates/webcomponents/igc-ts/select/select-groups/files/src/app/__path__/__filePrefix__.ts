import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcSelectComponent,
  IgcSelectItemComponent,
  IgcSelectGroupComponent,
  IgcSelectHeaderComponent,
} from 'igniteui-webcomponents';

defineComponents(
  IgcSelectComponent,
  IgcSelectItemComponent,
  IgcSelectGroupComponent,
  IgcSelectHeaderComponent,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-select label="Assignee">
        <igc-select-header>Tasks</igc-select-header>
        <igc-select-group>
          <span slot="label">Pre development</span>
          <igc-select-item value="spec">Specification</igc-select-item>
        </igc-select-group>
        <igc-select-group>
          <span slot="label">Development</span>
          <igc-select-item value="impl">Implementation</igc-select-item>
          <igc-select-item value="testing">Testing</igc-select-item>
        </igc-select-group>
        <igc-select-group>
          <span slot="label">Post development</span>
          <igc-select-item value="samples">Samples</igc-select-item>
          <igc-select-item value="docs">Documentation</igc-select-item>
          <igc-select-item value="builds">Builds</igc-select-item>
        </igc-select-group>
      </igc-select>
    `;
  }
}
