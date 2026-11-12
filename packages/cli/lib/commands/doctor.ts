import { GoogleAnalytics, Util } from "@igniteui/cli-core";
import { ArgumentsCamelCase } from "yargs";
import { formatJson, formatText, runDoctor, summarize } from "../doctor";
import { CommandType, PositionalArgs } from "./types";

const command: CommandType = {
	command: "doctor",
	describe: "Checks the environment and the current project for common problems",
	builder: (yargs) => {
		return yargs
			.option("json", {
				describe: "Print the results as JSON",
				type: "boolean",
				default: false
			})
			.option("offline", {
				describe: "Skip the checks that need the network",
				type: "boolean",
				default: false
			});
	},
	async handler(argv: ArgumentsCamelCase<PositionalArgs>) {
		if (!argv.offline) {
			try {
				GoogleAnalytics.post({
					t: "screenview",
					cd: "Doctor"
				});
			} catch { /* reads the config and runs npm, either of which the checks may report as broken */ }
		}

		const results = await runDoctor(!!argv.offline);
		Util.log(argv.json ? formatJson(results) : formatText(results));

		if (summarize(results).fail > 0) {
			process.exitCode = 1;
		}
	}
};

export default command;
