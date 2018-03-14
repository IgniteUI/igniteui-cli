import * as path from "path";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";
import { Util } from "../../../../../lib/Util";
import { TreeGridFeatureHelper } from "../treegridfeaturehelper";

class FileExplorerTemplate extends jQueryTemplate {

	public extraConfigurations: ControlExtraConfiguration[];
	public userExtraConfiguration: {} = {};

	constructor() {
		super(__dirname);
		this.id = "file-explorer";
		this.name = "File Explorer";
		this.controlGroup = "Data Grids";
		this.description = "File explorer sample using igTreeGrid";
		this.dependencies = ["igTreeGrid"];
		this.projectType = "js";
		this.listInCustomTemplates = true;
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
module.exports = new FileExplorerTemplate();
