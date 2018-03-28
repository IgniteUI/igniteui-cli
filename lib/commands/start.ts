import * as liteServ from "lite-server";
import { exec } from "shelljs";
import { GoogleAnalytics } from "../GoogleAnalytic";
import { TemplateManager } from "../TemplateManager";
import { Util } from "../Util";
import { ProjectConfig } from "./../ProjectConfig";
import { default as build } from "./build";

let command: {
	[name: string]: any,
	templateManager: TemplateManager,
	execute: (argv: any) => Promise<void>
};
// tslint:disable:object-literal-sort-keys
command = {
	command: "start",
	desc: "starts the project",
	builder: {},
	templateManager: null,
	async execute(argv) {

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig start",
			ea: "user parameters",
			el: "no user parameters"
		});

		//build
		await build.execute({});

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
