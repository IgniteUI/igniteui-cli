import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcTreeTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Tree"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "tree";
		this.projectType = "igc-ts";
		this.name = "Tree";
		this.description = "basic IgcTree";
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcTreeTemplate();
