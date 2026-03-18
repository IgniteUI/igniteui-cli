import * as path from "path";
import { App, FS_TOKEN, IFileSystem, NPM_ANGULAR, NPM_REACT, NPM_WEBCOMPONENTS, ProjectConfig, resolvePackage, UPGRADEABLE_PACKAGES, Util } from "@igniteui/cli-core";

const CLAUDE_SKILLS_DIR = ".claude/skills";

/**
 * Returns the list of absolute 'skills/' directory paths found in installed
 * Ignite UI packages that are relevant to the project's detected framework.
 * When multiple roots are found (e.g. several igniteui-webcomponents-* packages)
 * each is returned so their files can be aggregated by the caller.
 */
function resolveSkillsRoots(nodeModulesDir: string, fs: IFileSystem): string[] {
	const roots: string[] = [];

	// Try to read the project framework from ignite-ui-cli.json
	let framework: string | null = null;
	try {
		if (ProjectConfig.hasLocalConfig()) {
			framework = ProjectConfig.getConfig().project?.framework?.toLowerCase() ?? null;
		}
	} catch { /* config not readable – fall through to scan all */ }

	// Map framework id → candidate package names from the known packages registry
	let candidates: string[];
	if (framework === "angular") {
		candidates = [NPM_ANGULAR];
	} else if (framework === "react") {
		candidates = [NPM_REACT];
	} else if (framework === "webcomponents") {
		candidates = [NPM_WEBCOMPONENTS];
	} else {
		// Unknown / jQuery – check every known Ignite UI package
		candidates = Object.keys(UPGRADEABLE_PACKAGES);
	}

	for (const pkg of candidates) {
		const resolved = resolvePackage(pkg as keyof typeof UPGRADEABLE_PACKAGES);
		const skillsRoot = path.join(nodeModulesDir, resolved, "skills");
		if (fs.directoryExists(skillsRoot) && !roots.includes(skillsRoot)) {
			roots.push(skillsRoot);
		}
	}

	return roots;
}

/**
 * Copies skill files from the installed Ignite UI package(s) into .claude/skills/.
 * The source package(s) are determined by the project's framework as recorded
 * in ignite-ui-cli.json (angular → igniteui-angular, react → igniteui-react*,
 * webcomponents → igniteui-webcomponents*).
 * Must be called with process.cwd() set to the project root.
 */
export async function copyAISkillsToProject(): Promise<void> {
	const fs: IFileSystem = App.container.get<IFileSystem>(FS_TOKEN);
	const nodeModulesDir = path.join(process.cwd(), "node_modules");
	const skillsRoots = resolveSkillsRoots(nodeModulesDir, fs);

	if (!skillsRoots.length) {
		return; // no skills available for this framework, silently skip
	}

	// Collect files from all skill roots.
	// When multiple packages contribute skills (e.g. several igniteui-webcomponents-* packages),
	// prefix each file's relative path with the package directory name so that each package
	// gets its own subdirectory under .claude/skills/.
	const allFiles: Array<{ full: string; relative: string }> = [];
	for (const skillsRoot of skillsRoots) {
		const rawPaths = fs.glob(skillsRoot, "**/*");
		const pkgDirName = path.basename(path.dirname(skillsRoot)); // e.g. "igniteui-react"
		for (const p of rawPaths) {
			const full = p.replace(/\//g, path.sep);
			const relFromRoot = path.relative(skillsRoot, full);
			const relative = skillsRoots.length > 1
				? path.join(pkgDirName, relFromRoot)
				: relFromRoot;
			allFiles.push({ full, relative });
		}
	}

	if (!allFiles.length) return;

	const destAbs = path.join(process.cwd(), CLAUDE_SKILLS_DIR);
	for (const { full, relative } of allFiles) {
		const dest = path.join(destAbs, relative);
		if (!fs.fileExists(dest)) {
			fs.writeFile(dest, fs.readFile(full, "utf8"));
			Util.log(`${Util.greenCheck()} Created ${path.relative(process.cwd(), dest)}`);
		}
	}
}
