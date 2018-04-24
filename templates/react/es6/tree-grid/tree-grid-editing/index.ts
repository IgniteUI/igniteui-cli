import * as path from "path";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "../../../../../lib/Util";

import { GridHelper } from "../../../../../lib/project-utility/GridHelper";

class TreeGridEditingTemplate extends ReactTemplate {

	public extraConfigurations: ControlExtraConfiguration[] = [];
	public userExtraConfiguration: {} = {};
	private gridHelper: GridHelper;

	constructor() {
		super(__dirname);
		this.id = "tree-grid-editing";
		this.name = "Editing Tree Grid";
		this.description = "Tree Grid editing template for React";
		this.projectType = "es6";
		this.widget = "igTreeGrid";
		this.components = ["Tree Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igTreeGrid"];

		this.gridHelper = new GridHelper();
		this.gridHelper.tree = true;
		this.hasExtraConfiguration = true;
		this.extraConfigurations.push({
			choices: ["Sorting", "Filtering"],
			default: "",
			key: "features",
			message: "Select features for the igTreeGrid",
			type: Enumerations.ControlExtraConfigType.MultiChoice
		});
	}

	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		this.gridHelper.addFeature("Updating");
		const features = this.gridHelper.generateFeatures(
			this.userExtraConfiguration["features"], 5);
		const config = { "$(treeGridFeatures)": features };
		return super.generateFiles(projectPath, name, { extraConfig : config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
}
module.exports = new TreeGridEditingTemplate();
