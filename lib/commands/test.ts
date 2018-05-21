import { GoogleAnalytics } from "../GoogleAnalytics";
import { ProjectConfig } from "../ProjectConfig";
import { Util } from "../Util";

const command = {
	// tslint:disable:object-literal-sort-keys
	command: "test",
	desc: "executes project tests",
	builder: {
		e2e: {
			describe: "Executes end-to-end tests",
			type: "boolean"
		}
	},
	async execute(argv) {

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig test",
			ea: "user parameters",
			el: `e2e: ${argv.e2e};`
		});

		if (!ProjectConfig.hasLocalConfig()) {
			Util.error("Test command is supported only on existing project created with igniteui-cli", "red");
			return;
		}

		command.test(argv);
	},
	async test(argv) {
		const projConfig = ProjectConfig.getConfig().project;

		if (!argv.skipAnalytics) {
			GoogleAnalytics.post({
				cd: "Build",
				t: "screenview",
				cd1: projConfig.project.framework,
				cd2: projConfig.project.projectType,
				cd11: projConfig.skipGit,
				cd14: projConfig.project.theme
			});
		}

		if (argv.e2e && projConfig.framework === "angular" && projConfig.projectType === "igx-ts") {
			Util.exec("npm run e2e", { stdio: "inherit" });
		} else {
			Util.exec("npm test", { stdio: "inherit" });
		}
	}
};
export default command;
