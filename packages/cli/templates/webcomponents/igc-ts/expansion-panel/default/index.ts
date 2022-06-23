import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcDropdownTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Expansion Panel"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "expansion-panel";
		this.projectType = "igc-ts";
		this.name = "Expansion Panel";
		this.description = "A lightweight accordion component";
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcDropdownTemplate();
