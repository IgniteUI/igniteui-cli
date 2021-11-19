import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcPieChartTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["PieChart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "pie-chart";
		this.projectType = "igc-ts";
		this.name = "Pie Chart";
		this.description = "IgcPieChart with local data";
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcPieChartTemplate();
