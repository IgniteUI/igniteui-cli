import * as path from "path";
import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";
import { Util } from "../../../../../lib/Util";
import { TreeGridFeatureHelper } from "../../../../jquery/js/tree-grid/treegridfeaturehelper";

class TreeGridFileExplorerTemplate extends AngularTemplate {
	private extraConfigurations: ControlExtraConfiguration[];
	private userExtraConfiguration = {};

	constructor() {
		super(__dirname);
		this.id = "tree-grid-file-explorer";
		this.name = "Tree Grid File Explorer";
		this.widget = "igTreeGrid";
		this.controlGroup = "Data Grids";
		this.description = "Tree Grid file explorer template for Angular";
		this.dependencies = ["igTreeGrid"];
		this.projectType = "ig-ts";
		this.listInComponentTemplates = true;
		this.hasExtraConfiguration = true;
		this.extraConfigurations = [];
		const featureConfiguration: ControlExtraConfiguration = {
			choices: ["Sorting"],
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
		const features = TreeGridFeatureHelper.generateFeatures(this.userExtraConfiguration["features"]);
		const config = { "$(treeGridFeatures)": features };
		return super.generateFiles(projectPath, name, { extraConfig : config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new TreeGridFileExplorerTemplate();
