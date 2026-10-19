import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IgcCategoryChartComponent, IgcCategoryChartModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(IgcCategoryChartModule);

const data = [
  { CountryName: 'China', Pop1995: 1216, Pop2005: 1297, Pop2015: 1361, Pop2025: 1394 },
  { CountryName: 'India', Pop1995: 920, Pop2005: 1090, Pop2015: 1251, Pop2025: 1396 },
  { CountryName: 'United States', Pop1995: 266, Pop2005: 295, Pop2015: 322, Pop2025: 351 },
  { CountryName: 'Indonesia', Pop1995: 197, Pop2005: 229, Pop2015: 256, Pop2025: 277 },
  { CountryName: 'Brazil', Pop1995: 161, Pop2005: 186, Pop2015: 204, Pop2025: 218 }
];

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
  `;

  render() {
    return html`
    <igc-category-chart id="chart" width="100%" height="500px"
      chart-title="Population per Country (millions)">
    </igc-category-chart>
  `;
  }

  firstUpdated() {
    const chart = this.shadowRoot?.getElementById('chart') as IgcCategoryChartComponent;
    chart.dataSource = data;
  }
}
