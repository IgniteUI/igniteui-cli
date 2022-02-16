import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  IgcLinearGaugeModule,
} from 'igniteui-webcomponents-gauges';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
  IgcLinearGaugeModule,
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
      <igc-linear-gauge id="gauge" width="50%" height="80px"
        minimum-value="0" value="50"
        maximum-value="100" interval="10"
        rangeBrushes="#a4bd29, #F86232"
        rangeOutlines="#a4bd29, #F86232">

        <igc-linear-graph-range name="range1"
          start-value="0" end-value="50"
          inner-start-extent="0.075" inner-end-extent="0.075"
          outer-start-extent="0.25" outer-end-extent="0.4" >
        </igc-linear-graph-range>

        <igc-linear-graph-range name="range2"
          start-value="50" end-value="100"
          inner-start-extent="0.075" inner-end-extent="0.075"
          outer-start-extent="0.4" outer-end-extent="0.55" >
        </igc-linear-graph-range>
      </igc-linear-gauge>
    `;
  }
}
