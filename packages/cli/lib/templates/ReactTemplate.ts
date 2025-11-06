import { AddTemplateArgs, ControlExtraConfiguration, defaultDelimiters, Template, Util } from "@igniteui/cli-core";
import * as fs from "fs";
import * as path from "path";

export class ReactTemplate implements Template {
	public components: string[];
	public controlGroup: string;
	public listInComponentTemplates: boolean = true;
	public listInCustomTemplates: boolean = false;
	public id: string;
	public name: string;
	public description: string;
	public dependencies: string[] = [];
	public framework: string = "react";
	public projectType: string;
	public hasExtraConfiguration: boolean = false;
	public packages = [];
	public delimiters = defaultDelimiters;

	// non-standard template prop
	protected widget: string;

	private appRoutsPath: string = "./src/routes.json";
	private igniteResources: string = "src/igniteuiResources.js";

	/**
	 * Base ReactTemplate constructor
	 * @param rootPath The template folder path. Pass in `__dirname`
	 */
	constructor(private rootPath: string) { }

	public get templatePaths(): string[] {
		return [path.join(this.rootPath, "files")];
	}

	public generateConfig(name: string, options: {}): { [key: string]: any } {
		let config = {};
		if (options["extraConfig"]) {
			config = options["extraConfig"];
		}

		config["path"] = this.folderName(name); //folder name allowed spaces, any casing
		config["name"] = Util.nameFromPath(name); // this name should not have restrictions
		config["ClassName"] = Util.className(Util.nameFromPath(name)); //first letter capital, no spaces and no dashes,
		config["cliVersion"] = Util.version();
		if (this.widget) {
			config["widget"] = this.widget;
			config["Control"] = Util.className(this.widget);
		}
		if (this.description) {
			config["description"] = this.description;
		}
		return config;
	}

	public registerInProject(projectPath: string, name: string, options?: AddTemplateArgs) {
		if (options && options.skipRoute) {
			return;
		}
		// add Routing config for each added component
		const appRoutsFile = fs.readFileSync(path.join(projectPath, this.appRoutsPath), "utf8");
		const viewsArr = JSON.parse(appRoutsFile);
		viewsArr.push({
			// tslint:disable:object-literal-sort-keys
			path: "/" + this.folderName(Util.nameFromPath(name)),
			componentPath: this.getViewLink(name),
			text: this.getNavText(name)
		});

		fs.writeFileSync(path.join(projectPath, this.appRoutsPath), JSON.stringify(viewsArr, null, 4));
		this.registerSourceFiles(projectPath);
	}

	public getExtraConfiguration(): ControlExtraConfiguration[] {
		throw new Error("Method not implemented.");
	}

	public setExtraConfiguration(extraConfigKeys: {}) {
		throw new Error("Method not implemented.");
	}

	protected folderName(pathName: string): string {
		//TODO: should remove the spaces
		const parts = path.parse(pathName);
		let folderName = pathName;
		if (parts.dir) {
			folderName = path.join(parts.dir, parts.name);
			folderName = folderName.replace(/\\/g, "/");
			// TODO: config-based "src/app"?
			const relative = path.join(process.cwd(), "components", folderName);
			// path.join will also resolve any '..' segments
			// so if relative result doesn't start with CWD it's out of project root
			if (!relative.startsWith(process.cwd())) {
				Util.error(`Path ${"components/" + folderName} is not valid!`, "red");
				process.exit(1);
			}
			//clean up potential leading spaces in folder names (`path/    name`):
			folderName = folderName.replace(/\/\s+/g, "/");
		}
		return Util.lowerDashed(folderName);
	}

	protected getViewLink(name: string): string {
		return "./components/" + this.folderName(name);
	}

	protected registerSourceFiles(projectPath: string) {
		// tslint:disable:no-submodule-imports
		const components = require("@igniteui/cli-core/packages/components");
		const igResPath = path.join(projectPath, this.igniteResources);

		try {
			const fd = fs.openSync(igResPath, fs.constants.O_RDWR | fs.constants.O_CREAT);
			let igniteuiResFile = fs.readFileSync(fd, "utf8");
			const freeVersionPath = "ignite-ui/";
			const fullVersionPath = "@infragistics/ignite-ui-full/en/";
			const dvPath = "@infragistics/ignite-ui-full/en/js/infragistics.dv.js";

			const dvDep = this.dependencies.filter(x => components.dv.indexOf(x) !== -1).length !== 0;
			const fullDep = this.dependencies.filter(x => components.full.indexOf(x) !== -1).length !== 0;

			if (fullDep) {
				while (igniteuiResFile.includes(freeVersionPath)) {
					igniteuiResFile = igniteuiResFile.replace(freeVersionPath, fullVersionPath);
					igniteuiResFile = igniteuiResFile.replace("-lite", "");
				}
				fs.ftruncateSync(fd, 0);
				fs.writeSync(fd, igniteuiResFile);
			}

			if (dvDep && !igniteuiResFile.includes(dvPath)) {
				fs.writeSync(fd, `\r\n// Ignite UI Charts Required JavaScript File\r\nimport "${dvPath}";\r\n`);
			}

			fs.closeSync(fd);
		} catch (err) {
			Util.error(`Error while updating igniteuiResources.js: ${err.message}`);
			throw err;
		}
	}

	protected getNavText(name: string): string {
		name = Util.nameFromPath(name);
		return name.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
	}
}
