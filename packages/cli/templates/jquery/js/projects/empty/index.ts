import { ControlExtraConfiguration, defaultDelimiters, ProjectTemplate, Util } from "@igniteui/cli-core";
import * as fs from "fs";
import * as path from "path";

class EmptyProject implements ProjectTemplate {
	public id: string = "jquery";
	public name: string = "jquery with Javascript";
	public description: string = "Ignite UI CLI project for jQuery";
	public dependencies: string[];
	public framework: string = "jquery";
	public projectType: string = "js";
	public hasExtraConfiguration: boolean = false;
	public routesFile = "bs-routes.json";
	public delimiters = defaultDelimiters;

	public get templatePaths(): string[] {
		return [path.join(__dirname, "files")];
	}

	public async upgradeIgniteUIPackages(projectPath: string, packagePath: string): Promise<boolean> {
		const filePath = path.join(projectPath, this.routesFile);
		const routes = fs.readFileSync(path.join(projectPath, this.routesFile), "utf8");
		const config = JSON.parse(routes);

		delete config.routes["/ignite-ui/js/infragistics.core.js"];
		delete config.routes["/ignite-ui/js/infragistics.lob.js"];
		config.routes["/ignite-ui"] = packagePath;

		fs.writeFileSync(filePath, JSON.stringify(config, null, 4));
		return true;
	}

	public generateConfig(name: string, theme: string, ...options: any[]): { [key: string]: any } {
		let themePath = "";
		if (theme.indexOf(".less") !== -1 || theme.indexOf(".scss") !== -1) {
			themePath = ".themes/" + theme.split(".")[0] + "/infragistics.theme.css";
		} else {
			themePath = "$(igniteuiSource)/css/themes/" + theme + "/infragistics.theme.css";
		}
		return {
			name,
			theme,
			themePath,
			"cliVersion": Util.version(),
			"dash-name": Util.lowerDashed(name),
			"description": this.description,
			"dot": ".",
			"igniteuiSource": "./node_modules/ignite-ui"
		};
	}

	public installModules(): void {
		throw new Error("Method not implemented.");
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [];
	}
	public setExtraConfiguration(extraConfigKeys: {}) { }
}
module.exports = new EmptyProject();
