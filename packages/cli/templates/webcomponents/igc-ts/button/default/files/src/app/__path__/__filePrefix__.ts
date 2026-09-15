import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcButtonComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    :host {
      --ig-size: var(--ig-size-large);
    }
  `;

  render() {
    return html`
      <igc-button>
        Large button
      </igc-button>
    `;
  }
}
