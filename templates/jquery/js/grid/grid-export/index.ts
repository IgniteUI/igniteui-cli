import * as fs from "fs-extra";
import * as path from "path";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";
import { Util } from "../../../../../lib/Util";

class GridExportTemplate extends jQueryTemplate {
	public extraConfigurations: ControlExtraConfiguration[];
	public userExtraConfiguration: {} = {};
	private gridHelper: GridHelper;
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.extraConfigurations = [];
		this.id = "grid-export";
		this.name = "Grid Export";
		this.description = "Grid export template";
		this.projectType = "js";
		this.components = ["Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igGrid", "igGridExcelExporter"];

		this.gridHelper = new GridHelper();
		this.hasExtraConfiguration = true;
		this.gridHelper.space = "    ";
		const featureConfiguration: ControlExtraConfiguration = {
			choices: ["Summaries", "Hiding"],
			default: "",
			key: "features",
			message: "Select features for the igGrid",
			type: Enumerations.ControlExtraConfigType.MultiChoice
		};
		this.extraConfigurations.push(featureConfiguration);
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const destinationPath = path.join(projectPath, this.folderName(name));
		const config = {};
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 4);

		config["$(gridfeatures)"] = features;
		config["$(description)"] = this.description;
		config["$(cssBlock)"] = this.getCssTags();
		config["$(scriptBlock)"] = this.getScriptTags();
		const pathsConfig = {};

		// TODO: Refactor to base
		if (!Util.validateTemplate(path.join(__dirname, "files"), destinationPath, config, pathsConfig)) {
			return Promise.resolve(false);
		}
		return Util.processTemplates(path.join(__dirname, "files"), destinationPath, config, pathsConfig);
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new GridExportTemplate();
