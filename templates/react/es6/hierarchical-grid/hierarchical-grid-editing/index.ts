import * as path from 'path';
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "../../../../../lib/Util";

import { GridHelper } from "../../../../../lib/project-utility/GridHelper";

class HierarchicalGridEditingTemplate extends ReactTemplate {
	private gridHelper: GridHelper;
	extraConfigurations: ControlExtraConfiguration[] = [];
	public userExtraConfiguration: {};

	constructor() {
		super(__dirname);
		this.id = "hierarchical-grid-editing";
		this.name = "Editing Hierarchical Grid";
		this.description = "Hierarchical Grid editing template for React";
		this.projectType = "es6";
		this.components = ["Hierarchical Grid"];
		this.controlGroup = "Grids";
		this.dependencies = ["igHierarchicalGrid"];

		this.gridHelper = new GridHelper();
		this.gridHelper.hierarchical = true;
		this.hasExtraConfiguration = true;
		this.extraConfigurations.push({
			key: "features",
			choices: ["Sorting", "Updating", "Filtering"],
			default: "",
			type: Enumerations.ControlExtraConfigType.MultiChoice,
			message: "Select features for the igHierarchicalGrid"
		});
	}

	generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const config = {};
		const pathsConfig = {};

		this.gridHelper.addFeature("Updating", { enableAddRow: true });
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 5);

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
module.exports = new HierarchicalGridEditingTemplate();