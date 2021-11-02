import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcNavDrawerTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["NavDrawer"];
		this.controlGroup = "Menus";
		this.listInComponentTemplates = true;
		this.id = "nav-drawer";
		this.projectType = "igc-ts";
		this.name = "Navigation Drawer";
		this.description = "basic IgcNavDrawer";
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcNavDrawerTemplate();
