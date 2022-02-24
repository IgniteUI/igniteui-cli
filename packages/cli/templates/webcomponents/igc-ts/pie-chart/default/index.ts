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
		this.dependencies = [{
			import: ["IgcItemLegendModule", "IgcPieChartModule"],
			from: "igniteui-webcomponents-charts"
		}, {
			import: ["ModuleManager"],
			from: "igniteui-webcomponents-core"
		}];
		this.packages = ["igniteui-webcomponents-core@~1.4.1", "igniteui-webcomponents-charts@~1.4.1"];

	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcPieChartTemplate();
