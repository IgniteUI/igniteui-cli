import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcCalendarTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Calendar"];
		this.controlGroup = "Scheduling";
		this.listInComponentTemplates = true;
		this.id = "calendar";
		this.projectType = "igc-ts";
		this.name = "Calendar";
		this.description = "basic IgcCalendar";
	}
}
module.exports = new IgcCalendarTemplate();
