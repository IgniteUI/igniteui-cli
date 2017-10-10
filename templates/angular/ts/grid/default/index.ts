import * as fs from "fs-extra";
import * as path from "path";
import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";
import { Util } from "../../../../../lib/Util";
import { GridHelper } from "../../../../jquery/js/grid/gridtemplatehelper";

class GridTemplate extends AngularTemplate {

	private extraConfigurations: ControlExtraConfiguration[];
	private userExtraConfiguration: {};

	constructor() {
		super(__dirname);
		this.id = "grid";
		this.name = "Grid";
		this.description = "Grid default template";
		this.dependencies = ["igGrid"];
		this.projectType = "ts";
		this.extraConfigurations = [];
		this.hasExtraConfiguration = true;
		this.listInComponentTemplates = true;

		const featureConfiguration: ControlExtraConfiguration = {
			key: "features",
			choices: ["Sorting", "Paging", "Filtering"],
			default: "",
			type: Enumerations.ControlExtraConfigType.MultiChoice,
			message: "Select features for the igGrid"
		};
		this.extraConfigurations.push(featureConfiguration);
	}

	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}

	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const config = {
			__name__: this.fileName(name),
			__path__: this.folderName(name)
		};
		let features: string;
		if (this.userExtraConfiguration["features"] !== undefined) {
			features = GridHelper.generateFeatures(this.userExtraConfiguration["features"]);
		} else {
			features = "";
		}

		config["$(gridFeatures)"] = features;
		config["$(componentName)"] = name;
		const pathsConfig = {};
		return Util.processTemplates(path.join(__dirname, "files"), projectPath, config, pathsConfig);
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new GridTemplate();
