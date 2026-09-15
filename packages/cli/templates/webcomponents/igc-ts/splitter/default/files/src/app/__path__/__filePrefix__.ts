import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcSplitterComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcSplitterComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  // host must have an explicit width - it's a flex item with no intrinsic size
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
  `;

  render() {
    return html`
      <igc-splitter
        style="height: 240px; border: 1px solid var(--ig-gray-300, #ccc);"
        start-size="30%"
      >
        <div slot="start" style="padding: 16px;">Navigation</div>
        <div slot="end" style="padding: 16px;">Content</div>
      </igc-splitter>
    `;
  }
}
