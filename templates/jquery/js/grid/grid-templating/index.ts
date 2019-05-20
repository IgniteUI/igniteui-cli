import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";
import { ControlExtraConfigType, ControlExtraConfiguration } from "../../../../../lib/types/index";

class GridTemplatingTemplate extends jQueryTemplate {
	public extraConfigurations: ControlExtraConfiguration[];
	public userExtraConfiguration: {} = {};
	public hasExtraConfiguration = true;
	private gridHelper: GridHelper;

	constructor() {
		super(__dirname);
		this.id = "grid-templating";
		this.name = "Grid Templating";
		this.description = "igGrid templating template";
		this.projectType = "js";
		this.components = ["Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igGrid"];

		this.gridHelper = new GridHelper();
		this.extraConfigurations = [];
		const featureConfiguration: ControlExtraConfiguration = {
			choices: ["Sorting", "Paging", "Filtering"],
			default: "",
			key: "features",
			message: "Select features for the igGrid",
			type: ControlExtraConfigType.MultiChoice
		};
		this.extraConfigurations.push(featureConfiguration);
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
	public generateConfig(name: string, ...options: any[]): {[key: string]: any} {
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 4);
		const config = { "$(gridfeatures)": features };
		return super.generateConfig(name, { extraConfig : config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new GridTemplatingTemplate();
