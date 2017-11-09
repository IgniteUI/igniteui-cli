import * as fs from "fs-extra";
import * as path from "path";
import { ProjectConfig } from "../ProjectConfig";
import { Util } from "../Util";

/**
 * Template with specific implementation for jQuery projects
 */
export abstract class jQueryTemplate implements Template {
	components: string[];
	controlGroup: string;
	listInComponentTemplates: boolean;
	listInCustomTemplates: boolean;
	id: string;
	name: string;
	description: string;
	dependencies: string[];
	framework: string = "jquery";
	projectType: string;
	hasExtraConfiguration: boolean;

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
	//getViewPath
	protected folderName(name: string) : string {
		return name.toLowerCase().replace(/ /g, "-");
	}
	protected getViewLink(name: string) : string {
		var path = this.folderName(name) + "/index.html";
		return path;
	}
	generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		
		// view goes in its own folder based on the name
		var outputPath = path.join(projectPath, this.folderName(name));

		var pathsConfig = {};
		var projectConfig = ProjectConfig.getConfig();
		if (projectConfig != null) {
			pathsConfig["$(igniteuiSource)"] = projectConfig.project.igniteuiSource;
			pathsConfig["$(themePath)"] = projectConfig.project.themePath;
		}
		var scriptTags = this.getScriptTags();
		var cssTags = this.getCssTags();
		
		var config = {
			"$(idPlaceHolder)" : name,
			"$(cssBlock)": cssTags,
			"$(theme)": projectConfig.project.theme,
			"$(scriptBlock)": scriptTags
		};

		// generate scripts/imports based on framework - per template
		return Util.processTemplates(path.join(this.rootPath, "files"), outputPath, config, pathsConfig);
	}

	/**
	 * Add a view to the project config to be listed in index page
	 * @param projectPath 
	 * @param name The name of the view
	 */
	registerInProject(projectPath: string, name: string) {
		var configFile = fs.readFileSync(path.join(projectPath, this.configFile), "utf8");
		var viewsArr = JSON.parse(this.replacePattern.exec(configFile)[0]);
		viewsArr.push({name: name, path: this.getViewLink(name)});
		configFile = configFile.replace(this.replacePattern, JSON.stringify(viewsArr, null, 4));
		fs.writeFileSync(path.join(projectPath, this.configFile), configFile);
	}
	getExtraConfiguration(): ControlExtraConfiguration[] {
		return [];
	}
	setExtraConfiguration(extraConfigKeys: {}) { }
	//ms index
	getJqueryDependenciesScriptTag() : string {
		var builder = "<!-- Ignite UI required script references -->\n";

		// builder += "<script src=\"http://ajax.aspnetcdn.com/ajax/modernizr/modernizr-2.8.3.js\"></script>\n";

		builder += "<script src=\"http://code.jquery.com/jquery-1.11.3.min.js\"></script>\n";
		builder += "<script src=\"http://code.jquery.com/ui/1.11.1/jquery-ui.min.js\"></script>\n";
		return builder;
	}
	getScriptTags(): string {
		var config = require("../packages/components.json");
		var builder = "";
		builder += this.getJqueryDependenciesScriptTag();
		builder += "\n\n"
		builder += "<!-- Ignite UI Required Combined JavaScript Files -->\n";
		//builder += "<script src=\"$(igniteuiSource)\\js\\infragistics.core.js\"></script>\n";
		//builder += "<script src=\"$(igniteuiSource)\\js\\infragistics.lob.js\"></script>\n";
		builder += "<script src=\"../ignite-ui/js/infragistics.core.js\"></script>\n";
		builder += "<script src=\"../ignite-ui/js/infragistics.lob.js\"></script>\n";
		//Temporary
		if (this.dependencies.filter(x => config.dv.indexOf(x) != -1).length) {
			builder += "\n";
			//builder += "<script src=\"$(igniteuiSource)\\js\\infragistics.lob.js\"></script>\n";
			builder += "<script src=\"../ignite-ui/js/infragistics.dv.js\"></script>\n";
		}
		builder += this.getNavigationScript();
		return builder;
	}
	getNavigationScript():string {
		var builder = "";
		builder += "<script src=\"../ignite-cli-views.js\"></script>";
		builder += "<script src=\"../assets/navigation-header.js\"></script>";

		return builder;
	}

	getCssTags(): string {
		var builder = "";
		builder += "<!-- Ignite UI Required Combined CSS Files -->\n"
		builder += "<link href=\"../ignite-ui/css/themes/infragistics/infragistics.theme.css\" rel=\"stylesheet\" />\n";
		builder += "<link href=\"../ignite-ui/css/structure/infragistics.css\" rel=\"stylesheet\" />\n"
		//builder += "<link href=\"$(themePath)\" rel=\"stylesheet\" />\n";
		//builder += "<link href=\"$(igniteuiSource)\\css\\structure\\infragistics.css\" rel=\"stylesheet\" />\n"
		builder += "<link href=\"../assets/app.css\" rel=\"stylesheet\" />\n";
		return builder;
	}
}