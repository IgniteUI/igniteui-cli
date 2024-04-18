import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcDateTimeInputTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["DateTime Input"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "date-time-input";
		this.projectType = "igc-ts";
		this.name = "Date Time Input";
		this.description = "basic IgcDateTimeInput";
	}
}
module.exports = new IgcDateTimeInputTemplate();
