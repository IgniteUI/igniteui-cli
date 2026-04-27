import * as path from "path";
import type { BaseTemplateManager } from "../templates";
import { FS_TOKEN, IFileSystem } from "../types/FileSystem";
import { NPM_ANGULAR, NPM_REACT, NPM_WEBCOMPONENTS, resolvePackage, UPGRADEABLE_PACKAGES } from "../update/package-resolve";
import { App } from "./App";
import { detectFrameworkFromPackageJson } from "./detect-framework";
import { FsFileSystem } from "./FileSystem";
import { TEMPLATE_MANAGER } from "./GlobalConstants";
import { ProjectConfig } from "./ProjectConfig";
import { Util } from "./Util";

const SKILLS_DIR_TEMPLATE = "__dot__claude/skills";

export type AIAgentTarget = "claude" | "copilot" | "cursor" | "codex" | "windsurf" | "gemini" | "junie" | "generic";

export const AI_AGENT_SKILLS_DIRS: Record<AIAgentTarget, string> = {
	claude: ".claude/skills",
	copilot: ".github/skills",
	cursor: ".cursor/skills",
	codex: ".codex/skills",
	windsurf: ".windsurf/skills",
	gemini: ".gemini/skills",
	junie: ".junie/skills",
	generic: ".agents/skills"
};

/**
 * Returns the project-level skills directory for the given AI agent target.
 * Falls back to `.claude/skills` when no target is specified.
 */
export function getSkillsDir(target?: AIAgentTarget): string {
	return AI_AGENT_SKILLS_DIRS[target ?? "claude"];
}

export interface AISkillsCopyResult {
	found: number;
	skipped: number;
	failed: number;
}

/**
 * Returns the list of 'skills/' directory paths found in installed
 * Ignite UI packages that are relevant to the project's detected framework.
 */
function resolveSkillsRoots(): string[] {
	const fs = App.container.get<IFileSystem>(FS_TOKEN);
	const roots: string[] = [];

	let framework: string | null = null;
	try {
		if (ProjectConfig.hasLocalConfig()) {
			framework = ProjectConfig.getConfig().project?.framework?.toLowerCase() ?? null;
		}
	} catch { /* config not readable – fall through to scan all */ }

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
		const skillsRoot = `node_modules/${resolved}/skills`;
		if (fs.directoryExists(skillsRoot) && !roots.includes(skillsRoot)) {
			roots.push(skillsRoot);
		}
	}

	if (!roots.length) {
		// if no root discovered, take the root from the appropriate project template files:
		framework ??= detectFrameworkFromPackageJson();
		if (framework) {
			const templateManager = App.container.get<BaseTemplateManager>(TEMPLATE_MANAGER);
			const projectLib = templateManager?.getFrameworkById(framework)?.projectLibraries[0];
			const filePaths = projectLib?.getProject(projectLib.projectIds[0]).templatePaths ?? [];
			roots.push(
				...filePaths
				.map((p) => path.join(p, SKILLS_DIR_TEMPLATE))
				.slice(0, 1),
			);
		}
	}

	return roots;
}

/**
 * Copies skill files from the installed Ignite UI package(s) into the
 * specified skills directory. When no directory is given, defaults to
 * `.claude/skills/` for backward compatibility.
 * @param skillsDir – destination directory (e.g. `.agents/skills`, `.cursor/skills`, …)
 */
export function copyAISkillsToProject(skillsDir?: string): AISkillsCopyResult {
	const outputDir = (skillsDir ?? getSkillsDir()).replace(/\\/g, "/").replace(/\/+$/, "");
	const result: AISkillsCopyResult = { found: 0, skipped: 0, failed: 0 };
	// Source reads (glob + readFile) always use physical FS - skill files can
	// come from sources outside the project virtual tree (external/global package):
	const srcFs = new FsFileSystem();
	// Destination writes respect the App FS (which may be virtual):
	const destFs = App.container.get<IFileSystem>(FS_TOKEN);
	const skillsRoots = resolveSkillsRoots();

	if (!skillsRoots.length) {
		return result;
	}

	const multiRoot = skillsRoots.length > 1;

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

	return result;
}
