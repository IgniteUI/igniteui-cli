import * as path from "path";
import { App } from "./App";
import { IFileSystem, FS_TOKEN } from "../types/FileSystem";
import { ProjectConfig } from "./ProjectConfig";
import { Util } from "./Util";
import { NPM_ANGULAR, NPM_REACT, resolvePackage, UPGRADEABLE_PACKAGES } from "../update/package-resolve";

const CLAUDE_SKILLS_DIR = ".claude/skills";

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
	let candidates: string[];
	if (framework === "angular") {
		candidates = [NPM_ANGULAR];
	} else if (framework === "react") {
		candidates = [NPM_REACT];
	} else if (framework === "webcomponents") {
		candidates = allPkgKeys.filter(k => k.startsWith("igniteui-webcomponents"));
	} else {
		candidates = allPkgKeys;
	}

	for (const pkg of candidates) {
		const resolved = resolvePackage(pkg as keyof typeof UPGRADEABLE_PACKAGES);
		const skillsRoot = `node_modules/${resolved}/skills`;
		if (fs.directoryExists(skillsRoot) && !roots.includes(skillsRoot)) {
			roots.push(skillsRoot);
		}
	}

	return roots;
}

/**
 * Copies skill files from the installed Ignite UI package(s) into .claude/skills/.
 * Works with both real FS (CLI) and virtual Tree FS (schematics) through IFileSystem.
 */
export function copyAISkillsToProject(): void {
	const fs = App.container.get<IFileSystem>(FS_TOKEN);
	const skillsRoots = resolveSkillsRoots();

	if (!skillsRoots.length) {
		return;
	}

	const multiRoot = skillsRoots.length > 1;

	for (const skillsRoot of skillsRoots) {
		const rawPaths = fs.glob(skillsRoot, "**/*");
		const pkgDirName = multiRoot ? path.basename(path.dirname(skillsRoot)) : "";

		for (const p of rawPaths) {
			// Normalize to posix and strip leading '/' so path.posix.relative works
			// across both FsFileSystem (relative paths) and NgTreeFileSystem (tree-rooted paths)
			const normP = p.replace(/\\/g, "/").replace(/^\//, "");
			const normRoot = skillsRoot.replace(/\\/g, "/").replace(/^\//, "");
			const rel = path.posix.relative(normRoot, normP);
			const dest = multiRoot
				? `${CLAUDE_SKILLS_DIR}/${pkgDirName}/${rel}`
				: `${CLAUDE_SKILLS_DIR}/${rel}`;

			if (!fs.fileExists(dest)) {
				fs.writeFile(dest, fs.readFile(p));
				Util.log(`${Util.greenCheck()} Created ${dest}`);
			}
		}
	}
}
