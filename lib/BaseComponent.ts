import * as path from "path";
import { Util } from "./Util";

export class BaseComponent implements Component {
	templates: Template[];
	name: string;
	group: string;
	private basePath: string = __dirname;
	
	/**
	 * Create a new Component
	 * @param rootPath Root path for the Component directory (__dirname)
	 */
	constructor(rootPath: string) {
		if (rootPath) {
			this.basePath = rootPath;
		}
		this.templates = this.loadTempaltes();
	}

	private get templateIds() : string[] {
		return this.templates.map(x => x.id);
	}

	protected loadTempaltes(): Template[] {
		var modulePath, templates: Template[] = [],
			templatePaths = Util.getDirectoryNames(this.basePath);

		for (var i = 0; i < templatePaths.length; i++) {
			modulePath = path.join(this.basePath,  templatePaths[i]);
			templates.push(require(modulePath));
			if (!templates[templates.length-1].id) {
				console.error("NO ID!!!", templates[templates.length-1].name);
			}
		}
		return templates;
	}
}