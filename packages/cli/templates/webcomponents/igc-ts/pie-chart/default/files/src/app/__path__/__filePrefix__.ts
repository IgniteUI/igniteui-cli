import { Data } from './sampleData';
import {
  IgcItemLegendComponent,
  IgcItemLegendModule,
  IgcPieChartComponent,
  IgcPieChartModule,
} from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
  IgcItemLegendModule,
  IgcPieChartModule,
);

export default class $(ClassName) extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.innerHTML = `
    <style>
      :host, igc-pie-chart {
        height: 100%;
      }
      .container {
        height: 60%;
      }
    </style>
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

  connectedCallback() {
    const chart = document.getElementsByTagName('app-$(path)')[0].shadowRoot!.getElementById('chart') as IgcPieChartComponent;
    chart.dataSource = new Data();
    chart.legend = document.getElementsByTagName('app-$(path)')[0].shadowRoot!.getElementById('legend') as IgcItemLegendComponent;
  }
}

customElements.define('app-$(path)', $(ClassName));
