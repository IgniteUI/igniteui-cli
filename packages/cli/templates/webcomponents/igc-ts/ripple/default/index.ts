import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcRippleTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Ripple"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "ripple";
		this.projectType = "igc-ts";
		this.name = "Ripple";
		this.description = "basic IgcRipple";
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcRippleTemplate();
