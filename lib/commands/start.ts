import * as  browserSync from "browser-sync";
import { exec } from "shelljs";
import { GoogleAnalytics } from "../GoogleAnalytics";
import { TemplateManager } from "../TemplateManager";
import { Util } from "../Util";
import { ProjectConfig } from "./../ProjectConfig";
import { default as build } from "./build";

let command: {
	[name: string]: any,
	templateManager: TemplateManager,
	execute: (argv: any) => Promise<void>,
	start: (argv: any) => Promise<void>
};
// tslint:disable:object-literal-sort-keys
command = {
	command: "start",
	desc: "starts the project",
	templateManager: null,
	builder: {
		port: {
			alias: "p",
			describe: "serve app port",
			type: "number"
		}
	},

	async execute(argv) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Start"
		});

		command.start(argv);
	},
	async start(argv) {
		if (!ProjectConfig.hasLocalConfig()) {
			Util.error("Start command is supported only on existing project created with igniteui-cli", "red");
			return;
		}

		//build
		await build.build({});

		const config = ProjectConfig.getConfig();
		const framework = config.project.framework;
		const projectType = config.project.projectType;
		const defaultPort = config.project.defaultPort;

		Util.log(`Starting project.`, "green");

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig start",
			cd1: framework,
			cd2: projectType,
			cd11: !!config.skipGit,
			cd14: config.project.theme
		});

		argv.port = Number(argv.port) || defaultPort;

		switch (framework.toLowerCase()) {
			case "jquery":
			browserSync.init(
				{ server: "./", port: argv.port });
			break;
			case "react":
				exec(`npm start -- --port=` + argv.port);
				break;
			case "angular":
				exec(`npm start -- --port=` + argv.port);
				break;
			default:
				break;
		}
	}
};

export default command;
