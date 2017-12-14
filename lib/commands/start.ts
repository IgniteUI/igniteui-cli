import * as liteServ from "lite-server";
import { exec } from "shelljs";

import { Util } from "../Util";
import { ProjectConfig } from "./../ProjectConfig";
import { default as build } from "./build";

// tslint:disable:object-literal-sort-keys
const command = {
	command: "start",
	desc: "start the project",
	builder: {},
	async execute(argv) {
		//build
		await build.execute();

		const config = ProjectConfig.getConfig();
		const framework = config.project.framework;

		Util.log(`Starting project.`, "green");

		switch (framework.toLowerCase()) {
			case "jquery":
				liteServ.server();
				break;
			case "react":
				Util.log(process.cwd());
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
