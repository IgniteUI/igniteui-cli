import * as path from 'path';
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "../../../../../lib/Util";

import { TreeGridFeatureHelper } from "../../../../jquery/js/tree-grid/treegridfeaturehelper";

class TreeGridEditingTemplate extends ReactTemplate {

	extraConfigurations: ControlExtraConfiguration[] = [];
	public userExtraConfiguration: {};

	constructor() {
		super(__dirname);
		this.id = "tree-grid-editing";
		this.name = "Editing Tree Grid";
		this.description = "Tree Grid editing template for React";
		this.projectType = "es6";
		this.components = ["Tree Grid"];
		this.controlGroup = "Grids";
		this.dependencies = ["igTreeGrid"];

		this.hasExtraConfiguration = true;
		this.extraConfigurations.push({
			key: "features",
			choices: ["Sorting", "Filtering", "Updating"],
			default: "",
			type: Enumerations.ControlExtraConfigType.MultiChoice,
			message: "Select features for the igTreeGrid"
		});
	}

	generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		var config = {}, pathsConfig = {}, features: string;
		if (this.userExtraConfiguration["features"] !== undefined) {
			features = TreeGridFeatureHelper.generateFeatures(this.userExtraConfiguration["features"]);
		} else {
			features = "";
		}
		
		config["__path__"] =  this.folderName(name); //folder name allowed spaces, any casing
		config["$(ClassName)"] = this.className(name);//first letter capital, no spaces, 
		config["$(widget)"] = "igTreeGrid";
		config["$(Control)"] = this.className("igTreeGrid");
		config["$(igniteImports)"] = this.getImports();
		config["$(name)"] = name; // This name should not have restrictions
		config["$(gridfeatures)"] = features;
		return Util.processTemplates(path.join(__dirname, "files"), projectPath, config, pathsConfig);
	}
	getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
	setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
}
module.exports = new TreeGridEditingTemplate();