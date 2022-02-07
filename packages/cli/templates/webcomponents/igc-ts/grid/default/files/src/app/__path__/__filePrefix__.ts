import {
  IgcDataGridModule,
  IgcGridColumnOptionsModule,
  IgcDataGridComponent,
  IgcColumnGroupDescription,
} from 'igniteui-webcomponents-grids';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
  IgcDataGridModule,
  IgcGridColumnOptionsModule,
);

export default class $(ClassName) extends HTMLElement {
  data: any[] = [{
    Country: 'USA',
    CountryFlag: 'https://static.infragistics.com/xplatform/images/flags/USA.png',
    Margin: 3,
    OrderDate: new Date(2021, 4, 3),
    OrderItems: 7,
    OrderValue: 500,
    ProductID: 1001,
    ProductName: 'Patriot Memory',
    ProductPrice: 2000,
    Status: 'Shipped',
  },
  {
    Country: 'Croatia',
    CountryFlag: 'https://static.infragistics.com/xplatform/images/flags/Croatia.png',
    Margin: 5,
    OrderDate: new Date(2021, 1, 10),
    OrderItems: 11,
    OrderValue: 760,
    ProductID: 1002,
    ProductName: 'Asus GPU',
    ProductPrice: 3000,
    Status: 'Packing',
  }];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.innerHTML = `
    <style>
      :host {
        height: 100%;
        margin: 0px;
        padding-right: 20px;
        width: calc(100% - 600px);
      }
    </style>
    <igc-data-grid
    id="grid"
    height="100%"
    width="100%"
    auto-generate-columns="false"
    is-column-options-enabled="true"
    >
        <igc-text-column field="ProductID" header-text="ID" width="*>95"></igc-text-column>
        <igc-text-column field="ProductName" header-text="Product" width="*>160"></igc-text-column>
        <igc-image-column field="CountryFlag" header-text="Country" width="*>120" contentOpacity="1"
        padding-top="5" padding-bottom="5"></igc-image-column>
        <igc-numeric-column field="OrderItems" header-text="Orders" width="*>105"></igc-numeric-column>
        <igc-numeric-column field="OrderValue" header-text="Order Value" width="*>140" positive-prefix="$" show-grouping-separator="true"></igc-numeric-column>
        <igc-date-time-column field="OrderDate" header-text="Order Date" width="*>135" dateTimeFormat="DateShort" ></igc-date-time-column>
        <igc-numeric-column field="Margin" header-text="Margin" width="*>115" positive-suffix="%"></igc-numeric-column>
        <igc-text-column field="Status" header-text="Status" width="*>100"></igc-text-column>
    </igc-data-grid>
  `;
  }

  connectedCallback() {
    const grid = document.getElementsByTagName('app-$(path)')[0].shadowRoot!.getElementById('grid') as IgcDataGridComponent;
    grid.dataSource = this.data;

    const grouping = new IgcColumnGroupDescription();
    grouping.field = 'Status';
    grouping.displayName = 'Status';
    grid.groupDescriptions.add(grouping);
  }
}

customElements.define('app-$(path)', $(ClassName));
