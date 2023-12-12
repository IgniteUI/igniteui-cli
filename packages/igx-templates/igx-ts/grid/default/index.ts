import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
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
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxGridTemplate();
