import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxComboTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Combo"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "combo";
		this.projectType = "igx-ts";
		this.name = "Combo";
		this.description = "Basic IgxCombo with templating";
		this.dependencies = [{
			from: "igniteui-angular",
			import: ["IgxComboModule", "IgxDropDownModule", "IgxCheckboxModule", "IgxToggleModule",
			"IgxButtonModule", "IgxIconModule", "IgxInputGroupModule "]
		}];
	}
}
module.exports = new IgxComboTemplate();
