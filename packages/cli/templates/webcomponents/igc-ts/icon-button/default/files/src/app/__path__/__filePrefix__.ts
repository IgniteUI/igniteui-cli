import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcIconButtonComponent,
} from 'igniteui-webcomponents';
import {
  registerIcon,
} from 'igniteui-webcomponents/components/icon/icon.registry';

defineComponents(IgcIconButtonComponent);

registerIcon(
  'build',
  'https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_build_24px.svg',
  'material',
);

@customElement('app-$(path)')
export default class IconButton extends LitElement {
  render() {
    return html`
      <label>Contact Infragistics support: </label>
      <igc-icon-button
        name="build"
        collection="material"
        href="https://www.infragistics.com/support"
        target="_blank"
        variant="flat"
        size="large"
      >
      </igc-icon-button>
    `;
  }
}
