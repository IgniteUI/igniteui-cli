import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import {
  IgcPivotGridComponent,
  type IgcPivotConfiguration
} from 'igniteui-webcomponents-grids';
import { DATA } from './data.js';

import gridTheme from 'igniteui-webcomponents-grids/grids/themes/light/material.css?inline';

IgcPivotGridComponent.register();

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
  data: any[] = DATA;

  pivotConfig: IgcPivotConfiguration = {
    columns: [
      {
        memberName: 'Product',
        memberFunction: (data: any) => data.Product.Name,
        enabled: true
      }
    ],
    rows: [
      {
        memberName: 'Seller',
        memberFunction: (data: any) => data.Seller.Name,
        enabled: true
      }
    ],
    values: [
      {
        member: 'NumberOfUnits',
        aggregate: {
          aggregatorName: 'SUM' as const,
          key: 'sum',
          label: 'Sum'
        },
        enabled: true
      }
    ],
    filters: null
  };

  render() {
    return html`
      <style>${gridTheme}</style>
      <div class="page">
        <p class="title">$(name)</p>
        <p class="subtitle">
          Basic IgcPivotGrid component.<br />
          You can read more about configuring the IgcPivotGrid component in the
          <a href="https://www.infragistics.com/products/ignite-ui-web-components/web-components/components/grids/pivot-grid/overview.html" target="_blank">
            official documentation
          </a>.
        </p>
        <div class="grid-wrapper">
          <igc-pivot-grid
            class="ig-typography"
            .data=${this.data}
            .pivotConfiguration=${this.pivotConfig}
            height="650px"
            width="100%"
          ></igc-pivot-grid>
        </div>
      </div>
    `;
  }
}
