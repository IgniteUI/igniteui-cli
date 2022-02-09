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

export default class IconButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
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

customElements.define('app-icon-button', IconButton);
