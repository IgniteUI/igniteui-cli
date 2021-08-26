import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class LineChartTemplate extends AngularTemplate {
  constructor() {
    super(__dirname);
    this.components = ["Line Chart"];
    this.controlGroup = "Charts";
    this.listInComponentTemplates = true;
    this.id = "line-chart";
    this.projectType = "ig-ts";
    this.name = "Line Chart";
    this.description = "igDataChart line series template";
    this.dependencies = ["igDataChart"];
  }
}
module.exports = new LineChartTemplate();
