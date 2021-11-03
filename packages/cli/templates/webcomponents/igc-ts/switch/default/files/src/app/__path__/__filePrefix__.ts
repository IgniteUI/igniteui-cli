import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'igniteui-webcomponents';
import 'igniteui-webcomponents/src/styles/themes/material.css';

@customElement('lit-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-switch
        label-position="before"
        checked="true"
      >
        Custom Label
      </igc-switch>
    `;
  }
}
