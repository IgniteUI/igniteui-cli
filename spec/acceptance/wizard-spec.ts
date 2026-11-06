import {
	AI_AGENT_CHOICES, AI_ASSISTANT_CHOICES, AI_ASSISTANT_MCP_CONFIGS, AIAgentTarget, AiCodingAssistant, App, Config,
	getInstructionFilePath, GoogleAnalytics, inquirerWrapperTesting, PackageManager, ProjectConfig, Util
} from "@igniteui/cli-core";
import * as fs from "fs";
import * as glob from "glob";
import * as os from "os";
import * as path from "path";
import * as cli from "../../packages/cli/lib/cli";
import { TemplateManager } from "../../packages/cli/lib/TemplateManager";
import { answerFor, buildWizardScenarios, expectedPrompts, PROMPTS, WizardScenario } from "../helpers/wizard-matrix";

const PROJECT_NAME = "wizard-app";

interface AiChoice { agents: string[]; assistants: string[]; }

/** Rotated across each framework's scenarios so every AI option is exercised. */
const AI_ROTATION: AiChoice[] = [
	{ agents: ["none"], assistants: ["none"] },
	{ agents: ["generic", "claude"], assistants: ["generic"] },
	{ agents: [...AI_AGENT_CHOICES], assistants: [...AI_ASSISTANT_CHOICES] },
	{ agents: ["copilot"], assistants: ["vscode"] }
];

function selectableValues(choices: any[]): any[] {
	return (choices ?? [])
		.filter(c => !(c && typeof c === "object" && c.type === "separator"))
		.map(c => (c && typeof c === "object") ? (c.value ?? c.name) : c);
}

