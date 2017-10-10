import * as fs from "fs-extra";
import * as liteServer from "lite-server";
import * as path from 'path';
import { Util } from "../Util";

const shell = require('shelljs');

var command = {
	command: 'quickstart',
	desc: 'A quick start for your project',
	builder: {
		framework: {
			alias: "f",
			default: "jquery",
			describe: "Framework to setup quickstart for",
			type: "string",
			choices: ["jquery", "react", "angular2"]
		},
	},
	execute: async function (argv) {
		console.log("Quick Start!");
		var framework = argv.framework, name = "";
		switch (framework) {
			case "jquery":
				name = "jquery-quickstart";
				break;
			case "react":
				name = "react-quickstart";
				break;
			case "angular2":
				name = "angular2-quickstart";
				break;
			default:
				throw new Error("The framework is not supported");
		}
		
		var outDir = path.join(process.cwd(), name);

		if (Util.directoryExists(path.join(__dirname, "../../templates/quickstart", argv.framework))) {
			await Util.processTemplates(path.join(__dirname, "../../templates/quickstart", argv.framework), outDir, {}, {})
		}
		//change folder
		process.chdir(name);
		if(argv.framework == "react"){
			console.log("The files are loaded");
			shell.exec('npm install');
			shell.exec('npm run webpack');
			liteServer.server();
		}

		if(argv.framework == "angular2"){
			console.log("The files are loaded");
			shell.exec('npm install');
			shell.exec('npm start');
		}

		if (argv.framework == "jquery") {
			console.log("The files are loaded");
			liteServer.server();
		}
	}
};
export default command;