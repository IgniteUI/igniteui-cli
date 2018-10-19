import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class DashboardKnockoutTemplate extends jQueryTemplate {
	constructor() {
		super(__dirname);
		this.id = "dashboard-knockout";
		this.components = ["Editors", "Validator"];
		this.projectType = "js";
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = true;
		this.name = "Dashboard Knockout";
		this.description = "dashboard sample with knockout components which update both ways on editing";
		this.dependencies = [
			"igEditors",
			"igCombo",
			"igDataChart",
			"igGrid"
		];
	}
}
module.exports = new DashboardKnockoutTemplate();