describe("Wizard (ig new, interactive)", () => {
	App.initialize();
	const templateManager = new TemplateManager();
	const scenarios = buildWizardScenarios(templateManager);
	const startDir = process.cwd();
	let workDir: string;
	let asked: string[];
	let dotnetNewArgs: string[] | undefined;

	function scriptAnswers(s: WizardScenario, ai: AiChoice) {
		const answer = (message: string, choices?: any[]) => {
			asked.push(message);
			const a = answerFor(s, message, PROJECT_NAME);
			if (!a) {
				throw new Error(`[${s.framework}/${s.id}] unexpected prompt: "${message}"`);
			}
			if (choices && !selectableValues(choices).includes(a.value)) {
				throw new Error(`[${s.framework}/${s.id}] "${a.value}" is not offered for "${message}": ` +
					JSON.stringify(selectableValues(choices)));
			}
			return a.value;
		};
		const delegates = inquirerWrapperTesting.promptDelegates as any;
		spyOn(delegates, "input").and.callFake(async (o: any) => answer(o.message));
		spyOn(delegates, "select").and.callFake(async (o: any) => answer(o.message, o.choices));
		spyOn(delegates, "confirm").and.callFake(async (o: any) => answer(o.message));
		spyOn(delegates, "checkbox").and.callFake(async (o: any) => {
			throw new Error(`[${s.framework}/${s.id}] unexpected checkbox prompt: "${o.message}"`);
		});
		spyOn(delegates, "exclusiveCheckbox").and.callFake(async (o: any) => {
			asked.push(o.message);
			const picked = o.message === PROMPTS.agents ? ai.agents
				: o.message === PROMPTS.assistants ? ai.assistants
				: undefined;
			if (!picked) {
				throw new Error(`[${s.framework}/${s.id}] unexpected prompt: "${o.message}"`);
			}
			const offered = selectableValues(o.choices);
			const missing = picked.filter(p => !offered.includes(p));
			if (missing.length) {
				throw new Error(`[${s.framework}/${s.id}] ${missing.join(", ")} not offered for "${o.message}"`);
			}
			return picked;
		});
	}

	function fakeDotnet() {
		spyOn(Util, "spawnSync").and.callFake(((cmd: string, args: string[]) => {
			const ok = (stdout = "") => ({ status: 0, stdout, stderr: "", error: undefined } as any);
			if (cmd !== "dotnet") {
				throw new Error(`unexpected spawn: ${cmd} ${args.join(" ")}`);
			}
			if (args[0] === "--version") { return ok("8.0.100"); }
			if (args[1] === "list") { return ok("igb-blazor"); }
			if (args[1] === "update") { return ok("All template packages are up-to-date."); }
			if (args[1] === "igb-blazor") {
				dotnetNewArgs = args;
				fs.mkdirSync(path.join(process.cwd(), args[args.indexOf("-o") + 1]));
				return ok();
			}
			throw new Error(`unexpected dotnet call: ${args.join(" ")}`);
		}) as any);
	}

	beforeEach(() => {
		asked = [];
		dotnetNewArgs = undefined;
		workDir = fs.mkdtempSync(path.join(os.tmpdir(), "ig-wizard-"));
		process.chdir(workDir);
		spyOn(console, "log");
		spyOn(console, "error");
		spyOn(GoogleAnalytics, "post");
		spyOn(ProjectConfig, "globalConfig").and.returnValue({} as Config);
		spyOn(PackageManager, "installPackages").and.returnValue(Promise.resolve());
		spyOn(PackageManager, "flushQueue").and.returnValue(Promise.resolve() as any);
		spyOn(Util, "gitInit");
		spyOn(Util, "canPrompt").and.returnValue(true);
		spyOn(Util, "error").and.callThrough();
		fakeDotnet();
	});

	afterEach(() => {
		process.chdir(startDir);
		fs.rmSync(workDir, { recursive: true, force: true });
	});

	function expectAiConfig(projectDir: string, ai: AiChoice) {
		const agents = (ai.agents.includes("none") ? [] : ai.agents) as AIAgentTarget[];
		const assistants = (ai.assistants.includes("none") ? [] : ai.assistants) as AiCodingAssistant[];
		for (const agent of agents) {
			const file = getInstructionFilePath(agent);
			expect(fs.existsSync(path.join(projectDir, file))).withContext(`instructions for ${agent}: ${file}`).toBeTrue();
		}
		for (const assistant of AI_ASSISTANT_CHOICES) {
			const file = AI_ASSISTANT_MCP_CONFIGS[assistant].mcpFilePath;
			const isAgentFile = agents.some(a => getInstructionFilePath(a) === file);
			if (!isAgentFile) {
				expect(fs.existsSync(path.join(projectDir, file)))
					.withContext(`MCP config for ${assistant}: ${file}`)
					.toBe(assistants.includes(assistant));
			}
		}
	}

	function expectTemplateFiles(s: WizardScenario, projectDir: string) {
		// look up by id: a project's folder name can differ from its id (jQuery's "jquery" lives in empty/)
		const lib = templateManager.getProjectLibrary(s.framework, s.projectType)!;
		const project = lib.projects.find(p => p.id === s.projectId) ?? lib.getProject(s.projectId)!;
		const missing: string[] = [];
		for (const templatePath of project.templatePaths) {
			for (const file of glob.sync("**/*", { cwd: templatePath, dot: true, nodir: true })) {
				const target = file.replace(/__dot__/g, ".");
				if (/__|\$\(|<%/.test(target)) {
					continue;
				}
				if (!fs.existsSync(path.join(projectDir, target))) {
					missing.push(target);
				}
			}
		}
		expect(missing).withContext(`files missing from ${s.projectId}`).toEqual([]);
	}

	const frameworks = [...new Set(scenarios.map(s => s.framework))];
	for (const fw of frameworks) {
		describe(fw, () => {
			scenarios.filter(s => s.framework === fw).forEach((s, i) => {
				const ai = AI_ROTATION[i % AI_ROTATION.length];
				const aiLabel = s.framework === "jquery" ? "" : ` (AI: ${ai.agents.join("+")} / ${ai.assistants.join("+")})`;

				it(`${s.id}${aiLabel}`, async () => {
					scriptAnswers(s, ai);

					await cli.run(["new"]);

					const projectDir = path.join(workDir, PROJECT_NAME);
					expect(asked).toEqual(expectedPrompts(s, true));
					expect(Util.error).not.toHaveBeenCalled();
					expect(fs.existsSync(projectDir)).withContext("project folder").toBeTrue();
					expect(Util.gitInit).toHaveBeenCalledWith(workDir, PROJECT_NAME);

					if (s.framework === "blazor") {
						const extra = Object.fromEntries(s.extra.map(e => [e.key, e.value]));
						expect(dotnetNewArgs).toEqual([
							"new", "igb-blazor", "-n", PROJECT_NAME, "-o", PROJECT_NAME,
							"--Hosting", extra.Hosting, "--Theme", s.theme, "--Variant", extra.Variant
						]);
						expect(PackageManager.installPackages).not.toHaveBeenCalled();
					} else {
						expect(dotnetNewArgs).toBeUndefined();
						const config = JSON.parse(fs.readFileSync(path.join(projectDir, "ignite-ui-cli.json"), "utf8"));
						expect(config.project.framework).toBe(s.framework);
						expect(config.project.projectType).toBe(s.projectType);
						expect(config.project.theme).toBe(s.theme);
						expect(PackageManager.installPackages).toHaveBeenCalledTimes(1);
						expectTemplateFiles(s, projectDir);
					}

					if (s.framework !== "jquery") {
						expectAiConfig(projectDir, ai);
					}
				});
			});
		});
	}
});
