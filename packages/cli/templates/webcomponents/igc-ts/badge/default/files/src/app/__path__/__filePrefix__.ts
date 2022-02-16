import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcBadgeComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcBadgeComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    #labels {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      border-style: groove;
    }
    igc-badge {
      padding: 3px;
    }
    label {
      padding: 5px;
    }
  `;

  render() {
    return html`
      <div id='labels'>
        <label>Labels</label>
        <igc-badge
          outlined=true>
            Awaiting test
        </igc-badge>
        <igc-badge
          outlined=true
          variant='danger'>
            Critical issue
        </igc-badge>
        <igc-badge
            outlined=true
            variant='success'>
              Verified
        </igc-badge>
      </div>
    `;
  }
}
