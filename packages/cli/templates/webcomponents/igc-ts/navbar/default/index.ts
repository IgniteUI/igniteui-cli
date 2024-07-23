import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcNavbarTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Navbar"];
		this.controlGroup = "Menus";
		this.listInComponentTemplates = true;
		this.id = "navbar";
		this.projectType = "igc-ts";
		this.name = "Navbar";
		this.description = "basic IgcNavbar";
	}
}
module.exports = new IgcNavbarTemplate();
