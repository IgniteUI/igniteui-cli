//TODO:
import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";

class GridTemplatingTemplate extends ReactTemplate {
	public extraConfigurations: ControlExtraConfiguration[] = [];
	public userExtraConfiguration: {} = {};
	private gridHelper: GridHelper;

	constructor() {
		super(__dirname);
		this.id = "grid-templating";
		this.widget = "igGrid";
		this.name = "Grid Templating";
		this.description = "igGrid with templating for React";
		this.projectType = "es6";
		this.components = ["Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igGrid"];

		this.gridHelper = new GridHelper();
		this.hasExtraConfiguration = true;
		this.extraConfigurations.push({
			choices: ["Sorting", "Paging", "Filtering"],
			default: "",
			key: "features",
			message: "Select features for the igGrid",
			type: ControlExtraConfigType.MultiChoice
		});
	}

	public generateConfig(name: string, ...options: any[]): { [key: string]: any } {
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 5);
		const config = { gridfeatures: features };
		return super.generateConfig(name, { extraConfig: config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
}
module.exports = new GridTemplatingTemplate();
