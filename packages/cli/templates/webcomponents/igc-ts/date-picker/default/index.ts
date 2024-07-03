import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcAvatarTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Avatar"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "avatar";
		this.projectType = "igc-ts";
		this.name = "Avatar";
		this.description = "basic IgcAvatar";
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcAvatarTemplate();
