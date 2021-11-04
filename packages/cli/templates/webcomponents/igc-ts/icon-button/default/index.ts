import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcIconButtonTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Icon button"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "Icon button";
		this.projectType = "igc-ts";
		this.name = "Icon Button";
		this.description = "basic IgcIconButton";
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcIconButtonTemplate();
