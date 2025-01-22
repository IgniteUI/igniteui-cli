import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxGeographicMapTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Geographic Map"];
		this.controlGroup = "Maps";
		this.listInComponentTemplates = true;
		this.id = "geographic-map";
		this.projectType = "igx-ts";
		this.name = "Geographic Map";
		this.description = "Basic IgxGeographicMap.";
		this.dependencies = [
			{
				import: ["IgxGeographicMapModule"],
				from: "igniteui-angular-maps"
			},
			{
				import: ["IgxDataChartInteractivityModule"],
				from: "igniteui-angular-charts"
			}
		];
		this.packages = ["igniteui-angular-core@~19.0.0", "igniteui-angular-charts@~19.0.0", "igniteui-angular-maps@~19.0.0"];
	}
}
module.exports = new IgxGeographicMapTemplate();
