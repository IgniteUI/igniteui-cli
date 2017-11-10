import { exec } from "shelljs";
import { ProjectConfig } from "./../ProjectConfig";

import * as liteServ from "lite-server";
import { Util } from "../Util";

// tslint:disable:object-literal-sort-keys
const command = {
	command: "start",
	desc: "start the project",
	builder: {},
	async execute(argv) {
		const config = ProjectConfig.getConfig();
		const framework = config.project.framework;
		switch (framework.toLowerCase()) {
			case "jquery":
				Util.log("loading lite server: " + process.cwd());
				liteServ.server();
				break;
			case "react":
				Util.log("react project building");
				Util.log(process.cwd());
				exec("npm start");
				liteServ.server();
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
