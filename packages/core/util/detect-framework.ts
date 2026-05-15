import { App } from "./App";
import { IFileSystem, FS_TOKEN } from "../types/FileSystem";
import { ProjectConfig } from "./ProjectConfig";

type Framework = "angular" | "react" | "webcomponents";

/**
 * Attempt to detect project framework by first checking for local cli-config,
 * then falling back to package.json analysis of `detectFrameworkFromPackageJson()`.
 * @returns The detected framework Id or `null` if no framework could be detected.
 */
export function detectFramework():  Framework | null {
	let framework: Framework | null = null;
	try {
		// try project config first:
		if (ProjectConfig.hasLocalConfig()) {
			framework = ProjectConfig.getConfig().project?.framework?.toLowerCase() as Framework ?? null;
		}
	} catch { /* fall through */ }

	framework ??= detectFrameworkFromPackageJson();

	return framework;
}

/**
 * Attempts to detect the front-end framework by inspecting for well-known,
 * always-present core framework packages in `dependencies`
 * and `devDependencies` of `./package.json`.
 *
 * Detection rules (evaluated in priority order):
 *  - "angular"      → `@angular/core` is present
 *  - "react"        → `react` is present
 *  - "webcomponents"→ fallback when neither of the above is found
 *  - `null` if `package.json` is absent or cannot be parsed.
 */
export function detectFrameworkFromPackageJson(): Framework | null {
	const fs = App.container.get<IFileSystem>(FS_TOKEN);
	if (!fs.fileExists("./package.json")) {
		return null;
	}

	let pkg: { dependencies?: Record<string, string>; devDependencies?: Record<string, string> };
	try {
		pkg = JSON.parse(fs.readFile("./package.json"));
	} catch {
		return null;
	}

	const deps = new Set([
		...Object.keys(pkg.dependencies ?? {}),
		...Object.keys(pkg.devDependencies ?? {})
	]);

	if (deps.has("@angular/core")) {
		return "angular";
	}
	if (deps.has("react")) {
		return "react";
	}

	// for now assume webcomponents as default fallback
	return "webcomponents";
}

/**
 * Returns true if the current directory (or any subdirectory) contains
 * a `.csproj` file, indicating a Blazor / .NET project.
 */
export function detectBlazorFromCsproj(): boolean {
	const fs = App.container.get<IFileSystem>(FS_TOKEN);
	return fs.glob(".", "**/*.csproj").length > 0;
}
