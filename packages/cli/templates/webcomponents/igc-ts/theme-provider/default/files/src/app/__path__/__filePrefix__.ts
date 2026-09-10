import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcButtonComponent,
  IgcThemeProviderComponent,
} from 'igniteui-webcomponents';

defineComponents(
  IgcThemeProviderComponent,
  IgcButtonComponent,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    .row {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px;
    }
  `;

  render() {
    return html`
      <div class="row">
        <span>Global theme:</span>
        <igc-button variant="contained">Save</igc-button>
      </div>

      <igc-theme-provider theme="material" variant="dark">
        <div class="row">
          <span>Scoped: material dark</span>
          <igc-button variant="contained">Save</igc-button>
        </div>
      </igc-theme-provider>
    `;
  }
}
