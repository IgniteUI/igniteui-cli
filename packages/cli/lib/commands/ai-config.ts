import { AI_AGENT_LABELS, AI_AGENT_SKILLS_DIRS, AIAgentTarget, configureMcpForAgents, copyAgentInstructionFiles, copyAISkillsToProject, getSkillsDir, GoogleAnalytics, InquirerWrapper, Util } from "@igniteui/cli-core";
import { ArgumentsCamelCase, CommandModule } from "yargs";

export function configureSkills(skillsDir: string): void {
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

export function configure(agents: AIAgentTarget[]): void {
	configureMcpForAgents(agents);
	for (const agent of agents) {
		configureSkills(getSkillsDir(agent));
	}
	copyAgentInstructionFiles(agents);
}

const AI_AGENT_CHOICES = Object.keys(AI_AGENT_SKILLS_DIRS) as AIAgentTarget[];

const AI_AGENT_CHECKBOX_CHOICES = [
	{ value: "none", name: "None (skip AI configuration)" },
	...AI_AGENT_CHOICES.map(agent => ({
		value: agent,
		name: AI_AGENT_LABELS[agent],
		checked: agent === "generic" || agent === "claude"
	}))
];

const command: CommandModule = {
	command: "ai-config",
	describe: "Configures Ignite UI AI tooling (MCP servers and AI coding skills)",
	builder: (yargs) => yargs
		.usage("")
		.option("agent", {
			alias: "a",
			describe: "AI agent(s) to configure skills for (determines the target skills directory)",
			choices: AI_AGENT_CHOICES,
			type: "array"
		}),
	async handler(argv: ArgumentsCamelCase) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "MCP"
		});

		let agents = argv.agent as AIAgentTarget[] | undefined;

		if (!agents?.length) {
			const selected = await InquirerWrapper.checkbox({
				message: "Which AI tools do you want to generate configuration files for?",
				choices: AI_AGENT_CHECKBOX_CHOICES
			});
			agents = selected.includes("none") ? [] : selected as AIAgentTarget[];
		}

		if (!agents.length) {
			Util.log("No AI configuration selected. Skipping.");
			return;
		}

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig ai-config",
			ea: `agent: ${agents.join(", ")}`
		});

		configure(agents);
	}
};

export default command;
