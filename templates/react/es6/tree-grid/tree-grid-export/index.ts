import * as path from "path";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "../../../../../lib/Util";
//TODO:
import { TreeGridFeatureHelper } from "../../../../jquery/js/tree-grid/treegridfeaturehelper";

class TreeGridExportTemplate extends ReactTemplate {
	public extraConfigurations: ControlExtraConfiguration[] = [];
	public userExtraConfiguration: {} = {};
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "tree-grid-export";
		this.name = "Tree Grid Exporting";
		this.description = "Tree grid exporting template for React";
		this.projectType = "es6";
		this.components = ["Tree Grid"];
		this.widget = "igTreeGrid";
		this.controlGroup = "Data Grids";
		this.dependencies = ["igTreeGrid"];

		this.hasExtraConfiguration = true;
		this.extraConfigurations.push({
			choices: ["Filtering", "Hiding"],
			default: "",
			key: "features",
			message: "Select features for the igTreeGrid",
			type: Enumerations.ControlExtraConfigType.MultiChoice
		});
	}

	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const features = TreeGridFeatureHelper.generateFeatures(this.userExtraConfiguration["features"]);
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
module.exports = new TreeGridExportTemplate();
