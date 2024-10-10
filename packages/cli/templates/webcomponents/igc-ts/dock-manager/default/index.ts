import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcDockManagerTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["DockManager"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "dock-manager";
		this.projectType = "igc-ts";
		this.name = "Dock Manager";
		this.description = "Dock Manager with most functionalities and docking options";
		this.packages = ["igniteui-dockmanager@~1.14.4"];
	}
}
module.exports = new IgcDockManagerTemplate();
