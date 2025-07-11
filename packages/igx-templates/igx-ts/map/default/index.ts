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
		this.packages = ["igniteui-angular-core@~20.0.0", "igniteui-angular-charts@~20.0.0", "igniteui-angular-maps@~20.0.0"];
	}
}
module.exports = new IgxGeographicMapTemplate();
