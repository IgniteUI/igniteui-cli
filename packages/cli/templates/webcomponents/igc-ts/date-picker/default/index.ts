import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcDatePickerTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["DatePicker"];
		this.controlGroup = "Scheduling";
		this.listInComponentTemplates = true;
		this.id = "datepicker";
		this.projectType = "igc-ts";
		this.name = "Date Picker";
		this.description = "basic IgcDatePicker";
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcDatePickerTemplate();
