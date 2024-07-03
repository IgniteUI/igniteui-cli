import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcAvatarComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcAvatarComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-avatar
        size="large"
        shape="circle"
        src="./src/assets/avatar1.jpg"
        alt="My avatar"
      >
      </igc-avatar>
    `;
  }
}
