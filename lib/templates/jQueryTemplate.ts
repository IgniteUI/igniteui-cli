import * as fs from "fs-extra";
import * as path from "path";
import { ProjectConfig } from "../ProjectConfig";
import { Util } from "../Util";

/**
 * Template with specific implementation for jQuery projects
 */
// tslint:disable-next-line:class-name
export class jQueryTemplate implements Template {
	public components: string[];
	public controlGroup: string;
	public listInComponentTemplates: boolean;
	public listInCustomTemplates: boolean;
	public id: string;
	public name: string;
	public description: string;
	public dependencies: string[];
	public framework: string = "jquery";
	public projectType: string;
	public hasExtraConfiguration: boolean;
	public packages = [];

	private configFile: string = "ignite-cli-views.js";
	private replacePattern: RegExp = /\[[\s\S]*\](?=;)/;

	/**
	 *
	 */
	constructor(private rootPath: string) {
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = false;
		this.hasExtraConfiguration = false;
	}

	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		let config = {};
		for (const element of options) {
			if (element.hasOwnProperty("extraConfig")) {
				config = element["extraConfig"];
			}
		}

		// view goes in its own folder based on the name
		const outputPath = path.join(projectPath, this.folderName(name));

		const pathsConfig = {};
		const projectConfig = ProjectConfig.getConfig();
		if (projectConfig != null) {
			pathsConfig["$(igniteuiSource)"] = projectConfig.project.igniteuiSource;
			pathsConfig["$(themePath)"] = projectConfig.project.themePath;
		}
		config["$(name)"] = name;
		config["$(cssBlock)"] =  this.getCssTags();
		config["$(scriptBlock)"] = this.getScriptTags();
		config["$(description)"] = this.description;
		config["$(theme)"] = projectConfig.project.theme;
		config["$(cliVersion)"] = Util.version();

		// generate scripts/imports based on framework - per template
		if (!Util.validateTemplate(path.join(this.rootPath, "files"), outputPath, config, pathsConfig)) {
			return Promise.resolve(false);
		}
		return Util.processTemplates(path.join(this.rootPath, "files"), outputPath, config, pathsConfig);
	}

	/**
	 * Add a view to the project config to be listed in index page
	 * @param projectPath
	 * @param name The name of the view
	 */
	public registerInProject(projectPath: string, name: string) {
		let configFile = fs.readFileSync(path.join(projectPath, this.configFile), "utf8");
		const viewsArr = JSON.parse(this.replacePattern.exec(configFile)[0]);
		viewsArr.push({name, path: this.getViewLink(name)});
		configFile = configFile.replace(this.replacePattern, JSON.stringify(viewsArr, null, 4));
		fs.writeFileSync(path.join(projectPath, this.configFile), configFile);
	}

	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [];
	}

	public setExtraConfiguration(extraConfigKeys: {}) { }

	//ms index
	protected getJqueryDependenciesScriptTag(): string {
		let builder = "<!-- Ignite UI required script references -->\n";

		// builder += "<script src=\"http://ajax.aspnetcdn.com/ajax/modernizr/modernizr-2.8.3.js\"></script>\n";

		builder += "<script src=\"http://code.jquery.com/jquery-1.11.3.min.js\"></script>\n";
		builder += "<script src=\"http://code.jquery.com/ui/1.11.1/jquery-ui.min.js\"></script>\n";
		return builder;
	}
	protected getScriptTags(): string {
		const config = require("../packages/components");
		let builder = "";
		builder += this.getJqueryDependenciesScriptTag();
		builder += "\n\n";
		builder += "<!-- Ignite UI Required Combined JavaScript Files -->\n";
		//builder += "<script src=\"$(igniteuiSource)\\js\\infragistics.core.js\"></script>\n";
		//builder += "<script src=\"$(igniteuiSource)\\js\\infragistics.lob.js\"></script>\n";
		builder += "<script src=\"../ignite-ui/js/infragistics.core.js\"></script>\n";
		builder += "<script src=\"../ignite-ui/js/infragistics.lob.js\"></script>\n";
		// temporary:
		if (this.dependencies.filter(x => config.dv.indexOf(x) !== -1).length) {
			builder += "\n";
			//builder += "<script src=\"$(igniteuiSource)\\js\\infragistics.lob.js\"></script>\n";
			builder += "<script src=\"../ignite-ui/js/infragistics.dv.js\"></script>\n";
		}

		if (this.dependencies.indexOf("igExcel") !== -1) {
			builder += "<script src=\"../ignite-ui/js/infragistics.excel-bundled.js\"></script>\n";
		}

		if (this.dependencies.indexOf("igGridExcelExporter") !== -1) {
			builder += "<script src=\"../ignite-ui/js/modules/infragistics.gridexcelexporter.js\"></script>\n";
		}
		builder += this.getNavigationScript();
		return builder;
	}
	protected getNavigationScript(): string {
		let builder = "";
		builder += "<script src=\"../ignite-cli-views.js\"></script>";
		builder += "<script src=\"../assets/navigation-header.js\"></script>";

		return builder;
	}

	protected getCssTags(): string {
		let builder = "";
		builder += "<!-- Ignite UI Required Combined CSS Files -->\n";
		builder += "<link href=\"../ignite-ui/css/themes/infragistics/infragistics.theme.css\" rel=\"stylesheet\" />\n";
		builder += "<link href=\"../ignite-ui/css/structure/infragistics.css\" rel=\"stylesheet\" />\n";
		//builder += "<link href=\"$(themePath)\" rel=\"stylesheet\" />\n";
		//builder += "<link href=\"$(igniteuiSource)\\css\\structure\\infragistics.css\" rel=\"stylesheet\" />\n"
		builder += "<link href=\"../assets/app.css\" rel=\"stylesheet\" />\n";
		return builder;
	}

	//getViewPath
	protected folderName(name: string): string {
		return Util.lowerDashed(name);
	}
	protected getViewLink(name: string): string {
		const linkPath = this.folderName(name) + "/index.html";
		return linkPath;
	}
}
