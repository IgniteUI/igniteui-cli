import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class IgxGridTemplate extends AngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Grid"];
		this.controlGroup = "Grids";
		this.listInComponentTemplates = true;
		this.id = "grid";
		this.projectType = "blocks-ts";
		this.name = "Grid";
		this.description = "Basic IgxGrid";
		this.dependencies = ["IgxGridModule"];
	}
}
module.exports = new IgxGridTemplate();
