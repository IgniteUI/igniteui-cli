import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcTileComponent,
  IgcTileManagerComponent,
} from 'igniteui-webcomponents';

defineComponents(
  IgcTileManagerComponent,
  IgcTileComponent,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    igc-tile-manager {
      height: 360px;
    }
  `;

  render() {
    return html`
      <igc-tile-manager column-count="2">
        <igc-tile>
          <span slot="title">Revenue</span>
          <p>$48,320 this month</p>
        </igc-tile>
        <igc-tile>
          <span slot="title">Active Users</span>
          <p>1,204 online now</p>
        </igc-tile>
        <igc-tile>
          <span slot="title">Open Tickets</span>
          <p>12 awaiting response</p>
        </igc-tile>
      </igc-tile-manager>
    `;
  }
}
