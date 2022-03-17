import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxPivotGridTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Pivot Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "pivot-grid";
		this.projectType = "igx-ts";
		this.name = "Pivot Grid";
		this.dependencies = [
			{ import: "IgxPivotGridModule", from: "<%=igxPackage%>" }
		];
	}
}
module.exports = new IgxPivotGridTemplate();
