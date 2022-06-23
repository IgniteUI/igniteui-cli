import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcDropdownTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Dropdown"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "dropdown";
		this.projectType = "igc-ts";
		this.name = "Dropdown";
		this.description = "IgcDropdown with groups and disabled items";
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcDropdownTemplate();
