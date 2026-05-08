import { addMcpServers, AI_AGENT_LABELS, AI_AGENT_CHOICES, AIAgentTarget, copyAgentInstructionFiles, copyAISkillsToProject, GoogleAnalytics, InquirerWrapper, Util, VS_CODE_MCP_PATH } from "@igniteui/cli-core";
import { ArgumentsCamelCase, CommandModule } from "yargs";

export function configureMCP(): void {
	const modified = addMcpServers(VS_CODE_MCP_PATH);

	if (!modified) {
		Util.log(` Ignite UI MCP servers already configured in ${VS_CODE_MCP_PATH}`);
		return;
	}
	Util.log(Util.greenCheck() + ` MCP servers configured in ${VS_CODE_MCP_PATH}`);
}

export function configureSkills(agents: AIAgentTarget[]): void {
	const result = copyAISkillsToProject(agents);
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

export async function configure(agents?: AIAgentTarget[], skills = true): Promise<void> {
	if (!agents?.length) {
		agents = await promptForAgents();
	}
	if (!agents.length) return;
	configureMCP();
	if (skills) {
		configureSkills(agents);
	}
	copyAgentInstructionFiles(agents);
}

const AI_AGENT_CHECKBOX_CHOICES = [
	{ value: "none", name: "None (skip AI configuration)" },
	...AI_AGENT_CHOICES.map(agent => ({
		value: agent,
		name: AI_AGENT_LABELS[agent],
		checked: agent === "generic" || agent === "claude"
	}))
];

export async function promptForAgents(): Promise<AIAgentTarget[]> {
	const selected = await InquirerWrapper.checkbox({
		message: "Which AI tools do you want to generate configuration files for?",
		required: true,
		choices: AI_AGENT_CHECKBOX_CHOICES
	});
	return selected.includes("none") ? [] : selected as AIAgentTarget[];
}

const command: CommandModule = {
	command: "ai-config",
	describe: "Configures Ignite UI AI tooling (MCP servers, AI coding skills and instructions)",
	builder: (yargs) => yargs
		.usage("")
		.option("agent", {
			alias: "a",
			describe: "AI agents/tools to generate configuration files for",
			choices: AI_AGENT_CHOICES,
			type: "array"
		}),
	async handler(argv: ArgumentsCamelCase) {
		let agents = argv.agent as AIAgentTarget[] | undefined;
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Ai Config"
		});

		if (!agents?.length) {
			agents = await promptForAgents();
		}
		GoogleAnalytics.post({
			t: "event",
			ec: "$ig ai-config",
			ea: `agent: ${agents.join(", ")}`
		});

		if (!agents.length) {
			Util.log("No AI configuration selected. Skipping.");
			return;
		}
		await configure(agents);
	}
};

export default command;
