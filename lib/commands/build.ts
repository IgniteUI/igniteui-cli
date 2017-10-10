import * as fs from "fs-extra";
import * as path from "path";
import { PackageManager } from './../packages/PackageManager';
import { ProjectConfig } from './../ProjectConfig';
var command = {
	command: 'build',
	desc: 'build the project',
	builder: {},
	execute: async function (argv) {
		console.log("Build started.");
		PackageManager.ensureIgniteUISource(true);

		var config = ProjectConfig.getConfig();

		PackageManager.installPackages();

		if (config.project.theme.includes(".less") || config.project.theme.includes(".sass")) {
			fs.mkdirSync("./themes");
			var source = path.join(config.project.igniteuiSource, "/css/themes/", config.project.theme.split(".")[0]);
			var destination = path.join(config.project.sourceRoot, "themes");
			fs.copySync(source,  destination, {"recursive": true});
		}
	}
};
export default command;