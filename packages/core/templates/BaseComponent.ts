import * as path from "path";
import { Component, Template } from "../types";

// cross-ref, don't use barrel exports
import { Util } from "../util/Util";

export class BaseComponent implements Component {
	public templates: Template[];
	public name: string;
	public group: string;
	public description: string;
	public groupPriority = 0;
	private basePath: string = __dirname;

	/**
	 * Create a new Component
	 * @param rootPath Root path for the Component directory (__dirname)
	 */
	constructor(rootPath: string) {
		if (rootPath) {
			this.basePath = rootPath;
		}
		this.templates = this.loadTemplates();
	}

	private get templateIds(): string[] {
		return this.templates.map(x => x.id);
	}

	protected loadTemplates(): Template[] {
		let modulePath;
		const templates: Template[] = [];
		const templatePaths = Util.getDirectoryNames(this.basePath);

		for (const templatePath of templatePaths) {
			modulePath = path.join(this.basePath, templatePath);
			templates.push(require(modulePath));
		}
		return templates;
	}
}
