import { App, FS_TOKEN, IFileSystem } from "@igniteui/cli-core";
import { ChildProcess, exec, spawn } from "child_process";
import * as path from "path";
import * as semver from "semver";
import { ProjectPackageJson } from "./types";

function killTree(child: ChildProcess): void {
	if (process.platform === "win32" && child.pid) {
		spawn("taskkill", ["/pid", String(child.pid), "/T", "/F"], { stdio: "ignore", windowsHide: true })
			.on("error", () => child.kill());
	} else {
		child.kill();
	}
}

export const shell = {
	/** Runs a command; `output` is its stdout on success and its stderr on failure or timeout. */
	attempt(command: string, timeout = 10000): Promise<{ ok: boolean, output: string }> {
		return new Promise(resolve => {
			const child = exec(command, { encoding: "utf8", windowsHide: true }, (error, stdout, stderr) => {
				clearTimeout(timer);
				resolve(error ? { ok: false, output: stderr } : { ok: true, output: stdout.trim() });
			});
			// exec's own timeout kills only the shell on Windows and then waits for what the shell started
			const timer = setTimeout(() => {
				killTree(child);
				resolve({ ok: false, output: "" });
			}, timeout);
		});
	},
	/** Runs a command and returns its trimmed output, or `null` when it fails or times out. */
	async run(command: string, timeout = 10000): Promise<string | null> {
		const result = await shell.attempt(command, timeout);
		return result.ok ? result.output : null;
	}
};

/** Major of a version or of the lowest version a range allows. */
export function majorOf(text: string): number | undefined {
	return semver.coerce(text)?.major;
}

/** @returns `null` for what is not a version range (tags, URLs, `file:` and `workspace:` specs), which is not evaluated */
export function satisfies(version: string, range: string): boolean | null {
	if (!semver.valid(version) || semver.validRange(range) === null) {
		return null;
	}
	return semver.satisfies(version, range);
}

export const IGNITEUI_PACKAGE = /^(@infragistics\/|@igniteui\/|igniteui-|ignite-ui-)/;

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
