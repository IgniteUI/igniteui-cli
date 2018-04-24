import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxGridTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "grid";
		this.projectType = "igx-ts";
		this.name = "Grid";
		this.description = "Basic IgxGrid";
		this.dependencies = [
			{ import: "IgxGridModule", from: "igniteui-angular/main", root: true }
		];
	}
}
module.exports = new IgxGridTemplate();
