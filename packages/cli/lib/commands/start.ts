import { GoogleAnalytics, ProjectConfig, Util } from "@igniteui/cli-core";
import { ExecSyncOptions, spawnSync, SpawnSyncOptions } from "child_process";
import * as path from "path";
import * as resolve from "resolve";
import { TemplateManager } from "../TemplateManager";
import { default as build } from "./build";

const execSyncNpmStart = (port: number, options: any): void => {
	if (port) {
		Util.execSync(`npm start -- --port=${port}`, options);
		return;
	}
	Util.execSync(`npm start`, options);
};

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

		let port = Number(argv.port) || defaultPort;
		// TODO: consider piping the stdin so that we handle the cp's termination
		// this may require additional logic to be implemented if the cp asks for input
		const options: ExecSyncOptions = { stdio: "inherit", killSignal: "SIGINT" };
		switch (framework.toLowerCase()) {
			case "jquery":
				// browser-sync installed per project
				const bs = require(resolve.sync("browser-sync", { basedir: process.cwd() }));
				const browserSync = bs.create("igniteui-cli");
				const filePath = path.join(process.cwd(), "bs-config.js");
				const bsConfig = require(filePath);
				if (port) {
					bsConfig.port = port;
				}

				browserSync.init(bsConfig);
				break;
			case "react":
				if (port) {
					// https://facebook.github.io/create-react-app/docs/advanced-configuration
					// react-scripts start "--port=dafaultPort" is not a valid command for all environments.
					// .env file is included and used by both igr-es6 and es6 now,
					// to specify the port for all environments (Windows, Mac, etc)
					process.env.PORT = `${port}`;
					port = null;
				}
			/* falls through */
			case "angular":
			case "webcomponents":
				execSyncNpmStart(port, options);
			default:
				break;
		}
	}
};

export default command;
