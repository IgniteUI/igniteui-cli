import { AddTemplateArgs, ControlExtraConfiguration, defaultDelimiters, ProjectConfig, Template, Util } from "@igniteui/cli-core";
import * as fs from "fs";
import * as path from "path";

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
	public delimiters = defaultDelimiters;

	private configFile: string = "ignite-cli-views.js";
	private replacePattern: RegExp = /\[[\s\S]*\](?=;)/;

	constructor(private rootPath: string) {
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = false;
		this.hasExtraConfiguration = false;
	}

	public get templatePaths(): string[] {
		return [path.join(this.rootPath, "files")];
	}

	public generateConfig(name: string, options: {}): {[key: string]: any} {
		let config = {};
		if (options["extraConfig"]) {
			config = options["extraConfig"];
		}

		const pathsConfig = {};
		const projectConfig = ProjectConfig.getConfig();
		if (projectConfig != null) {
			pathsConfig["igniteuiSource"] = projectConfig.project.igniteuiSource;
			pathsConfig["themePath"] = projectConfig.project.themePath;
		}
		config["path"] = this.folderName(name);
		config["name"] = Util.nameFromPath(name);
		config["cssBlock"] = this.getCssTags();
		config["scriptBlock"] = this.getScriptTags();
		config["description"] = this.description;
		config["theme"] = projectConfig.project.theme;
		config["cliVersion"] = Util.version();

		return config;
	}

	/**
	 * Add a view to the project config to be listed in index page
	 * @param projectPath
	 * @param name The name of the view
	 */
	public registerInProject(projectPath: string, name: string, options?: AddTemplateArgs) {
		if (options && options.skipRoute) {
			return;
		}
		let configFile = fs.readFileSync(path.join(projectPath, this.configFile), "utf8");
		const viewsArr = JSON.parse(this.replacePattern.exec(configFile)[0]);
		viewsArr.push({ name: Util.nameFromPath(name), path: this.getViewLink(name) });
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

		builder += "<script src=\"https://code.jquery.com/jquery-1.12.4.min.js\" integrity=\"sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=\" crossorigin=\"anonymous\"></script>\n";
		builder += "<script src=\"https://code.jquery.com/ui/1.12.1/jquery-ui.min.js\" integrity=\"sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=\" crossorigin=\"anonymous\"></script>\n";
		return builder;
	}
	protected getScriptTags(): string {
		// tslint:disable-next-line:no-submodule-imports
		const config = require("@igniteui/cli-core/packages/components");
		let builder = "";
		builder += this.getJqueryDependenciesScriptTag();
		builder += "\n\n";
		builder += "<!-- Ignite UI Required Combined JavaScript Files -->\n";
		//builder += "<script src=\"$(igniteuiSource)\\js\\infragistics.core.js\"></script>\n";
		//builder += "<script src=\"$(igniteuiSource)\\js\\infragistics.lob.js\"></script>\n";
		builder += "<script src=\"/ignite-ui/js/infragistics.core.js\"></script>\n";
		builder += "<script src=\"/ignite-ui/js/infragistics.lob.js\"></script>\n";
		// temporary:
		if (this.dependencies.filter(x => config.dv.indexOf(x) !== -1).length) {
			builder += "\n";
			//builder += "<script src=\"$(igniteuiSource)\\js\\infragistics.lob.js\"></script>\n";
			builder += "<script src=\"/ignite-ui/js/infragistics.dv.js\"></script>\n";
		}

		if (this.dependencies.indexOf("igExcel") !== -1) {
			builder += "<script src=\"/ignite-ui/js/infragistics.excel-bundled.js\"></script>\n";
		}

		if (this.dependencies.indexOf("igGridExcelExporter") !== -1) {
			builder += "<script src=\"/ignite-ui/js/modules/infragistics.gridexcelexporter.js\"></script>\n";
		}
		builder += this.getNavigationScript();
		return builder;
	}
	protected getNavigationScript(): string {
		let builder = "";
		builder += "<script src=\"/ignite-cli-views.js\"></script>";
		builder += "<script src=\"/assets/navigation.js\"></script>";

		return builder;
	}

	protected getCssTags(): string {
		let builder = "";
		builder += "<!-- Ignite UI Required Combined CSS Files -->\n";
		builder += "<link href=\"/ignite-ui/css/themes/infragistics/infragistics.theme.css\" rel=\"stylesheet\" />\n";
		builder += "<link href=\"/ignite-ui/css/structure/infragistics.css\" rel=\"stylesheet\" />\n";
		//builder += "<link href=\"$(themePath)\" rel=\"stylesheet\" />\n";
		//builder += "<link href=\"$(igniteuiSource)\\css\\structure\\infragistics.css\" rel=\"stylesheet\" />\n"
		builder += "<link href=\"/assets/app.css\" rel=\"stylesheet\" />\n";
		return builder;
	}

	//getViewPath
	protected folderName(pathName: string): string {
		let folderName = pathName;
		const parts = path.parse(pathName);
		if (parts.dir) {
			folderName = path.join(parts.dir, parts.name);
			folderName = folderName.replace(/\\/g, "/");
			const fullPath = path.join(process.cwd(), folderName);
			// path.join will also resolve any '..' segments
			// if it doesn't start with CWD it's out of project root
			if (!fullPath.startsWith(process.cwd())) {
				Util.error(`Path ${folderName} is not valid!`, "red");
				process.exit(1);
			}
			//clean up potential leading spaces in folder names (`path/    name`):
			folderName = folderName.replace(/\/\s+/g, "/");
		}
		return Util.lowerDashed(folderName);
	}
	protected getViewLink(pathName: string): string {
		const linkPath = this.folderName(pathName) + "/index.html";
		return linkPath;
	}
}
