import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcBannerTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Banner"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "banner";
		this.projectType = "igc-ts";
		this.name = "Banner";
		this.description = "basic IgcBanner";
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcBannerTemplate();
