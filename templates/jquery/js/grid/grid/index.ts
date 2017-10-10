import * as path from "path";
import * as fs from "fs-extra";
import { GridHelper } from "../gridtemplatehelper";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";
import { Util } from "../../../../../lib/Util";

class GridTemplate extends jQueryTemplate {

	extraConfigurations: ControlExtraConfiguration[];

	public userExtraConfiguration: {};

	
	/**
	 *
	 */
	constructor() {
		super(__dirname)
		this.extraConfigurations = [];
		this.name = "Grid";
		this.description = "Grid default template";
		this.dependencies = ["igGrid"];
		this.id = "grid";
		this.hasExtraConfiguration = true;
		this.listInComponentTemplates = true;

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
		
		var destinationPath = path.join(projectPath, this.folderName(name)),
		config = {}, features: string;
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

module.exports = new GridTemplate();