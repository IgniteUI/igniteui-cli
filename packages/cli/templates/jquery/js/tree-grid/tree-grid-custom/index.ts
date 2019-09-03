import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class TreeGridCustomTemplate extends jQueryTemplate {
	public extraConfigurations: ControlExtraConfiguration[];
	public userExtraConfiguration: {} = {};
	private gridHelper: GridHelper;

	constructor() {
		super(__dirname);
		this.id = "tree-grid-custom";
		this.name = "Custom TreeGrid";
		this.description = "igTreeGrid custom template";
		this.projectType = "js";
		this.components = ["Tree Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igTreeGrid"];

		this.hasExtraConfiguration = true;
		this.listInComponentTemplates = true;
		this.extraConfigurations = [];

		this.gridHelper = new GridHelper();
		this.gridHelper.tree = true;
		const featureConfiguration: ControlExtraConfiguration = {
			choices: ["Sorting", "Selection", "Filtering", "Updating", "ColumnMoving", "Resizing", "Hiding"],
			default: "",
			key: "features",
			message: "Select features for the igTreeGrid",
			type: ControlExtraConfigType.MultiChoice
		};
		this.extraConfigurations.push(featureConfiguration);
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
	public generateConfig(name: string, ...options: any[]): {[key: string]: any} {
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 4);

		const extraConfig = {
			treeGridFeatures: features
		};
		return super.generateConfig(name, { extraConfig });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new TreeGridCustomTemplate();
