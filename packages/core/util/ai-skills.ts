import * as path from "path";
import type { BaseTemplateManager } from "../templates";
import { FS_TOKEN, IFileSystem } from "../types/FileSystem";
import { NPM_ANGULAR, NPM_REACT, NPM_WEBCOMPONENTS, resolvePackage, UPGRADEABLE_PACKAGES } from "../update/package-resolve";
import { App } from "./App";
import { FsFileSystem } from "./FileSystem";
import { TEMPLATE_MANAGER } from "./GlobalConstants";
import { Util } from "./Util";

export const AI_AGENT_CHOICES = ["generic", "claude", "copilot", "cursor", "codex", "windsurf", "gemini", "junie"] as const;
export type AIAgentTarget = typeof AI_AGENT_CHOICES[number];

const AI_AGENT_SKILLS_DIRS: Record<AIAgentTarget, string> = {
	generic: ".agents/skills",
	claude: ".claude/skills",
	copilot: ".github/skills",
	cursor: ".cursor/skills",
	codex: ".codex/skills",
	windsurf: ".windsurf/skills",
	gemini: ".gemini/skills",
	junie: ".junie/skills"
};

const AI_AGENT_INSTRUCTION_FILES: Record<AIAgentTarget, string> = {
	generic: "AGENTS.md",
	claude: ".claude/CLAUDE.md",
	copilot: ".github/copilot-instructions.md",
	cursor: ".cursor/rules/cursor.mdc",
	codex: ".codex/instructions.md",
	windsurf: ".windsurf/rules/guidelines.md",
	gemini: ".gemini/GEMINI.md",
	junie: ".junie/guidelines.md"
};

export const AI_AGENT_LABELS: Record<AIAgentTarget, string> = {
	generic: "Generic (Add .agents/skills and AGENTS.md general for most assistants)",
	claude: "Claude (Add .claude/skills and CLAUDE.md)",
	copilot: "Copilot (Add .github/skills and copilot-instructions.md)",
	cursor: "Cursor (Add .cursor/skills and .cursor/rules/cursor.mdc)",
	codex: "Codex (Add .codex/skills and .codex/instructions.md)",
	windsurf: "Windsurf (Add .windsurf/skills and .windsurf/rules/guidelines.md)",
	gemini: "Gemini (Add .gemini/skills and .gemini/GEMINI.md)",
	junie: "Junie (Add .junie/skills and .junie/guidelines.md)"
};

/**
 * Returns the project-level skills directory for the given AI agent target.
 */
function getSkillsDir(target: AIAgentTarget): string {
	return AI_AGENT_SKILLS_DIRS[target];
}

/**
 * Returns the agent-specific instruction file path for the given AI agent target.
 */
export function getInstructionFilePath(target: AIAgentTarget): string {
	return AI_AGENT_INSTRUCTION_FILES[target];
}

export interface AISkillsCopyResult {
	found: number;
	skipped: number;
	failed: number;
}

export const AGENTS_TEMPLATE_FILE = "AGENTS.md";
export const AI_CONFIG_PROJECT_ID = "ai-config";
export const AI_SKILLS_DIR_NAME = "skills";

/**
 * Returns the `files/` directory of the ai-config project template for the
 * detected framework. This is where AGENTS.md (and the bundled skills/) live
 * when no npm package is installed.
 */
function resolveTemplateFilesDir(framework: string): string | null {
	const templateManager = App.container.get<BaseTemplateManager>(TEMPLATE_MANAGER);
	const projectLib = templateManager?.getFrameworkById(framework)?.projectLibraries[0];
	const templatePaths = projectLib?.getProject(AI_CONFIG_PROJECT_ID)?.templatePaths ?? [];
	return templatePaths[0] ?? null;
}

/**
 * Returns the list of 'skills/' directory paths found in installed
 * Ignite UI packages that are relevant to the project's detected framework.
 * Falls back to the bundled template skills when no npm package is installed.
 */
