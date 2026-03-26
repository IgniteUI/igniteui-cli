import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import {
  IgcGridComponent
} from 'igniteui-webcomponents-grids';
import {
  NwindData,
} from './NwindData';

IgcGridComponent.register();

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

  @state()
  data = new NwindData();

  render() {
    return html`
    <link rel="stylesheet" href="./node_modules/igniteui-webcomponents-grids/grids/themes/light/material.css">
    <div class="container sample">
      <div class="container fill">
        <igc-grid .data=${this.data} primary-key="ProductID" class="ig-typography">
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
}
