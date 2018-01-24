import * as path from "path";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";
import { Util } from "../../../../../lib/Util";

class HierarchicalGridCustomTemplate extends AngularTemplate {
	private gridHelper: GridHelper;
	private extraConfigurations: ControlExtraConfiguration[];
	private userExtraConfiguration: {} = {};

	constructor() {
		super(__dirname);
		this.id = "hierarchical-grid-custom";
		this.name = "Custom Hierarchical Grid";
		this.controlGroup = "Data Grids";
		this.description = "Custom Hierarchical Grid default template for Angular";
		this.dependencies = ["igHierarchicalGrid"];
		this.projectType = "ig-ts";
		this.extraConfigurations = [];
		this.hasExtraConfiguration = true;
		this.listInComponentTemplates = true;

		this.gridHelper = new GridHelper();
		const featureConfiguration: ControlExtraConfiguration = {
			choices: [
				"Sorting", "Selection", "Updating", "Filtering", "ColumnMoving",
				"Resizing", "Hiding", "Paging", "Summaries"
			],
			default: "",
			key: "features",
			message: "Select features for the igHierarchicalGrid",
			type: Enumerations.ControlExtraConfigType.MultiChoice
		};
		this.extraConfigurations.push(featureConfiguration);
	}

	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}

	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const config = {
			"$(ClassName)": this.className(name),
			"__name__": this.fileName(name),
			"__path__": this.folderName(name)
		};
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 3);

		config["$(gridFeatures)"] = features;
		config["$(componentName)"] = name;
		const pathsConfig = {};
		// TODO: Refactor to base
		if (!Util.validateTemplate(path.join(__dirname, "files"), projectPath, config, pathsConfig)) {
			return Promise.resolve(false);
		}
		return Util.processTemplates(path.join(__dirname, "files"), projectPath, config, pathsConfig);
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new HierarchicalGridCustomTemplate();
