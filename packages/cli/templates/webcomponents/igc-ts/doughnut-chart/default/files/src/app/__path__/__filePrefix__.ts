import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  IgcDoughnutChartModule,
  IgcItemLegendComponent,
  IgcItemLegendModule,
  IgcRingSeriesComponent,
  IgcRingSeriesModule,
} from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
  IgcDoughnutChartModule,
  IgcItemLegendModule,
  IgcRingSeriesModule,
);

const data = [
  { MarketShare: 30, Company: 'Google' },
  { MarketShare: 15, Company: 'Microsoft' },
  { MarketShare: 30, Company: 'Apple' },
  { MarketShare: 15, Company: 'Samsung' },
  { MarketShare: 10, Company: 'Other' }
];

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
    <igc-item-legend id="legend" orientation="Horizontal"></igc-item-legend>
    <igc-doughnut-chart width="400px" height="400px">
      <igc-ring-series id="series"
        name="ring1"
        value-member-path="MarketShare"
        label-member-path="Company">
      </igc-ring-series>
    </igc-doughnut-chart>
  `;
  }

  firstUpdated() {
    const series = this.shadowRoot?.getElementById('series') as IgcRingSeriesComponent;
    series.dataSource = data;
    series.legend = this.shadowRoot?.getElementById('legend') as IgcItemLegendComponent;
  }
}
