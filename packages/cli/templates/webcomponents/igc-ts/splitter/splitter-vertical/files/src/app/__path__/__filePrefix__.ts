import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcSplitterComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcSplitterComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    igc-splitter {
      height: 320px;
      border: 1px solid var(--ig-gray-300, #ccc);
    }
  `;

  render() {
    return html`
      <igc-splitter orientation="vertical" start-size="40%">
        <div slot="start" style="padding: 16px;">Editor</div>
        <div slot="end" style="padding: 16px;">Console output</div>
      </igc-splitter>
    `;
  }
}
