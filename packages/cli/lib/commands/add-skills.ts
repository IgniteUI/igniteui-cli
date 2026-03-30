import { GoogleAnalytics, Util } from "@igniteui/cli-core";
import { copyAISkillsToProject } from "../ai-skills";
import { CommandType } from "./types";

const command: CommandType = {
	command: "add-skills",
	describe: "Copies AI coding skills to the current project",
	builder: {},
	async handler() {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Add Skills"
		});

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig add-skills"
		});

		const result = copyAISkillsToProject();
		if (result === "copied") {
			Util.log(Util.greenCheck() + " AI skills added to the project.");
		} else if (result === "up-to-date") {
			Util.log(Util.greenCheck() + " AI skills are already up to date.");
		} else {
			Util.warn("No AI skill files found. Make sure packages are installed (npm install) " +
				"and your Ignite UI package includes a skills/ directory.", "yellow");
		}
	}
};

export default command;
