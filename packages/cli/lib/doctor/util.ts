import { App, FS_TOKEN, IFileSystem } from "@igniteui/cli-core";
import { execSync } from "child_process";
import * as path from "path";
import { ProjectPackageJson } from "./types";

export const shell = {
	/** Runs a command and returns its trimmed output, or `null` when it fails or times out. */
	run(command: string, timeout = 10000): string | null {
		try {
			return execSync(command, { stdio: ["ignore", "pipe", "ignore"], encoding: "utf8", timeout }).trim();
		} catch {
			return null;
		}
	},
	/** Runs a command; `output` is its stdout on success and its stderr on failure. */
	attempt(command: string, timeout = 10000): { ok: boolean, output: string } {
		try {
			const output = execSync(command, { stdio: ["ignore", "pipe", "pipe"], encoding: "utf8", timeout }).trim();
			return { ok: true, output };
		} catch (error) {
			return { ok: false, output: String((error as { stderr?: unknown }).stderr ?? "") };
		}
	}
};

type Version = [major: number, minor: number, patch: number];

export function parseVersion(text: string): Version | null {
	const match = /(\d+)(?:\.(\d+))?(?:\.(\d+))?/.exec(text);
	return match ? [Number(match[1]), Number(match[2] ?? 0), Number(match[3] ?? 0)] : null;
}

export function compareVersions(a: Version, b: Version): number {
	return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
}

/**
 * Checks a version against the common range forms: exact, partial (`22`, `22.2`), `^`, `~` and `>=`.
 * @returns `null` for anything else (tags, URLs, compound ranges), which is not evaluated
 */
export function satisfies(version: string, range: string): boolean | null {
	const match = /^(\^|~|>=|=)?\s*v?(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:-[\w.-]+)?$/.exec(range.trim());
	const actual = parseVersion(version);
	if (!match || !actual) {
		return null;
	}
	const base: Version = [Number(match[2]), Number(match[3] ?? 0), Number(match[4] ?? 0)];
	const notOlder = compareVersions(actual, base) >= 0;
	switch (match[1]) {
		case ">=":
			return notOlder;
		case "^":
			if (base[0] > 0 || match[3] === undefined) {
				return notOlder && actual[0] === base[0];
			}
			return notOlder && actual[0] === 0 && actual[1] === base[1] && (base[1] > 0 || actual[2] === base[2]);
		case "~":
			return notOlder && actual[0] === base[0] && (match[3] === undefined || actual[1] === base[1]);
		default:
			if (match[3] === undefined) {
				return actual[0] === base[0];
			}
			if (match[4] === undefined) {
				return actual[0] === base[0] && actual[1] === base[1];
			}
			return compareVersions(actual, base) === 0;
	}
}

export function allDependencies(packageJson: ProjectPackageJson): Record<string, string> {
	return { ...packageJson.devDependencies, ...packageJson.dependencies };
}

/** Version of a package installed for the current folder, looking through parent `node_modules` as Node does. */
export function installedVersion(name: string): string | null {
	const fileSystem = App.container.get<IFileSystem>(FS_TOKEN);
	let dir = process.cwd();
	for (;;) {
		const manifest = path.join(dir, "node_modules", name, "package.json");
		if (fileSystem.fileExists(manifest)) {
			try {
				return JSON.parse(fileSystem.readFile(manifest)).version ?? null;
			} catch {
				return null;
			}
		}
		const parent = path.dirname(dir);
		if (parent === dir) {
			return null;
		}
		dir = parent;
	}
}
