import {
	addMcpServers,
	AI_AGENT_LABELS,
	AI_AGENT_CHOICES,
	type AIAgentTarget,
	copyAgentInstructionFiles,
	copyAISkillsToProject,
	GoogleAnalytics,
	InquirerWrapper,
	Util,
	type AiCodingAssistant,
	AI_ASSISTANT_MCP_CONFIGS,
	AI_ASSISTANT_CHOICES,
	AI_ASSISTANT_LABELS,
	detectFramework,
	App,
	type BaseTemplateManager,
	TEMPLATE_MANAGER,
} from "@igniteui/cli-core";
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

export function configureSkills(agents: AIAgentTarget[], framework: string): void {
	const result = copyAISkillsToProject(agents, framework);
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

type AIAgentOption = AIAgentTarget | "none";
type AIAssistantOption = AiCodingAssistant | "none";

export async function configure(framework: string, agents: AIAgentOption[] = [], assistants: AIAssistantOption[] = [], skills = true): Promise<{ agents: AIAgentTarget[], assistants: AiCodingAssistant[] }> {
	if (!agents.length) {
		agents = await promptForAgents();
	}

	if (!assistants.length) {
		assistants = await promptForAssistant();
	}

	const resolvedAgents: AIAgentTarget[] = agents.includes("none") ? [] : agents as AIAgentTarget[];
	const resolvedAssistants: AiCodingAssistant[] = assistants.includes("none") ? [] : assistants as AiCodingAssistant[];

	if (!resolvedAssistants.length) {
		Util.log("No MCP configuration selected. Skipping.");
	}
	configureMCP(resolvedAssistants);

	if (!resolvedAgents.length) {
		Util.log("No AI configuration selected. Skipping.");
	} else {
		if (skills) {
			configureSkills(resolvedAgents, framework);
		}
		copyAgentInstructionFiles(resolvedAgents, framework);
	}

	return { agents: resolvedAgents, assistants: resolvedAssistants };
}

const AI_AGENT_CHECKBOX_DEFAULTS: AIAgentTarget[] = ["generic", "claude"];
const AI_ASSISTANT_CHECKBOX_DEFAULTS: AiCodingAssistant[] = ["generic"];

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

async function promptForAgents(): Promise<AIAgentOption[]> {
	let selected: AIAgentOption[] = AI_AGENT_CHECKBOX_DEFAULTS;
	if (Util.canPrompt()) {
		const result = await InquirerWrapper.checkbox({
			message: "Which AI agents do you want to generate skills and instructions for?",
			required: true,
			choices: AI_AGENT_CHECKBOX_CHOICES
		});
		selected = result as AIAgentOption[];
	}
	return selected;
}

async function promptForAssistant(): Promise<AIAssistantOption[]> {
	let selected: AIAssistantOption[] = AI_ASSISTANT_CHECKBOX_DEFAULTS;
	if (Util.canPrompt()) {
		const result = await InquirerWrapper.checkbox({
			message: "Which coding assistants should MCP servers be configured for?",
			required: true,
			choices: AI_ASSISTANT_CHECKBOX_CHOICES
		});
		selected = result as AIAssistantOption[];
	}
	return selected;
}

/** delayed call so it's not immediate on module import for testing purposes */
function getTemplateManager(): BaseTemplateManager {
	return App.container.get<BaseTemplateManager>(TEMPLATE_MANAGER);
}

/** Separate from the PromptSession prompt due to step by step config */
async function promptForFrameworkId(): Promise<string> {
	const tm = getTemplateManager();
	const frameRes: string = await InquirerWrapper.select({
		name: "framework",
		message: "Choose framework:",
		choices: tm.getFrameworkNames(),
		default: "Angular"
	});
	return tm.getFrameworkByName(frameRes).id;
}

const command: CommandModule = {
	command: "ai-config",
	describe: "Configures Ignite UI AI tooling (MCP servers, AI coding skills and instructions)",
	builder: (yargs) => yargs
		.usage("")
		.option("agents", {
			describe: "AI agents/tools to generate configuration files for",
			choices: [...AI_AGENT_CHOICES, "none"] as string[],
			type: "array"
		})
		.option("assistants", {
			describe: "Coding assistant(s) to configure MCP servers for",
			choices: [...AI_ASSISTANT_CHOICES, "none"] as string[],
			type: "array"
		})
		.option("framework", {
			alias: "f",
			describe: "Manually set project framework to configure AI for.",
			choices: getTemplateManager()?.getFrameworkIds(),
			type: "string"
		}),
	async handler(argv: ArgumentsCamelCase) {
		const agents = (argv.agents ?? []) as AIAgentOption[];
		const assistants = (argv.assistants ?? []) as AIAssistantOption[];
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Ai Config"
		});

		let framework: string = argv.framework as string ?? detectFramework();
		if (!framework) {
			Util.log("Framework not provided and couldn't detect project from config or structure.");
			if (Util.canPrompt()) {
				framework = await promptForFrameworkId();
			} else {
				return Util.error("Please provide --framework argument.", "red");
			}
		}
		if (!getTemplateManager()?.getFrameworkById(framework)) {
			return Util.error("Framework not supported", "red");
		}

		const result = await configure(framework, agents, assistants);

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig ai-config",
			ea: `agent: ${result.agents.join(", ") || "none"}; assistant: ${result.assistants.join(", ") || "none"}`
		});
	}
};

export default command;
