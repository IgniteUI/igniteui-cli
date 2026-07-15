import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IgcGridComponent } from 'igniteui-webcomponents-grids';

import gridThemeLightMaterial from 'igniteui-webcomponents-grids/grids/themes/light/material.css?inline'

import { employeesData, type Employee } from './data.js';

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
  data: Employee[] = employeesData;

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
            height="600px"
            width="100%"
          >
            <igc-column field="EmployeeID" header="Employee ID" data-type="string"></igc-column>
            <igc-column field="FirstName" header="First Name" data-type="string"></igc-column>
            <igc-column field="LastName" header="Last Name" data-type="string"></igc-column>
            <igc-column field="Country" header="Country" data-type="string"></igc-column>
            <igc-column field="Age" header="Age" data-type="number" width="80px"></igc-column>
            <igc-column field="RegistererDate" header="Registered Date" data-type="date"></igc-column>
            <igc-column field="IsActive" header="Active" data-type="boolean" width="90px"></igc-column>
          </igc-grid>
        </div>
      </div>
    `;
  }
}
