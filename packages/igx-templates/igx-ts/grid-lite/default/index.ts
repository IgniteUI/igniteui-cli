import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxGridLiteTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Grid Lite"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "grid-lite";
		this.projectType = "igx-ts";
		this.name = "Grid Lite";
		this.description = "Basic IgxGridLite sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE, "igniteui-grid-lite@~0.9.0"];
	}
}
module.exports = new IgxGridLiteTemplate();
