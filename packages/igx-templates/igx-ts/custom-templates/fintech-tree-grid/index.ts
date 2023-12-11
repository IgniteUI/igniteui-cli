import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxTreeGridFinTechTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.id = "fintech-tree-grid";
		this.projectType = "igx-ts";
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = true;
		this.name = "FinTech Tree Grid";
		this.description = "This sample demonstrates the TreeGrid handling thousands of updates per second.";
	}
}
module.exports = new IgxTreeGridFinTechTemplate();
