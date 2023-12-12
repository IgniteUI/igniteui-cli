import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxListTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["List"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "list";
		this.projectType = "igx-ts";
		this.name = "List";
		this.description = "basic IgxList";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxListTemplate();
