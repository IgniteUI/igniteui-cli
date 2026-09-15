import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcButtonComponent,
  IgcTooltipComponent,
} from 'igniteui-webcomponents';

defineComponents(
  IgcButtonComponent,
  IgcTooltipComponent,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-button id="tooltip-target">Hover or focus me</igc-button>
      <igc-tooltip anchor="tooltip-target" message="This action can't be undone."></igc-tooltip>
    `;
  }
}
