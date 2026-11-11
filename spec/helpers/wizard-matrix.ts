import { BaseTemplateManager, ControlExtraConfigType } from "@igniteui/cli-core";

/** Wizard prompt messages that do not come from template data. */
export const PROMPTS = {
	name: "Enter a name for your project:",
	framework: "Choose framework:",
	projectType: "Choose the type of project:",
	template: "Choose project template:",
	auth: "Would you like to add authentication (login, register, social login)?",
	theme: "Choose the theme for the project:",
	agents: "Which AI agents do you want to generate skills and instructions for?",
	assistants: "Which coding assistants should MCP servers be configured for?",
	action: "Choose an action:",
	upgrade: "Would you like to upgrade to the licensed feed now?",
	runApp: "Run the app now (dotnet run)?"
} as const;

export const COMPLETE_ACTION = "Complete and Install packages";

export interface WizardExtraAnswer {
	key: string;
	message: string;
	value: string;
}

export interface WizardScenario {
	/** Unique within its framework, safe as a folder/project name suffix. */
	id: string;
	framework: string;
	frameworkName: string;
	projectType: string;
	libraryName: string;
	/** Id of the template picked from the list (without the -auth suffix). */
	template: string;
	templateName: string;
	/** undefined when the template offers no authentication variant. */
	auth: boolean | undefined;
	/** Id of the project that gets generated (template id, or its -auth variant). */
	projectId: string;
	theme: string;
	extra: WizardExtraAnswer[];
	askProjectType: boolean;
	askTemplate: boolean;
	askTheme: boolean;
	askAction: boolean;
	/** Values per dimension, used for sampling. */
	dims: Record<string, string>;
}

export interface PromptAnswer {
	/** Value the prompt resolves to. */
	value: string | boolean;
	/** Text shown for that choice in the terminal, when it differs from the value. */
	label?: string;
}

export type Coverage = "each" | "pairs" | "all";

function slug(value: string): string {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function cartesian<T>(lists: T[][]): T[][] {
	return lists.reduce<T[][]>((acc, list) => acc.flatMap(prev => list.map(item => [...prev, item])), [[]]);
}

/** Every answer combination the project wizard offers, read from the registered templates. */
export function buildWizardScenarios(templateManager: BaseTemplateManager): WizardScenario[] {
	const scenarios: WizardScenario[] = [];
	for (const frameworkName of templateManager.getFrameworkNames()) {
		const framework = templateManager.getFrameworkByName(frameworkName)!;
		for (const lib of framework.projectLibraries) {
			const visible = lib.projects.filter(p => !p.isHidden);
			const askAction = lib.components.length > 0 || lib.getCustomTemplateNames().length > 0;
			for (const project of visible) {
				const authOptions = lib.hasProject(`${project.id}-auth`) ? [false, true] : [undefined];
				const extraConfig = project.hasExtraConfiguration ? project.getExtraConfiguration() : [];
				const extraLists = extraConfig.map(c => {
					const values = c.type === ControlExtraConfigType.Choice && c.choices?.length
						? c.choices.map(String)
						: [String(c.default ?? "")];
					return values.map(value => ({ key: c.key, message: c.message, value }));
				});
				for (const auth of authOptions) {
					for (const theme of lib.themes) {
						for (const extra of cartesian(extraLists)) {
							const projectChoice = project.id + (auth ? "+auth" : "");
							const dims: Record<string, string> = { project: projectChoice, theme };
							extra.forEach(e => dims[e.key] = e.value);
							scenarios.push({
								id: slug([project.id, auth ? "auth" : "", theme, ...extra.map(e => e.value)].filter(Boolean).join("-")),
								framework: framework.id,
								frameworkName,
								projectType: lib.projectType,
								libraryName: lib.name,
								template: project.id,
								templateName: project.name,
								auth,
								projectId: auth ? `${project.id}-auth` : project.id,
								theme,
								extra,
								askProjectType: framework.projectLibraries.length > 1,
								askTemplate: visible.length > 1,
								askTheme: lib.themes.length > 1,
								askAction,
								dims
							});
						}
					}
				}
			}
		}
	}
	return scenarios;
}

/**
 * Prompts the wizard should show for a scenario, in order.
 * @param tty whether the process runs in a terminal; AI config and "Run the app now" only ask then
 */
export function expectedPrompts(s: WizardScenario, tty: boolean): string[] {
	const prompts: string[] = [PROMPTS.name, PROMPTS.framework];
	if (s.askProjectType) { prompts.push(PROMPTS.projectType); }
	if (s.askTemplate) { prompts.push(PROMPTS.template); }
	if (s.auth !== undefined) { prompts.push(PROMPTS.auth); }
	if (s.askTheme) { prompts.push(PROMPTS.theme); }
	prompts.push(...s.extra.map(e => e.message));
	if (tty && s.framework !== "jquery") { prompts.push(PROMPTS.agents, PROMPTS.assistants); }
	if (s.askAction) { prompts.push(PROMPTS.action); }
	if (s.framework === "angular" && s.projectType === "igx-ts") { prompts.push(PROMPTS.upgrade); }
	if (s.framework === "blazor" && tty) { prompts.push(PROMPTS.runApp); }
	return prompts;
}

/** Answer for a wizard prompt in a scenario, or undefined for a prompt the scenario does not expect. */
export function answerFor(s: WizardScenario, message: string, projectName: string): PromptAnswer | undefined {
	switch (message) {
		case PROMPTS.name: return { value: projectName };
		case PROMPTS.framework: return { value: s.frameworkName };
		case PROMPTS.projectType: return { value: s.libraryName };
		case PROMPTS.template: return { value: s.templateName };
		case PROMPTS.auth: return s.auth === undefined ? undefined : { value: s.auth };
		case PROMPTS.theme: return { value: s.theme };
		case PROMPTS.action: return { value: COMPLETE_ACTION };
		case PROMPTS.upgrade: return { value: "no", label: "Skip for now" };
		case PROMPTS.runApp: return { value: false };
	}
	const extra = s.extra.find(e => e.message === message);
	return extra ? { value: extra.value } : undefined;
}

function coverageItems(s: WizardScenario, coverage: Exclude<Coverage, "all">): string[] {
	const entries = Object.entries(s.dims).map(([k, v]) => `${k}=${v}`);
	if (coverage === "each") {
		return entries;
	}
	const pairs: string[] = [];
	for (let i = 0; i < entries.length; i++) {
		for (let j = i + 1; j < entries.length; j++) {
			pairs.push(`${entries[i]}&${entries[j]}`);
		}
	}
	return pairs.length ? pairs : entries;
}

/**
 * Picks scenarios per framework so every value (`each`) or every pair of values (`pairs`)
 * appears at least once. Greedy and deterministic.
 */
export function sampleScenarios(scenarios: WizardScenario[], coverage: Coverage): WizardScenario[] {
	if (coverage === "all") {
		return scenarios;
	}
	const picked: WizardScenario[] = [];
	const frameworks = [...new Set(scenarios.map(s => s.framework))];
	for (const fw of frameworks) {
		const pool = scenarios.filter(s => s.framework === fw);
		const uncovered = new Set(pool.flatMap(s => coverageItems(s, coverage)));
		while (uncovered.size) {
			let best = pool[0];
			let bestGain = -1;
			for (const s of pool) {
				const gain = coverageItems(s, coverage).filter(i => uncovered.has(i)).length;
				if (gain > bestGain) {
					best = s;
					bestGain = gain;
				}
			}
			coverageItems(best, coverage).forEach(i => uncovered.delete(i));
			picked.push(best);
		}
	}
	return picked;
}
