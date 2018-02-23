import * as fs from "fs-extra";
import * as liteServer from "lite-server";
import * as path from "path";
import { Util } from "../Util";

// TODO: remove. exec blocks main stdio!
import shell = require("shelljs");

// tslint:disable:object-literal-sort-keys
const command = {
	command: "quickstart",
	desc: "A quick start for your project",
	builder: {
		framework: {
			alias: "f",
			default: "jquery",
			describe: "Framework to setup quickstart for",
			type: "string",
			choices: ["jquery", "react", "angular"]
		}
	},
	async execute(argv) {
		Util.log("Quick Start!");
		const framework = argv.framework;
		let name = "";
		switch (framework) {
			case "jquery":
				name = "jquery-quickstart";
				break;
			case "react":
				name = "react-quickstart";
				break;
			case "angular":
				name = "angular-quickstart";
				break;
			default:
				throw new Error("The framework is not supported");
		}

		const outDir = path.join(process.cwd(), name);

		if (Util.directoryExists(path.join(__dirname, "../../templates/quickstart", argv.framework))) {
			await Util.processTemplates(path.join(__dirname, "../../templates/quickstart", argv.framework), outDir, {}, {});
		}
		//change folder
		process.chdir(name);
		if (argv.framework === "react") {
			Util.log("react-quickstart loaded");
			shell.exec("npm install");
			shell.exec("npm run webpack");
			liteServer.server();
		}

		if (argv.framework === "angular") {
			Util.log("react-quickstart loaded");
			shell.exec("npm install");
			shell.exec("npm start");
		}

		if (argv.framework === "jquery") {
			Util.log("jquery-quickstart loaded");
			liteServer.server();
		}
	}
};
export default command;
