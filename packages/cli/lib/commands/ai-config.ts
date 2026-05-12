import { addMcpServers, AI_AGENT_LABELS, AI_AGENT_CHOICES, AIAgentTarget, copyAgentInstructionFiles, copyAISkillsToProject, GoogleAnalytics, InquirerWrapper, Util, AiCodingAssistant, AI_ASSISTANT_MCP_CONFIGS, AI_ASSISTANT_CHOICES, AI_ASSISTANT_LABELS } from "@igniteui/cli-core";
import { ArgumentsCamelCase, CommandModule } from "yargs";

export function configureMCP(assistants: AiCodingAssistant[]): void {
	for (const assistant of assistants) {
		const { mcpFilePath } = AI_ASSISTANT_MCP_CONFIGS[assistant];
		const modified = addMcpServers(assistant);

		if (!modified) {
			Util.log(` Ignite UI MCP servers already configured in ${mcpFilePath}`);
		} else {
			Util.log(Util.greenCheck() + ` MCP servers configured in ${mcpFilePath}`);
		}
	}
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

export async function configure(agents: AIAgentTarget[] = [], assistants: AiCodingAssistant[] = [], prompt = true, skills = true): Promise<void> {
	if (!agents.length && prompt) {
		agents = await promptForAgents();
	}

	if (!assistants.length && prompt) {
		assistants = await promptForAssistant();
	}
	configureMCP(assistants);

	if (skills) {
		configureSkills(agents);
	}
	copyAgentInstructionFiles(agents);
}

const AI_AGENT_CHECKBOX_DEFAULTS: AIAgentTarget[] = ["generic", "claude"];

const AI_ASSISTANT_CHECKBOX_DEFAULTS: AiCodingAssistant[] = ["general"];

const AI_AGENT_CHECKBOX_CHOICES = [
	{ value: "none", name: "None (skip skills and instructions)" },
	...AI_AGENT_CHOICES.map(agent => ({
		value: agent,
		name: AI_AGENT_LABELS[agent],
		checked: AI_AGENT_CHECKBOX_DEFAULTS.includes(agent)
	}))
];

const AI_ASSISTANT_CHECKBOX_CHOICES = [
	{ value: "none", name: "None (skip MCP configuration)" },
	...AI_ASSISTANT_CHOICES.map(a => ({
		value: a,
		name: AI_ASSISTANT_LABELS[a],
		checked: AI_ASSISTANT_CHECKBOX_DEFAULTS.includes(a)
	}))
];

export async function promptForAgents(): Promise<AIAgentTarget[]> {
	let selected: AIAgentTarget[] = AI_AGENT_CHECKBOX_DEFAULTS;
	if (Util.canPrompt()) {
		const result = await InquirerWrapper.checkbox({
			message: "Which AI agents do you want to generate skills and instructions for?",
			required: true,
			choices: AI_AGENT_CHECKBOX_CHOICES
		});
		selected = result.includes("none") ? [] : result as AIAgentTarget[];
	}
	return selected;
}

export async function promptForAssistant(): Promise<AiCodingAssistant[]> {
	let selected: AiCodingAssistant[] = AI_ASSISTANT_CHECKBOX_DEFAULTS;
	if (Util.canPrompt()) {
		const result = await InquirerWrapper.checkbox({
			message: "Which coding assistants should MCP servers be configured for?",
			required: true,
			choices: AI_ASSISTANT_CHECKBOX_CHOICES
		});
		selected = result.includes("none") ? [] : result as AiCodingAssistant[];
	}
	return selected;
}

const command: CommandModule = {
	command: "ai-config",
	describe: "Configures Ignite UI AI tooling (MCP servers, AI coding skills and instructions)",
	builder: (yargs) => yargs
		.usage("")
		.option("agents", {
			alias: "a",
			describe: "AI agents/tools to generate configuration files for",
			choices: [...AI_AGENT_CHOICES, "none"] as string[],
			type: "array"
		})
		.option("assistants", {
			describe: "Coding assistant(s) to configure MCP servers for",
			choices: [...AI_ASSISTANT_CHOICES, "none"] as string[],
			type: "array"
		}),
	async handler(argv: ArgumentsCamelCase) {
		const rawAgents = argv.agents as string[] | undefined;
		const rawAssistants = argv.assistants as string[] | undefined;
		const agentNoneSelected = rawAgents ? rawAgents.indexOf("none") !== -1 : false;
		const assistantNoneSelected = rawAssistants ? rawAssistants.indexOf("none") !== -1 : false;
		let agents = (rawAgents?.filter(a => a !== "none") ?? []) as AIAgentTarget[];
		let assistants = (rawAssistants?.filter(a => a !== "none") ?? []) as AiCodingAssistant[];
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Ai Config"
		});

		if (!agentNoneSelected && !agents.length) {
			agents = await promptForAgents();
		}
		if (!assistantNoneSelected && !assistants.length) {
			assistants = await promptForAssistant();
		}

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig ai-config",
			ea: `agent: ${agents?.join(", ") || "none"}; assistant: ${assistants?.join(", ") || "none"}`
		});

		if (!assistants.length) {
			Util.log("No MCP configuration selected. Skipping.");
		}

		if (!agents.length) {
			Util.log("No AI configuration selected. Skipping.");
		}
		await configure(agents, assistants);
	}
};

export default command;
