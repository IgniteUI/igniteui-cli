import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrTsCategoryChartTemplate extends IgniteUIForReactTemplate {
  constructor() {
    super(__dirname);
    this.components = ["Category Chart"];
    this.controlGroup = "Charts";
    this.listInComponentTemplates = true;
    this.id = "category-chart";
    this.projectType = "igr-ts";
    this.name = "Category Chart";
    this.description = `makes visualizing category data easy. Simplifies the complexities
              of the data visualization domain into manageable API`;
    // TODO: read version from igniteui-react-core in package.json
    this.packages = ["igniteui-react-charts@18.3.0"];
  }
}
module.exports = new IgrTsCategoryChartTemplate();
