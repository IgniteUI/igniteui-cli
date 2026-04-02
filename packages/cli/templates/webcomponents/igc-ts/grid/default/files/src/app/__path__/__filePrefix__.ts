import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IgcGridComponent, IgcGroupingExpression, SortingDirection } from 'igniteui-webcomponents-grids';

import gridThemeLightMaterial from 'igniteui-webcomponents-grids/grids/themes/light/material.css?inline'

IgcGridComponent.register();

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      margin: 0px;
      padding-right: 20px;
      width: calc(100% - 600px);
    }
    igc-grid img {
      object-fit: contain;
      height: 100%;
      width: 100%;
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

  render() {
    return html`
      <style>${gridThemeLightMaterial}</style>
      <igc-grid
        class="ig-typography"
        .data=${this.data}
        .groupingExpressions=${this.groupingExpressions}
        filter-mode="excelStyleFilter"
      >
        <igc-column field="productID" header="ID" width="90px"></igc-column>
        <igc-column field="productName" header="Product" width="160px"></igc-column>
        <igc-column field="countryFlag" header="Country" data-type="image" width="100px"></igc-column>
        <igc-column field="orderItems" header="Orders" data-type="number" width="100px"></igc-column>
        <igc-column field="orderValue" header="Order Value" data-type="currency" width="140px"></igc-column>
        <igc-column field="orderDate" header="Order Date" data-type="date"></igc-column>
        <igc-column field="margin" header="Margin" data-type="percent" width="100px"></igc-column>
        <igc-column field="status" header="Status" width="100px" groupable></igc-column>
      </igc-grid>
    `;
  }
}
