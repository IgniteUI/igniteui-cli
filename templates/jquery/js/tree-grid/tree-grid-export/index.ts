import * as path from "path";
import * as fs from "fs-extra";
import { TreeGridFeatureHelper } from "../treegridfeaturehelper";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";
import { Util } from "../../../../../lib/Util";

class TreeGridExportTemplate extends jQueryTemplate {

	extraConfigurations: ControlExtraConfiguration[];

	public userExtraConfiguration: {};

	/**
	 *
	 */
	constructor() {
		super(__dirname)
		this.extraConfigurations = [];
		
		this.name = "TreeGrid Export";
		this.id = "tree-grid-export";
		this.description = "Tree Grid exporting template";
		this.dependencies = ["igTreeGrid"];

		this.hasExtraConfiguration = true;
		var featureConfiguration: ControlExtraConfiguration = {
			key: "features",
			choices: ["Filtering", "Hiding"],
			default: "",
			type: Enumerations.ControlExtraConfigType.MultiChoice,
			message: "Select optional features for the export template"
		}
		this.extraConfigurations.push(featureConfiguration);
	}
	setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
	generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		
		var success = true,
			destinationPath = path.join(projectPath, this.folderName(name));
		//read html
		var config = {}, features: string;
		if (this.userExtraConfiguration["features"] !== undefined) {
			features = TreeGridFeatureHelper.generateFeatures(this.userExtraConfiguration["features"]);
		} else {
			features = "";
		}

		config["$(gridfeatures)"] = features;
		config["$(componentName)"] = name;
		config["$(cssBlock)"] = this.getCssTags();
		config["$(scriptBlock)"] = this.getScriptTags();
		var pathsConfig = {};
		return Util.processTemplates(path.join(__dirname, "files"), destinationPath, config, pathsConfig);
	}
	getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new TreeGridExportTemplate();