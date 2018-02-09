import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class ERDashboardTemplate extends jQueryTemplate {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "er-dashboard";
		this.framework = "jquery";
		this.projectType = "js";
		this.components = [ "Grid", "Data Chart", "Combo", "Tile Manager" ];
		this.listInCustomTemplates = true;
		this.name = "ER Dashboard";
		this.description = "This sample shows a dashboard for emergency room monitoring.";
		this.dependencies = [ "igGrid", "igCombo", "igDataChart", "igTileManager"];
	}

}
module.exports = new ERDashboardTemplate();
