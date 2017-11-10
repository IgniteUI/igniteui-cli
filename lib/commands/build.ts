import * as fs from "fs-extra";
import * as path from "path";
import { Util } from "../Util";
import { PackageManager } from "./../packages/PackageManager";
import { ProjectConfig } from "./../ProjectConfig";

// tslint:disable:object-literal-sort-keys
const command = {
	command: "build",
	desc: "build the project",
	builder: {},
	async execute(argv) {
		Util.log("Build started.");
		PackageManager.ensureIgniteUISource(true);

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
