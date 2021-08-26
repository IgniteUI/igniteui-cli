import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class BarChartTemplate extends AngularTemplate {
  constructor() {
    super(__dirname);
    this.components = ["Bar Chart"];
    this.controlGroup = "Charts";
    this.listInComponentTemplates = true;
    this.id = "bar-chart";
    this.projectType = "ig-ts";
    this.name = "Bar Chart";
    this.description = "igDataChart bar series template";
    this.dependencies = ["igDataChart"];
  }
}
module.exports = new BarChartTemplate();
