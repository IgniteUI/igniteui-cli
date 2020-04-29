import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class GridEditingTemplate extends jQueryTemplate {
	public extraConfigurations: ControlExtraConfiguration[];
	public userExtraConfiguration: {} = {};
	private gridHelper: GridHelper;
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "grid-editing";
		this.name = "Grid Editing";
		this.description = "igGrid editing template";
		this.projectType = "js";
		this.components = ["Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igGrid"];

		this.gridHelper = new GridHelper();
		this.hasExtraConfiguration = true;
		this.extraConfigurations = [];
		this.gridHelper.space = "    ";
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
		this.gridHelper.addFeature("Updating");
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 4);
		const config = { gridfeatures: features };
		return super.generateConfig(name, { extraConfig : config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new GridEditingTemplate();
