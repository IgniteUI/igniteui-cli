import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxRatingTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Rating"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "rating";
		this.projectType = "igx-ts";
		this.name = "Rating";
		this.description = "Basic igc-rating sample";
		this.packages = ["igniteui-webcomponents@^7.2.1"];
	}
}
module.exports = new IgxRatingTemplate();
