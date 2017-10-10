import * as path from 'path';
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "../../../../../lib/Util";
//TODO:
import { GridHelper } from "../../../../jquery/js/grid/gridtemplatehelper";


class GridEditingTemplate extends ReactTemplate {
	extraConfigurations: ControlExtraConfiguration[] = [];
	userExtraConfiguration: {};
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "grid-editing";
		this.name = "Grid Editing";
		this.description = "The is a grid editing template for React";
		this.projectType = "es6";
		this.components = ["Grid"];
		this.controlGroup = "Grids";
		this.dependencies = ["igGrid"];

		this.hasExtraConfiguration = true;
		this.extraConfigurations.push({
			key: "features",
			choices: ["Sorting", "Updating", "Filtering"],
			default: "",
			type: Enumerations.ControlExtraConfigType.MultiChoice,
			message: "Select features for the igGrid"
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
		config["$(widget)"] = "igGrid";
		config["$(Control)"] = this.className("igGrid");
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
module.exports = new GridEditingTemplate();