import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class FunnelChartTemplate extends AngularTemplate {
  constructor() {
    super(__dirname);
    this.components = ["Funnel Chart"];
    this.controlGroup = "Charts";
    this.listInComponentTemplates = true;
    this.id = "funnel-chart";
    this.projectType = "ig-ts";
    this.name = "Funnel Chart";
    this.description = "igFunnelChart template";
    this.dependencies = ["igFunnelChart"];
  }
}
module.exports = new FunnelChartTemplate();
