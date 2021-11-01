import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcCalendarTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Calendar"];
		this.controlGroup = "Scheduling";
		this.listInComponentTemplates = true;
		this.id = "calendar";
		this.projectType = "igc-ts";
		this.name = "Calendar";
		this.description = "basic IgcCalendar";
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcCalendarTemplate();
