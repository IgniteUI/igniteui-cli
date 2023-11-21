import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxGridTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "grid";
		this.projectType = "igx-ts";
		this.name = "Grid";
		this.description = "basic IgxGrid";
		this.dependencies = [
			{ import: "IgxGridModule", from: "<%=igxPackage%>" }
		];
	}
}
module.exports = new IgxGridTemplate();
