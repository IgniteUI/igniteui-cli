import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcCircularProgressTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Circular Progress"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "circular-progress";
		this.projectType = "igc-ts";
		this.name = "Circular Progress";
		this.description = "Basic Circular Progress";
	}
}
module.exports = new IgcCircularProgressTemplate();
