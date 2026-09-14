import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxNavbarTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Navbar"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "navbar";
		this.projectType = "igx-ts";
		this.name = "Navbar";
		this.description = "Basic IgxNavbar sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxNavbarTemplate();
