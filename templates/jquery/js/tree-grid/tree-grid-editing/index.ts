import * as fs from "fs-extra";
import * as path from "path";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";
import { Util } from "../../../../../lib/Util";
import { TreeGridFeatureHelper } from "../treegridfeaturehelper";

class TreeGridEditingTemplate extends jQueryTemplate {

	public extraConfigurations: ControlExtraConfiguration[];
	public userExtraConfiguration: {} = {};

	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.extraConfigurations = [];
		this.id = "tree-grid-editing";
		this.name = "TreeGrid Editing";
		this.description = "Tree Grid editing template";
		this.projectType = "js";
		this.components = ["Tree Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igTreeGrid"];

		this.hasExtraConfiguration = true;
		this.listInComponentTemplates = true;
		const featureConfiguration: ControlExtraConfiguration = {
			choices: ["Sorting", "Filtering"],
			default: "",
			key: "features",
			message: "Select optional features for the editing template",
			type: Enumerations.ControlExtraConfigType.MultiChoice
		};
		this.extraConfigurations.push(featureConfiguration);
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const features = TreeGridFeatureHelper.generateFeatures(["Updating"].concat(
			this.userExtraConfiguration["features"]));
		const config = { "$(treeGridFeatures)": features };
		return super.generateFiles(projectPath, name, { extraConfig : config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new TreeGridEditingTemplate();
