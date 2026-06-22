import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IgcTreeGridComponent } from 'igniteui-webcomponents-grids';
import { EMPLOYEE_DATA, type Employee } from './data.js';

import gridTheme from 'igniteui-webcomponents-grids/grids/themes/light/material.css?inline';

IgcTreeGridComponent.register();

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
  data: Employee[] = EMPLOYEE_DATA;

  render() {
    return html`
      <style>${gridTheme}</style>
      <div class="page">
        <p class="title">$(name)</p>
        <p class="subtitle">
          IgcTreeGrid component displaying hierarchical data using a child collection.<br />
          You can read more about configuring the IgcTreeGrid component in the
          <a href="https://www.infragistics.com/products/ignite-ui-web-components/web-components/components/grids/tree-grid/overview.html" target="_blank">
            official documentation
          </a>.
        </p>
        <div class="grid-wrapper">
          <igc-tree-grid
            class="ig-typography"
            .data=${this.data}
            primary-key="ID"
            child-data-key="Employees"
            height="650px"
            width="100%"
          >
            <igc-column field="Name" data-type="string"></igc-column>
            <igc-column field="Location" data-type="string"></igc-column>
            <igc-column field="HireDate" header="Hire Date" data-type="date"></igc-column>
            <igc-column field="Age" data-type="number"></igc-column>
          </igc-tree-grid>
        </div>
      </div>
    `;
  }
}
