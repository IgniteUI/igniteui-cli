import { App } from "./App";
import { IFileSystem, FS_TOKEN } from "../types/FileSystem";
import { ProjectConfig } from "./ProjectConfig";

type Framework = "angular" | "react" | "webcomponents" | "blazor";

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
	framework ??= detectBlazorFromCsproj() ? "blazor" : null;

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

//#region Blazor detection

/** Strings present in a `.csproj` that identify a Blazor project. */
const BLAZOR_SIGNALS = [
	// project SDKs:
	"Microsoft.NET.Sdk.Web",
	"Microsoft.NET.Sdk.BlazorWebAssembly",
	"Microsoft.NET.Sdk.Razor",
	// package references
	"Microsoft.AspNetCore.Components",
	"IgniteUI.Blazor",
];

/** Returns true if the `.csproj` at `csprojPath` is a Blazor project.*/
function isBlazorProject(fs: IFileSystem, csprojPath: string): boolean {
	try {
		const content = fs.readFile(csprojPath);
		return BLAZOR_SIGNALS.some(s => content.includes(s));
	} catch {
		return false;
	}
}

/**
 * Extracts `.csproj` paths from a solution file (`.sln` or `.slnx`).
 * @returns array of paths (backslashes normalised to forward slashes), if any.
 */
function parseCsprojPathsFromSolution(content: string): string[] {
	const paths: string[] = [];

	// .sln text format: Project("{...}") = "Name", "path.csproj", "{...}"
	// .slnx XML format: <Project Path="path.csproj" />
	// Matches any quoted .csproj path — covers both formats:
	const re = /"([^"]*\.csproj)"/gi;
	let match: RegExpExecArray | null;

	while ((match = re.exec(content)) !== null) {
		paths.push(match[1].replace(/\\/g, "/"));
	}

	return paths;
}

/**
 * Attempt to detect whether the current directory contains a Blazor project.
 *
 * Strategy:
 *  1. Look for `.csproj` files in the working directory.
 *  2. If none found, look for solution files (`.sln` / `.slnx`) and
 *     extract referenced `.csproj` paths.
 *  3. Verify at least one `.csproj` is a Blazor project via {@link isBlazorProject}.
 */
export function detectBlazorFromCsproj(): boolean {
	const fs = App.container.get<IFileSystem>(FS_TOKEN);

	const csprojFiles = fs.glob(".", "*.csproj");

	if (csprojFiles.length === 0) {
		const slnFiles = [
			...fs.glob(".", "*.sln"),
			...fs.glob(".", "*.slnx"),
		];
		for (const sln of slnFiles) {
			try {
				const content = fs.readFile(sln);
				const projects = parseCsprojPathsFromSolution(content);
				csprojFiles.push(...projects.filter(p => fs.fileExists(p)));
			} catch { /* skip unreadable solution files */ }
		}
	}

	return csprojFiles.some(csproj => isBlazorProject(fs, csproj));
}
//#endregion Blazor detection
