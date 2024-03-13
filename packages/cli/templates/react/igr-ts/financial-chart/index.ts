import { BaseComponent } from "@igniteui/cli-core";

class IgrTsFinancialChartComponent extends BaseComponent {
  /**
   *
   */
  constructor() {
    super(__dirname);
    this.name  = "Financial Chart";
    this.group = "Charts";
    this.description = `charting component that makes it easy to visualize financial data by
      using a simple and intuitive API.`;
  }
}
module.exports = new IgrTsFinancialChartComponent();