function resolveSkillsRoots(framework: string): string[] {
	const fs = App.container.get<IFileSystem>(FS_TOKEN);
	const roots: string[] = [];

	const allPkgKeys = Object.keys(UPGRADEABLE_PACKAGES);
	let candidates = new Set<string>();
	if (framework === "angular") {
		candidates.add(NPM_ANGULAR);
	} else if (framework === "react") {
		candidates.add(NPM_REACT);
	} else if (framework === "webcomponents") {
		candidates.add(NPM_WEBCOMPONENTS);
	} else {
		// NPM_REACT and NPM_WEBCOMPONENTS are OSS-only and not in UPGRADEABLE_PACKAGES, so add them explicitly
		candidates = new Set([...allPkgKeys, NPM_REACT, NPM_WEBCOMPONENTS]);
	}

	for (const pkg of candidates) {
		const resolved = resolvePackage(pkg as keyof typeof UPGRADEABLE_PACKAGES);
		const skillsRoot = `node_modules/${resolved}/${AI_SKILLS_DIR_NAME}`;
		if (fs.directoryExists(skillsRoot) && !roots.includes(skillsRoot)) {
			roots.push(skillsRoot);
		}
	}

	if (!roots.length) {
		// if no root discovered, take the root from the appropriate project template files:
		const filesDir = resolveTemplateFilesDir(framework);
		if (filesDir) {
			roots.push(path.join(filesDir, AI_SKILLS_DIR_NAME));
		}
	}

	return roots;
}

/**
 * Copies skill files from the installed Ignite UI package(s) into the
 * skills directories for each of the given AI agents.
 * @param agents – list of AI agent targets to copy skills for
 */
export function copyAISkillsToProject(agents: AIAgentTarget[], framework: string): AISkillsCopyResult {
	const result: AISkillsCopyResult = { found: 0, skipped: 0, failed: 0 };
	// Source reads (glob + readFile) always use physical FS - skill files can
	// come from sources outside the project virtual tree (external/global package):
	const srcFs = new FsFileSystem();
	// Destination writes respect the App FS (which may be virtual):
	const destFs = App.container.get<IFileSystem>(FS_TOKEN);
	const skillsRoots = resolveSkillsRoots(framework);

	if (!skillsRoots.length) {
		return result;
	}

	const multiRoot = skillsRoots.length > 1;

	for (const agent of agents) {
		const outputDir = getSkillsDir(agent);

		for (const skillsRoot of skillsRoots) {
			const rawPaths = srcFs.glob(skillsRoot, "**/*");
			const pkgDirName = multiRoot ? path.basename(path.dirname(skillsRoot)) : "";

			for (const p of rawPaths) {
				result.found++;
				// Normalize to posix and strip leading '/' so path.posix.relative works
				// across both FsFileSystem (relative paths) and NgTreeFileSystem (tree-rooted paths)
				const normP = p.replace(/\\/g, "/").replace(/^\//, "");
				const normRoot = skillsRoot.replace(/\\/g, "/").replace(/^\//, "");
				const rel = path.posix.relative(normRoot, normP);
				const dest = multiRoot
					? `${outputDir}/${pkgDirName}/${rel}`
					: `${outputDir}/${rel}`;

				const newContent = srcFs.readFile(p);
				try {
					if (destFs.fileExists(dest)) {
						const existingContent = destFs.readFile(dest);
						if (existingContent === newContent) {
							result.skipped++;
							continue;
						}
						destFs.writeFile(dest, newContent);
						Util.log(`${Util.greenCheck()} Updated ${dest}`);
					} else {
						destFs.writeFile(dest, newContent);
						Util.log(`${Util.greenCheck()} Created ${dest}`);
					}
				} catch {
					result.failed++;
				}
			}
		}
	}

	return result;
}

/**
 * Resolves the AGENTS.md source file content from the bundled project template files.
 * AGENTS.md lives only in the template files/ directory, not in npm packages.
 */
function resolveAgentsContent(framework: string): string | null {
	const filesDir = resolveTemplateFilesDir(framework.toLowerCase());
	if (!filesDir) {
		return null;
	}

	try {
		return new FsFileSystem().readFile(path.join(filesDir, AGENTS_TEMPLATE_FILE));
	} catch {
		return null;
	}
}

/**
 * Copies the AGENTS.md content into agent-specific instruction files for
 * each of the given agents.
 * @param agents – list of AI agent targets to create instruction files for
 */
export function copyAgentInstructionFiles(agents: AIAgentTarget[], framework: string): void {
	const content = resolveAgentsContent(framework);
	if (!content) {
		return;
	}

	const destFs = App.container.get<IFileSystem>(FS_TOKEN);

	for (const agent of agents) {
		const dest = getInstructionFilePath(agent);
		const fileContent = agent === "cursor"
			? `---\ncontext: true\npriority: high\nscope: project\n---\n${content}`
			: content;
		try {
			if (destFs.fileExists(dest)) {
				const existing = destFs.readFile(dest);
				if (existing === fileContent) {
					continue;
				}
				destFs.writeFile(dest, fileContent);
				Util.log(`${Util.greenCheck()} Updated ${dest}`);
			} else {
				destFs.writeFile(dest, fileContent);
				Util.log(`${Util.greenCheck()} Created ${dest}`);
			}
		} catch {
			/* skip on error */
		}
	}
}
