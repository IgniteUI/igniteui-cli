import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcNavDrawerTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Nav Drawer"];
		this.controlGroup = "Menus";
		this.listInComponentTemplates = true;
		this.id = "nav-drawer";
		this.projectType = "igc-ts";
		this.name = "Nav Drawer";
		this.description = "basic IgcNavDrawer toggled from a button";
	}
}
module.exports = new IgcNavDrawerTemplate();
