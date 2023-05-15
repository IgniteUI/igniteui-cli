import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'igniteui-webcomponents-grids/grids/combined';
import {
  IgcGridComponent,
  IgcColumnComponent,
} from 'igniteui-webcomponents-grids/grids';
import {
  ComponentRenderer,
  WebGridDescriptionModule,
} from 'igniteui-webcomponents-core';
import {
  NwindData,
} from './NwindData';

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {

  static styles = css`
    :host {
      height: 80%;
      margin: 0px;
      padding-right: 20px;
      width: calc(100% - 600px);
  }
  `;

  render() {
    return html`
    <link rel="stylesheet" href="./node_modules/igniteui-webcomponents-grids/grids/themes/light/bootstrap.css">
    <div class="container sample">
      <div class="container fill">
        <igc-grid auto-generate="false" name="grid" id="grid" primary-key="ProductID">
          <igc-column name="ProductID" id="ProductID" field="ProductID"></igc-column>
          <igc-column name="ProductName" id="ProductName" field="ProductName" header="Product Name" has-summary="true"></igc-column>
          <igc-column name="UnitPrice" id="UnitPrice" field="UnitPrice" header="Unit Price" has-summary="true"></igc-column>
          <igc-column name="UnitsInStock" id="UnitsInStock" field="UnitsInStock" header="Units In Stock" has-summary="true" data-type="number"></igc-column>
          <igc-column name="Discontinued" id="Discontinued" field="Discontinued" header="Discontinued"></igc-column>
          <igc-column name="OrderDate" id="OrderDate" field="OrderDate" header="Order Date" has-summary="true" data-type="date"></igc-column>
        </igc-grid>
    </div>
  </div>
  `;
  }

  firstUpdated() {
    const grid = this.shadowRoot?.getElementById('grid') as IgcGridComponent;
    const nwindData = NwindData;

    const productID = this.shadowRoot?.getElementById('ProductID') as IgcColumnComponent;
    const productName = this.shadowRoot?.getElementById('ProductName') as IgcColumnComponent;
    const unitPrice = this.shadowRoot?.getElementById('UnitPrice') as IgcColumnComponent;
    const unitsInStock = this.shadowRoot?.getElementById('UnitsInStock') as IgcColumnComponent;
    const discontinued = this.shadowRoot?.getElementById('Discontinued') as IgcColumnComponent;
    const orderDate = this.shadowRoot?.getElementById('OrderDate') as IgcColumnComponent;

    grid.data = new nwindData();

    const _componentRenderer = new ComponentRenderer();
    const renderer = (_componentRenderer: ComponentRenderer) => {
        const context = _componentRenderer.context;
        WebGridDescriptionModule.register(context);
        return _componentRenderer;
    }
    renderer(_componentRenderer);
  }
}
