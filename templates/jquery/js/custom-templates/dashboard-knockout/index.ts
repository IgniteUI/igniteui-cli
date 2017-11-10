import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class DashboardKnockoutTemplate extends jQueryTemplate {
	constructor() {
		super(__dirname);
		this.controlGroup = "";
		this.id = "dashboard-knockout";
		this.framework = "jquery";
		this.projectType = "js";
		this.components = ["Editors", "Validator"];
		this.listInComponentTemplates = true;
		this.name = "Dashboard Knockout";
		this.description = "Dashboard sample with knockout components which update both ways on editing";
		this.dependencies = [
			"igEditors",
			"igCombo",
			"igDataChart",
			"igGrid"
		];
	}
}
module.exports = new DashboardKnockoutTemplate();
