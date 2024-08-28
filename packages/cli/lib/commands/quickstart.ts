import { GoogleAnalytics, Util } from "@igniteui/cli-core";
import * as path from "path";
import * as resolve from "resolve";
import { CommandType, PositionalArgs } from "./types";
import { ArgumentsCamelCase } from "yargs";

const command: CommandType = {
	command: "quickstart",
	describe: "creates rich feature grid",
	builder: {
		framework: {
			alias: "f",
			default: "jquery",
			describe: "Framework to setup quickstart for",
			type: "string",
			choices: ["jquery", "react", "angular"]
		}
	},
	async handler(argv: ArgumentsCamelCase<PositionalArgs>) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Quick Start"
		});

		Util.log("Quick Start!");
		const framework = argv.framework;
		let name = "";
		let type = "";
		switch (framework) {
			case "jquery":
				name = "jquery-quickstart";
				type = "js";
				break;
			case "react":
				name = "react-quickstart";
				type = "es6";
				break;
			case "angular":
				name = "angular-quickstart";
				type = "ig-ts";
				break;
			default:
				Util.error("The framework is not supported!", "red");
				return;
		}

		const outDir = path.join(process.cwd(), name);

		if (Util.directoryExists(path.join(__dirname, "../../templates/quickstart", argv.framework))) {
			await Util.processTemplates(path.join(__dirname, "../../templates/quickstart", argv.framework),
			outDir, {}, {}, false);
		}
		//change folder
		process.chdir(name);

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig quickstart",
			ea: `framework: ${argv.framework}`,
			cd1: framework,
			cd2: type,
			cd3: name
		});

		if (argv.framework === "react") {
			Util.log("react-quickstart loaded");
			Util.execSync("npm install");
			Util.execSync("npm run webpack");
			// lite-server installed per project
			const liteServer = require(resolve.sync("lite-server", { basedir: process.cwd() }));
			liteServer.server();
		}

		if (argv.framework === "angular") {
			Util.log("angular-quickstart loaded");
			Util.execSync("npm install");
			Util.execSync("npm start");
		}

		if (argv.framework === "jquery") {
			Util.log("jquery-quickstart loaded");
			Util.execSync("npm install");
			// lite-server installed per project
			const liteServer = require(resolve.sync("lite-server", { basedir: process.cwd() }));
			liteServer.server();
		}
	}
};
export default command;
