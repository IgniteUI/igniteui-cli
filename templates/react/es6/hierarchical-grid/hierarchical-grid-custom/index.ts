import * as path from 'path';
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "../../../../../lib/Util";

import { GridHelper } from "../../../../jquery/js/hierarchical-grid/gridtemplatehelper";

class HierarchicalGridCustomTemplate extends ReactTemplate {

	extraConfigurations: ControlExtraConfiguration[] = [];
	public userExtraConfiguration: {};

	constructor() {
		super(__dirname);
		this.id = "hierarchical-grid-custom";
		this.name = "Custom Hierarchical Grid";
		this.description = "Hierarchical Grid custom template for React";
		this.projectType = "es6";
		this.components = ["Hierarchical Grid"];
		this.controlGroup = "Grids";
		this.dependencies = ["igHierarchicalGrid"];

		this.hasExtraConfiguration = true;
		this.extraConfigurations.push({
			key: "features",
			choices: ["Sorting", "Selection", "Updating", "Filtering", "ColumnMoving", "Resizing", "Hiding"],
			default: "",
			type: Enumerations.ControlExtraConfigType.MultiChoice,
			message: "Select features for the igHierarchicalGrid"
		});
	}

	generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		var config = {}, pathsConfig = {}, features: string;
		if (this.userExtraConfiguration["features"] !== undefined) {
			features = GridHelper.generateFeatures(this.userExtraConfiguration["features"]);
		} else {
			features = "";
		}
		
		config["__path__"] =  this.folderName(name); //folder name allowed spaces, any casing
		config["$(ClassName)"] = this.className(name);//first letter capital, no spaces, 
		config["$(widget)"] = "igHierarchicalGrid";
		config["$(Control)"] = this.className("igHierarchicalGrid");
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
module.exports = new HierarchicalGridCustomTemplate();