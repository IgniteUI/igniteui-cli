import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxComboTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Combo"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "combo";
		this.projectType = "igx-ts";
		this.name = "Combo";
		this.description = "basic IgxCombo with templating";
		this.dependencies = [{
			import: ["IgxComboModule"],
			from: "<%=igxPackage%>"
		}];
	}
}
module.exports = new IgxComboTemplate();
