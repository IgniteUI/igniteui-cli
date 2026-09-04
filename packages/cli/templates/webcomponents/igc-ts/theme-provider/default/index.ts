import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcThemeProviderTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Theme Provider"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "theme-provider";
		this.projectType = "igc-ts";
		this.name = "Theme Provider";
		this.description = "basic IgcThemeProvider";
	}
}
module.exports = new IgcThemeProviderTemplate();
