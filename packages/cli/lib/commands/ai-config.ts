import { addMcpServers, AI_AGENT_SKILLS_DIRS, AIAgentTarget, copyAISkillsToProject, getSkillsDir, GoogleAnalytics, Util, VS_CODE_MCP_PATH } from "@igniteui/cli-core";
import { ArgumentsCamelCase, CommandModule } from "yargs";

export function configureMCP(): void {
	const modified = addMcpServers(VS_CODE_MCP_PATH);

	if (!modified) {
		Util.log(` Ignite UI MCP servers already configured in ${VS_CODE_MCP_PATH}`);
		return;
	}
	Util.log(Util.greenCheck() + ` MCP servers configured in ${VS_CODE_MCP_PATH}`);
}

export function configureSkills(skillsDir?: string): void {
	const result = copyAISkillsToProject(skillsDir);
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

export function configure(skills = true, skillsDir?: string): void {
	configureMCP();
	if (skills) {
		configureSkills(skillsDir);
	}
}

const AI_AGENT_CHOICES = Object.keys(AI_AGENT_SKILLS_DIRS) as AIAgentTarget[];

const command: CommandModule = {
	command: "ai-config",
	describe: "Configure Ignite UI AI tooling (MCP servers and AI coding skills)",
	builder: (yargs) => yargs
		.usage("")
		.option("agent", {
			alias: "a",
			describe: "AI agent to configure skills for (determines the target skills directory)",
			choices: AI_AGENT_CHOICES,
			type: "string"
		})
		.option("skills-dir", {
			alias: "d",
			describe: "Custom skills directory path (overrides --agent)",
			type: "string"
		}),
	async handler(argv: ArgumentsCamelCase) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "MCP"
		});

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig ai-config",
			ea: `client: vscode, agent: ${argv.agent ?? "default"}`
		});

		const skillsDir = (argv.skillsDir as string) ?? (argv.agent ? getSkillsDir(argv.agent as AIAgentTarget) : undefined);
		configure(true, skillsDir);
	}
};

export default command;
