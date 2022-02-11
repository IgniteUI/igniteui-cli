import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  IgcFinancialChartComponent,
  IgcFinancialChartModule,
  FinancialChartYAxisMode,
} from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';
import { StockIndexData } from './StockIndexData.js';

ModuleManager.register(IgcFinancialChartModule);

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
    <igc-financial-chart id="chart" width="100%" height="100%"
      is-toolbar-visible="false"
      chart-type="Candle"
      chart-title="S&P 500"
      title-alignment="Left"
      title-left-margin="25"
      title-top-margin="10"
      title-bottom-margin="10"
      subtitle="CME - CME Delayed Price, Currency in USD"
      subtitle-alignment="Left"
      subtitle-left-margin="25"
      subtitle-top-margin="5"
      subtitle-bottom-margin="10"
      y-axis-label-location="OutsideLeft"
      y-axis-title="Financial Prices"
      y-axis-title-left-margin="10"
      y-axis-title-right-margin="5"
      y-axis-label-left-margin="0"
      zoom-slider-type="None">
    </igc-financial-chart>
  `;
  }

  updated() {
    const chart = this.shadowRoot?.getElementById('chart') as IgcFinancialChartComponent;
    chart.dataSource = StockIndexData.getData();
    chart.yAxisMode = FinancialChartYAxisMode.Numeric;
  }
}
