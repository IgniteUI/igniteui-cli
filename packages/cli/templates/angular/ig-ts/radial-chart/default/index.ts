import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class RadialChartTemplate extends AngularTemplate {
  constructor() {
    super(__dirname);
    this.components = ["Radial Chart"];
    this.controlGroup = "Charts";
    this.listInComponentTemplates = true;
    this.id = "radial-chart";
    this.projectType = "ig-ts";
    this.name = "Radial Chart";
    this.description = "igDataChart radial series template for Angular";
    this.dependencies = ["igDataChart"];
  }
}
module.exports = new RadialChartTemplate();
