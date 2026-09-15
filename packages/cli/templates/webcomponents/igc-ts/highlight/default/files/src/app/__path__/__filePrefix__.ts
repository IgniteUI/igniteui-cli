import { html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import {
  defineComponents,
  IgcHighlightComponent,
  IgcInputComponent,
} from 'igniteui-webcomponents';

defineComponents(
  IgcHighlightComponent,
  IgcInputComponent,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  @query(IgcHighlightComponent.tagName)
  private highlight!: IgcHighlightComponent;

  private handleSearch(event: CustomEvent<string>) {
    this.highlight.searchText = event.detail;
  }

  render() {
    return html`
      <igc-input label="Search" @igcInput=${this.handleSearch}></igc-input>
      <igc-highlight>
        <p>
          Ignite UI for Web Components ships native, framework-agnostic UI
          components that work with any framework.
        </p>
      </igc-highlight>
    `;
  }
}
