import { addMcpServers, copyAISkillsToProject, GoogleAnalytics, Util } from "@igniteui/cli-core";
import { ArgumentsCamelCase, CommandModule } from "yargs";

export function configureMCP(): void {
	const modified = addMcpServers();

	if (!modified) {
		Util.log(` Ignite UI MCP servers already configured`);
		return;
	}
	Util.log(Util.greenCheck() + ` MCP servers configured`);
}

export function configureSkills(): void {
	const result = copyAISkillsToProject();
	if (result.found === 0) {
		Util.warn("No AI skill files found. Make sure packages are installed (npm install) " +
			"and your Ignite UI packages are up-to-date.", "yellow");
	} else if (result.failed > 0) {
		Util.warn(`Failed to write ${result.failed} skill file(s) out of ${result.found}.`, "yellow");
	} else if (result.skipped === result.found) {
		Util.log("Everything is already up-to-date.");
	} else {
		const written = result.found - result.skipped;
		Util.log(Util.greenCheck() + ` ${written} AI skill file(s) created or updated.`);
	}
}

export function configure(skills = true): void {
	configureMCP();
	if (skills) {
		configureSkills();
	}
}

const command: CommandModule = {
	command: "ai-config",
	describe: "Configure Ignite UI AI tooling (MCP servers and AI coding skills)",
	builder: (yargs) => yargs.usage(""),
	async handler(_argv: ArgumentsCamelCase) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "MCP"
		});

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig ai-config",
			ea: "client: vscode"
		});

		configure();
	}
};

export default command;
