import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcFileInputTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["File Input"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "file-input";
		this.projectType = "igc-ts";
		this.name = "File Input";
		this.description = "basic IgcFileInput";
	}
}
module.exports = new IgcFileInputTemplate();
