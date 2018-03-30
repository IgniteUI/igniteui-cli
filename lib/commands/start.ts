import * as liteServ from "lite-server";
import { exec } from "shelljs";
import { GoogleAnalytic } from "../GoogleAnalytic";
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
	builder: {},
	templateManager: null,
	async execute(argv) {
		GoogleAnalytic.post({
			t: "event",
			ec: "$ig start",
			ea: "user parameters",
			el: "no user parameters"
		});

		if (!ProjectConfig.hasLocalConfig()) {
			Util.error("Start command is supported only on existing project created with igniteui-cli", "red");
			return;
		}

		command.start(argv);
	},
	async start(argv) {
		//build
		await build.build({});

		const config = ProjectConfig.getConfig();
		const framework = config.project.framework;

		Util.log(`Starting project.`, "green");

		switch (framework.toLowerCase()) {
			case "jquery":
				liteServ.server();
				break;
			case "react":
				exec("npm start");
				break;
			case "angular":
				exec("npm start");
				break;
			default:
				liteServ.server();
				break;
		}
	}
};

export default command;
