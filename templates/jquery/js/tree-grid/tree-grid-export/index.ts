import * as fs from "fs-extra";
import * as path from "path";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";
import { Util } from "../../../../../lib/Util";
import { TreeGridFeatureHelper } from "../treegridfeaturehelper";

class TreeGridExportTemplate extends jQueryTemplate {

	public extraConfigurations: ControlExtraConfiguration[];
	public userExtraConfiguration: {} = {};

	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.extraConfigurations = [];
		this.id = "tree-grid-export";
		this.name = "TreeGrid Export";
		this.description = "Tree Grid exporting template";
		this.projectType = "js";
		this.components = ["Tree Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igTreeGrid"];

		this.hasExtraConfiguration = true;
		const featureConfiguration: ControlExtraConfiguration = {
			choices: ["Filtering", "Hiding"],
			default: "",
			key: "features",
			message: "Select optional features for the export template",
			type: Enumerations.ControlExtraConfigType.MultiChoice
		};
		this.extraConfigurations.push(featureConfiguration);
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {

		const destinationPath = path.join(projectPath, this.folderName(name));
		//read html
		const config = {};
		let features: string;
		if (this.userExtraConfiguration["features"] !== undefined) {
			features = TreeGridFeatureHelper.generateFeatures(this.userExtraConfiguration["features"]);
		} else {
			features = "";
		}

		config["$(treeGridFeatures)"] = features;
		config["$(description)"] = this.description;
		config["$(cssBlock)"] = this.getCssTags();
		config["$(scriptBlock)"] = this.getScriptTags();
		const pathsConfig = {};
		// TODO: Refactor to base
		if (!Util.validateTemplate(path.join(__dirname, "files"), destinationPath, config, pathsConfig)) {
			return Promise.resolve(false);
		}
		return Util.processTemplates(path.join(__dirname, "files"), destinationPath, config, pathsConfig);
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new TreeGridExportTemplate();
