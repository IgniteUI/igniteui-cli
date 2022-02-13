import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  IgcRadialGaugeModule,
} from 'igniteui-webcomponents-gauges';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
  IgcRadialGaugeModule,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    :host{
      height: 50%;
      width: 50%;
    }
  `;

  render() {
    return html`
    <igc-radial-gauge
      height="100%"
      width="50%"
      minimum-value="0" value="50"
      maximum-value="80" interval="10"
      range-brushes ="#a4bd29, #F86232"
      range-outlines="#a4bd29, #F86232"  >
      <igc-radial-gauge-range name="range1"
          start-value="10" end-value="25"
          inner-start-extent="0.50" inner-end-extent="0.50"
          outer-start-extent="0.57" outer-end-extent="0.57" >
      </igc-radial-gauge-range>
      <igc-radial-gauge-range name="range2"
          start-value="25" end-value="40"
          inner-start-extent="0.50" inner-end-extent="0.50"
          outer-start-extent="0.57" outer-end-extent="0.57" >
      </igc-radial-gauge-range>
    </igc-radial-gauge>
  `;
  }
}
