import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  IgcItemLegendComponent,
  IgcPieChartComponent,
} from 'igniteui-webcomponents-charts';
import { Data } from './sampleData.js';


@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    :host, igc-pie-chart {
      height: 100%;
    }
    .container {
      height: 60%;
    }
  `;

  render() {
    return html`
    <div class="legend-title">
      Global Electricity Demand by Energy Use
    </div>
    <div class="legend">
      <igc-item-legend
        orientation="Horizontal"
        name="legend"
        id ="legend">
      </igc-item-legend>
    </div>
    <div class="container">
      <igc-pie-chart
        value-member-path="marketShare"
        label-member-path="category"
        labels-position="BestFit"
        radius-factor="0.7"
        name="chart"
        id ="chart">
      </igc-pie-chart>
    </div>
  `;
  }

  firstUpdated() {
    const chart = this.shadowRoot?.getElementById('chart') as IgcPieChartComponent;
    chart.dataSource = new Data();
    chart.legend = this.shadowRoot?.getElementById('legend') as IgcItemLegendComponent;
  }
}
