import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcTreeComponent,
  IgcTreeItemComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcTreeComponent, IgcTreeItemComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-tree>
        <igc-tree-item label="North America">
          <igc-tree-item label="United States"></igc-tree-item>
          <igc-tree-item label="Canada"></igc-tree-item>
          <igc-tree-item label="Mexico"></igc-tree-item>
        </igc-tree-item>
        <igc-tree-item label="South America">
          <igc-tree-item label="Brazil"></igc-tree-item>
          <igc-tree-item label="Uruguay"></igc-tree-item>
        </igc-tree-item>
        <igc-tree-item label="Europe">
          <igc-tree-item label="United Kingdom"></igc-tree-item>
          <igc-tree-item label="Germany"></igc-tree-item>
          <igc-tree-item label="Bulgaria"></igc-tree-item>
        </igc-tree-item>
      </igc-tree>
    `;
  }
}
