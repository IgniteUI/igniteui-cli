/* eslint-disable import/extensions, max-classes-per-file, class-methods-use-this */
import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  IgcDataGridModule,
  IgcGridColumnOptionsModule,
  IgcDataGridComponent,
  IgcColumnGroupDescription,
  IgcColumnSummaryDescription,
} from 'igniteui-webcomponents-grids';
import {
  ModuleManager, IgcProvideCalculatorEventArgs, SummaryOperand, SummaryCalculator,
  DefaultSummaryResult, IDataSource, ISummaryResult,
} from 'igniteui-webcomponents-core';
import { DataGridSharedData } from './DataGridSharedData';

ModuleManager.register(
  IgcDataGridModule,
  IgcGridColumnOptionsModule,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  data: any[] = DataGridSharedData.getEmployees();

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
    <div class="container sample">
      <igc-data-grid
        id="grid"
        height="calc(100% - 3rem)"
        width="100%"
        summary-scope="Root"
        group-summary-display-mode="RowTop"
        auto-generate-columns="false"
        is-group-collapsable="true"
        group-header-display-mode="combined"
        is-column-options-enabled="true"
        default-column-min-width="100"
      >
      <igc-numeric-column field="ProductID" header-text="ID" horizontal-alignment="center" ></igc-numeric-column>
      <igc-text-column field="ProductName" header-text="Product" width="*>160"></igc-text-column>
      <igc-numeric-column positive-prefix="$" field="BundlePrice" show-grouping-separator="true" header-text="Price" ></igc-numeric-column>
      <igc-numeric-column field="OrderItems" header-text="Order Items" width="*>135"></igc-numeric-column>
      <igc-numeric-column field="OrderValue" show-grouping-separator="true" header-text="Order Totals" positive-prefix="$" width="*>195"></igc-numeric-column>
      <igc-date-time-column field="OrderDate" header-text="Order Date" horizontal-alignment="right" width="*>180"></igc-date-time-column>
      <igc-numeric-column field="Profit" show-grouping-separator="true" header-text="Profit" positive-prefix="$" width="*>165"></igc-numeric-column>
      <igc-text-column field="Countries" header-text="Country" width="*>115"></igc-text-column>
      </igc-data-grid>
    </div>
  `;
  }

  firstUpdated() {
    const grid = this.shadowRoot?.getElementById('grid') as IgcDataGridComponent;

    // Custom Calculator - calculates the count for all USA.
    class CustomDomestic extends SummaryCalculator {
      get displayName(): string {
        return 'USA';
      }

      public usCountries: number = 0;

      public beginCalculation(a: IDataSource, b: string): void {
        super.beginCalculation(a, b);
        this.usCountries = 0;
      }

      public endCalculation(): ISummaryResult {
        return new DefaultSummaryResult(this.propertyName, SummaryOperand.Custom, this.usCountries);
      }

      public aggregate(a: any): void {
        if (a.Countries === 'USA') {
          this.usCountries += 1;
        }
      }
    }

    const onProvideCalculator = (s: IgcColumnSummaryDescription,
      e: IgcProvideCalculatorEventArgs) => {
      e.calculator = new CustomDomestic();
    };

    const onLoad = () => {
      const productGroup = new IgcColumnGroupDescription();
      productGroup.field = 'ProductName';
      productGroup.displayName = 'ProductName';
      grid.groupDescriptions.add(productGroup);

      const productCount = new IgcColumnSummaryDescription();
      productCount.field = 'ProductName';
      productCount.operand = SummaryOperand.Count;
      grid.summaryDescriptions.add(productCount);

      const priceMin = new IgcColumnSummaryDescription();
      priceMin.field = 'BundlePrice';
      priceMin.operand = SummaryOperand.Min;
      priceMin.formatOverride = new Intl.NumberFormat('en-EN', {
        style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0,
      });
      grid.summaryDescriptions.add(priceMin);

      const priceMax = new IgcColumnSummaryDescription();
      priceMax.field = 'BundlePrice';
      priceMax.operand = SummaryOperand.Max;
      priceMax.formatOverride = new Intl.NumberFormat('en-EN', {
        style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0,
      });
      grid.summaryDescriptions.add(priceMax);

      const orderSum = new IgcColumnSummaryDescription();
      orderSum.field = 'OrderItems';
      orderSum.operand = SummaryOperand.Sum;
      grid.summaryDescriptions.add(orderSum);

      const orderValueSum = new IgcColumnSummaryDescription();
      orderValueSum.field = 'OrderValue';
      orderValueSum.operand = SummaryOperand.Sum;
      orderValueSum.formatOverride = new Intl.NumberFormat('en-EN', {
        style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0,
      });
      grid.summaryDescriptions.add(orderValueSum);

      const orderValueAvg = new IgcColumnSummaryDescription();
      orderValueAvg.field = 'OrderValue';
      orderValueAvg.operand = SummaryOperand.Average;
      orderValueAvg.formatOverride = new Intl.NumberFormat('en-EN', {
        style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0,
      });
      grid.summaryDescriptions.add(orderValueAvg);

      const orderDateMin = new IgcColumnSummaryDescription();
      orderDateMin.field = 'OrderDate';
      orderDateMin.operand = SummaryOperand.Min;
      orderDateMin.calculatorDisplayName = 'First';
      orderDateMin.formatOverride = new Intl.DateTimeFormat('en-EN');
      grid.summaryDescriptions.add(orderDateMin);

      const orderDateMax = new IgcColumnSummaryDescription();
      orderDateMax.field = 'OrderDate';
      orderDateMax.operand = SummaryOperand.Max;
      orderDateMax.calculatorDisplayName = 'Last';
      orderDateMax.formatOverride = new Intl.DateTimeFormat('en-EN');
      grid.summaryDescriptions.add(orderDateMax);

      const sum1 = new IgcColumnSummaryDescription();
      sum1.field = 'Profit';
      sum1.operand = SummaryOperand.Sum;
      sum1.formatOverride = new Intl.NumberFormat('en-EN', {
        style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0,
      });
      grid.summaryDescriptions.add(sum1);

      const avg2 = new IgcColumnSummaryDescription();
      avg2.field = 'Profit';
      avg2.operand = SummaryOperand.Average;
      avg2.formatOverride = new Intl.NumberFormat('en-EN', {
        style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0,
      });
      grid.summaryDescriptions.add(avg2);

      const countries = new IgcColumnSummaryDescription();
      countries.field = 'Countries';
      countries.operand = SummaryOperand.Custom;
      countries.provideCalculator = onProvideCalculator;
      grid.summaryDescriptions.add(countries);
    };

    grid.dataSource = DataGridSharedData.getSales();

    onLoad();
  }
}
