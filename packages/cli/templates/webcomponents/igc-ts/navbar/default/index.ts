import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcNavbarTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Navbar"];
		this.controlGroup = "Menus";
		this.listInComponentTemplates = true;
		this.id = "button";
		this.projectType = "igc-ts";
		this.name = "Navbar";
		this.description = "basic IgcNavbar";
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcNavbarTemplate();
