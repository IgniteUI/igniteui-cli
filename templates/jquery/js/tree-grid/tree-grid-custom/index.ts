import * as path from "path";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";
import { Util } from "../../../../../lib/Util";
import { TreeGridFeatureHelper } from "../treegridfeaturehelper";

class TreeGridCustomTemplate extends jQueryTemplate {

	public extraConfigurations: ControlExtraConfiguration[];

	public userExtraConfiguration: {} = {};

	constructor() {
		super(__dirname);
		this.id = "tree-grid-custom";
		this.name = "Custom TreeGrid";
		this.description = "Tree Grid custom template";
		this.projectType = "js";
		this.components = ["Tree Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igTreeGrid"];

		this.hasExtraConfiguration = true;
		this.listInComponentTemplates = true;
		this.extraConfigurations = [];
		const featureConfiguration: ControlExtraConfiguration = {
			choices: ["Sorting", "RowSelectors", "Filtering", "Updating", "ColumnMoving", "Resizing", "Hiding"],
			default: "",
			key: "features",
			message: "Select features for the igTreeGrid",
			type: Enumerations.ControlExtraConfigType.MultiChoice
		};
		this.extraConfigurations.push(featureConfiguration);
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		let features: string;
		if (this.userExtraConfiguration["features"] !== undefined) {
			features = TreeGridFeatureHelper.generateFeatures(this.userExtraConfiguration["features"]);
		} else {
			features = "";
		}

		const extraConfig = {
			"$(treeGridFeatures)": features
		};
		return super.generateFiles(projectPath, name, { extraConfig });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new TreeGridCustomTemplate();
