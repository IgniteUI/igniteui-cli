import * as fs from "fs-extra";
import * as path from "path";
import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";
//import { TreeGridFeatureHelper } from "../../../../../jquery/js/tree-grid/treegridfeaturehelper";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { Util } from "../../../../../lib/Util";

class TreeGridTemplate extends AngularTemplate {
	private gridHelper: GridHelper;
	private extraConfigurations: ControlExtraConfiguration[];
	private userExtraConfiguration: {};

	constructor() {
		super(__dirname);
		this.id = "tree-grid";
		this.name = "Tree Grid";
		this.controlGroup = "Data Grids";
		this.description = "Tree Grid default template for Angular";
		this.dependencies = ["igTreeGrid"];
		this.projectType = "ts";
		this.listInComponentTemplates = true;
		this.hasExtraConfiguration = true;
		this.extraConfigurations = [];
		this.gridHelper = new GridHelper();
		const featureConfiguration: ControlExtraConfiguration = {
			key: "features",
			choices: ["Sorting", "RowSelectors", "Filtering"],
			default: "",
			type: Enumerations.ControlExtraConfigType.MultiChoice,
			message: "Select features for the igTreeGrid"
		};
		this.extraConfigurations.push(featureConfiguration);
	}

	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}

	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const config = {
			"__name__": this.fileName(name),
			"__path__": this.folderName(name),
			"$(ClassName)": this.className(name)
		};
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 3);

		config["$(treeGridFeatures)"] = features;
		config["$(componentName)"] = name;
		const pathsConfig = {};
		return Util.processTemplates(path.join(__dirname, "files"), projectPath, config, pathsConfig);
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new TreeGridTemplate();
