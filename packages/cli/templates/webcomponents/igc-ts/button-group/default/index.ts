import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcTabsTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Teaxtarea"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "textarea";
		this.projectType = "igc-ts";
		this.name = "Text area";
		this.description = "basic IgcTextarea";
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcTabsTemplate();
