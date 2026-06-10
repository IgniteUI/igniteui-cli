import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IgcGridComponent, type IgcGroupingExpression, SortingDirection } from 'igniteui-webcomponents-grids';

import gridThemeLightMaterial from 'igniteui-webcomponents-grids/grids/themes/light/material.css?inline'

IgcGridComponent.register();

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .page {
      width: 100%;
      margin-top: 40px;
      padding: 0 48px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .title {
      color: rgb(0, 153, 255);
      text-align: center;
      font-size: 2.5rem;
      font-weight: 600;
      margin-top: 0;
      margin-bottom: 0;
    }

    .subtitle {
      text-align: center;
      margin-bottom: 32px;
      margin-top: 16px;
      font-size: 14px;
    }

    .subtitle a {
      color: rgb(0, 153, 255);
    }

    .grid-wrapper {
      width: 100%;
      max-width: 1200px;
    }
  `;

  @state()
  data: any[] = [{
    country: 'USA',
    countryFlag: 'https://static.infragistics.com/xplatform/images/flags/USA.png',
    margin: 0.03,
    orderDate: new Date(2021, 4, 3),
    orderItems: 7,
    orderValue: 500,
    productID: 1001,
    productName: 'Patriot Memory',
    productPrice: 2000,
    status: 'Shipped',
  },
  {
    country: 'Croatia',
    countryFlag: 'https://static.infragistics.com/xplatform/images/flags/Croatia.png',
    margin: 0.05,
    orderDate: new Date(2021, 1, 10),
    orderItems: 11,
    orderValue: 760,
    productID: 1002,
    productName: 'Asus GPU',
    productPrice: 3000,
    status: 'Packing',
  }];

  @state()
  groupingExpressions: IgcGroupingExpression[] = [
    { fieldName: 'status', dir: SortingDirection.Desc },
  ];

  private flagTemplate = ({ cell }: any) => html`
    <img src="${cell.value}" style="width:32px;height:20px;object-fit:contain;vertical-align:middle;" />
  `;

  render() {
    return html`
      <style>${gridThemeLightMaterial}</style>
      <div class="page">
        <p class="title">$(name)</p>
        <p class="subtitle">
          IgcGrid component with auto generated columns and local data.<br />
          You can read more about configuring the IgcGrid component in the
          <a href="https://www.infragistics.com/products/ignite-ui-web-components/web-components/components/grids/data-grid.html" target="_blank">
            official documentation
          </a>.
        </p>
        <div class="grid-wrapper">
          <igc-grid
            class="ig-typography"
            .data=${this.data}
            .groupingExpressions=${this.groupingExpressions}
            filter-mode="excelStyleFilter"
            height="600px"
            width="100%"
          >
            <igc-column field="productID" header="ID" width="90px"></igc-column>
            <igc-column field="productName" header="Product" width="160px"></igc-column>
            <igc-column field="countryFlag" header="Country" .bodyTemplate=${this.flagTemplate} width="100px"></igc-column>
            <igc-column field="orderItems" header="Orders" data-type="number" width="100px"></igc-column>
            <igc-column field="orderValue" header="Order Value" data-type="currency" width="140px"></igc-column>
            <igc-column field="orderDate" header="Order Date" data-type="date"></igc-column>
            <igc-column field="margin" header="Margin" data-type="percent" width="100px"></igc-column>
            <igc-column field="status" header="Status" width="100px" groupable></igc-column>
          </igc-grid>
        </div>
      </div>
    `;
  }
}
