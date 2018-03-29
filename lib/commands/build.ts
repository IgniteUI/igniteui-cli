import * as fs from "fs-extra";
import * as path from "path";
import { GoogleAnalytics } from "../GoogleAnalytic";
import { TemplateManager } from "../TemplateManager";
import { Util } from "../Util";
import { PackageManager } from "./../packages/PackageManager";
import { ProjectConfig } from "./../ProjectConfig";

let command: {
	[name: string]: any,
	templateManager: TemplateManager,
	execute: (argv: any) => Promise<void>,
	build: (argv: any) => Promise<void>
};
// tslint:disable:object-literal-sort-keys
command = {
	command: "build",
	desc: "builds the project",
	builder: {},
	templateManager: null,
	async execute(argv?) {

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig build",
			ea: "user parameters",
			el: "no user parameters"
		});
		command.build(argv);
	},
	async build(argv?) {
		Util.log("Build started.");
		PackageManager.ensureIgniteUISource(true, command.templateManager);

		const config = ProjectConfig.getConfig();

		PackageManager.installPackages();

		if (config.project.theme.includes(".less") || config.project.theme.includes(".sass")) {
			fs.mkdirSync("./themes");
			const source = path.join(config.project.igniteuiSource, "/css/themes/", config.project.theme.split(".")[0]);
			const destination = path.join(config.project.sourceRoot, "themes");
			fs.copySync(source,  destination, {recursive: true});
		}
	}
};
export default command;
