import { ProjectConfig } from './../ProjectConfig';
import { exec } from 'shelljs';

import * as liteServ from "lite-server";
var command = {
	command: 'start',
	desc: 'start the project',
	builder: {},
	execute: async function (argv) {
		let config = ProjectConfig.getConfig();
		let framework = config.project.framework;
		switch (framework.toLowerCase()) {
			case "jquery":
				console.log("loading lite server: " + process.cwd() );
				liteServ.server();
				break;
			case "react":
				console.log("react project building");
				console.log(process.cwd());
				exec('npm start');
				liteServ.server();
			break;
			case "angular2":
				exec('npm start');
			break;
			default:
				liteServ.server();
				break;
		}
	}
};

export default command;