import { GoogleAnalytics, PackageManager, ProjectConfig, Util } from "@igniteui/cli-core";
import * as fs from "fs-extra";
import * as path from "path";
import { BuildCommandType, PositionalArgs } from "./types";
import { ArgumentsCamelCase } from "yargs";

const command: BuildCommandType = {
	command: "build",
	describe: "builds the project",
	builder: {},
	templateManager: null,
	async handler(argv: ArgumentsCamelCase<PositionalArgs>) {

		GoogleAnalytics.post({
			t: "screenview",
			cd: "Build"
		});
		command.build(argv);
	},
	async build(argv?) {
		Util.log("Build started.");
		await PackageManager.ensureIgniteUISource(true, command.templateManager);

		if (!ProjectConfig.hasLocalConfig()) {
			Util.error("Add command is supported only on existing project created with igniteui-cli", "red");
			return;
		}

		const config = ProjectConfig.getConfig();

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig build",
			cd1: config.project.framework,
			cd2: config.project.projectType,
			cd11: !!config.skipGit,
			cd14: config.project.theme
		});

		await PackageManager.installPackages();
		if (config.project.projectType === "es6") {
			return;
		}
		if (config.project.theme.includes(".less") || config.project.theme.includes(".sass")) {
			fs.mkdirSync("./themes");
			const source = path.join(config.project.igniteuiSource, "/css/themes/", config.project.theme.split(".")[0]);
			const destination = path.join(config.project.sourceRoot, "themes");
			fs.copySync(source, destination);
		}
	}
};
export default command;
