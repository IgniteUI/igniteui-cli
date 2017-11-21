import * as path from "path";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "../../../../../lib/Util";

import { TreeGridFeatureHelper } from "../../../../jquery/js/tree-grid/treegridfeaturehelper";

class TreeGridCustomTemplate extends ReactTemplate {

	public extraConfigurations: ControlExtraConfiguration[] = [];
	public userExtraConfiguration: {} = {};

	constructor() {
		super(__dirname);
		this.id = "tree-grid-custom";
		this.name = "Custom Tree Grid";
		this.description = "Tree Grid custom template for React";
		this.projectType = "es6";
		this.components = ["Tree Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igTreeGrid"];

		this.hasExtraConfiguration = true;
		this.extraConfigurations.push({
			choices: ["Sorting", "RowSelectors", "Filtering", "Updating", "ColumnMoving", "Resizing", "Hiding"],
			default: "",
			key: "features",
			message: "Select features for the igTreeGrid",
			type: Enumerations.ControlExtraConfigType.MultiChoice
		});
	}

	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const config = {};
		const pathsConfig = {};
		let features: string;
		if (this.userExtraConfiguration["features"] !== undefined) {
			features = TreeGridFeatureHelper.generateFeatures(this.userExtraConfiguration["features"]);
		} else {
			features = "";
		}

		config["__path__"] =  this.folderName(name); //folder name allowed spaces, any casing
		config["$(ClassName)"] = this.className(name); //first letter capital, no spaces,
		config["$(widget)"] = "igTreeGrid";
		config["$(Control)"] = this.className("igTreeGrid");
		config["$(igniteImports)"] = this.getImports();
		config["$(name)"] = name; // this name should not have restrictions
		config["$(gridfeatures)"] = features;
		return Util.processTemplates(path.join(__dirname, "files"), projectPath, config, pathsConfig);
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
}
module.exports = new TreeGridCustomTemplate();
