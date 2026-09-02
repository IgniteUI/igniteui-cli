import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcToggleButtonComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcToggleButtonComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    .settings {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 360px;
    }
    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .title {
      font-weight: 600;
    }
    .subtitle {
      font-size: 13px;
      opacity: 0.7;
    }
  `;

  render() {
    return html`
      <div class="settings">
        <div class="row">
          <div>
            <div class="title">Email notifications</div>
            <div class="subtitle">Get a daily summary sent to your inbox</div>
          </div>
          <igc-toggle-button value="email" selected>On</igc-toggle-button>
        </div>
        <div class="row">
          <div>
            <div class="title">SMS alerts</div>
            <div class="subtitle">Text messages for time-sensitive updates</div>
          </div>
          <igc-toggle-button value="sms">Off</igc-toggle-button>
        </div>
        <div class="row">
          <div>
            <div class="title">Push notifications</div>
            <div class="subtitle">Not available on this device</div>
          </div>
          <igc-toggle-button value="push" disabled>Off</igc-toggle-button>
        </div>
      </div>
    `;
  }
}
