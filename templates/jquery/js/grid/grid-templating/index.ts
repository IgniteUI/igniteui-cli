import * as path from "path";
import * as fs from "fs-extra";
import { GridHelper } from "../gridtemplatehelper";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";
import { ProjectConfig } from "../../../../../lib/ProjectConfig";
import { Util } from "../../../../../lib/Util";

class GridTemplatingTemplate extends jQueryTemplate {

	extraConfigurations: ControlExtraConfiguration[];

	public userExtraConfiguration: {};


	hasExtraConfiguration = true;
	/**
	 *
	 */
	constructor() {
		super(__dirname)
		this.extraConfigurations = [];
		
		this.name = "Grid Templating";
		this.description = "Grid templating template";
		this.id = "grid-templating";
		this.dependencies = ["igGrid"];
		var featureConfiguration: ControlExtraConfiguration = {
			key: "features",
			choices: ["Sorting", "Paging", "Filtering"],
			default: "",
			type: Enumerations.ControlExtraConfigType.MultiChoice,
			message: "Select features for the igGrid"
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
			features = GridHelper.generateFeatures(this.userExtraConfiguration["features"]);
		} else {
			features = "";
		}

		config["$(Gridfeatures)"] = features;
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

module.exports = new GridTemplatingTemplate();