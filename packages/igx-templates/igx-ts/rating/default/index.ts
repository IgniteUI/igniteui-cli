import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxRatingTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Rating"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "rating";
		this.projectType = "igx-ts";
		this.description = "Basic igc-rating (Web Components) sample";
	}
}
module.exports = new IgxRatingTemplate();
