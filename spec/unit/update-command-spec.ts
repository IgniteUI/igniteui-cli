import { App, GoogleAnalytics, InquirerWrapper, PackageUpdate, ProjectConfig, Util } from "@igniteui/cli-core";
import child_process from "child_process";
import * as fs from "fs";
import * as Module from "module";
import * as os from "os";
import * as path from "path";
import * as versionUpdate from "../../packages/core/update/version-update";
import { default as updateCmd } from "../../packages/cli/lib/commands/update";
import * as updateMigrations from "../../packages/cli/lib/commands/update-migrations";

describe("Unit - Update command", () => {
	const WC = "igniteui-webcomponents";
	let originalCwd: string;
	let originalExitCode: typeof process.exitCode;
	let tempDir: string;
	let output: string[];

	function project(pkgJson: object = {}, files: Record<string, string | Buffer> = {}) {
		fs.writeFileSync("package.json", JSON.stringify({ dependencies: { [WC]: "~6.0.0" }, ...pkgJson }, null, 2));
		for (const file of Object.keys(files)) {
			fs.writeFileSync(file, files[file]);
		}
		return read("package.json");
	}

	function plan(...entries: Partial<PackageUpdate>[]) {
		return spyOn(versionUpdate, "getUpdatePlan").and.returnValue((entries.length ? entries : [{}]).map(entry => ({
			name: WC, section: "dependencies", declared: "~6.0.0", baseline: "6.0.0",
			target: "6.1.0", newRange: "~6.1.0", manifest: { version: "6.1.0" }, ...entry
		}) as PackageUpdate));
	}

	type Flags = Partial<Record<"dryRun" | "skipInstall" | "force" | "allowDirty" | "verbose" | "migrateOnly", boolean>> &
		{ packages?: string[]; from?: string; to?: string; name?: string };
	const run = (args: Flags = {}) => updateCmd.update({ _: [], $0: "ig", ...args });
	const installOptions = () => ({ stdio: "inherit" as const, env: { ...process.env, YARN_ENABLE_IMMUTABLE_INSTALLS: "false" } });
	const read = (file: string) => fs.readFileSync(file, "utf8");
	const log = () => output.join("\n");

	beforeEach(() => {
		originalCwd = process.cwd();
		originalExitCode = process.exitCode;
		tempDir = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), "igniteui-update-")));
		process.chdir(tempDir);
		App.initialize();
		output = [];
		for (const method of ["log", "warn", "error"] as const) {
			spyOn(Util, method).and.callFake((message: string) => { output.push(message); });
		}
		spyOn(child_process, "execSync");
		spyOn(Util, "spawnSync").and.returnValue({ status: 128, stdout: "" } as any);
		spyOn(GoogleAnalytics, "post");
		spyOn(ProjectConfig, "getConfig").and.returnValue({ project: { framework: "webcomponents" } } as any);
	});

	afterEach(() => {
		expect(log()).not.toMatch(/\bsafe\b/i);
		process.chdir(originalCwd);
		process.exitCode = originalExitCode;
		fs.rmSync(tempDir, { recursive: true, force: true });
	});

	describe("frameworks", () => {
		it("posts analytics and detects React from package.json without a project config", async () => {
			(ProjectConfig.getConfig as jasmine.Spy).and.returnValue({});
			project({ dependencies: { [WC]: "~6.0.0", react: "^19.0.0" } });
			plan();

			await updateCmd.handler({ _: [], $0: "ig" });

			expect(GoogleAnalytics.post).toHaveBeenCalledWith({ t: "screenview", cd: "Update" });
			expect(GoogleAnalytics.post).toHaveBeenCalledWith({ t: "event", ec: "$ig update", cd1: "react" });
			expect(log()).toContain("Ignite UI dependency update plan (React, npm)");
		});

		it("doesn't update jQuery or Blazor projects", async () => {
			const getPlan = plan();
			for (const framework of ["jquery", "blazor"]) {
				(ProjectConfig.getConfig as jasmine.Spy).and.returnValue({ project: { framework } });
				await run();
			}
			expect(getPlan).not.toHaveBeenCalled();
			expect(output).toEqual([
				"Updating jquery projects with ig update is not supported.",
				"Updating blazor projects with ig update is not supported."
			]);
			expect(process.exitCode).not.toBe(1);
		});

		it("fails without a package.json", async () => {
			(ProjectConfig.getConfig as jasmine.Spy).and.returnValue({});
			await run();
			expect(log()).toContain("No valid package.json found");
			expect(process.exitCode).toBe(1);
		});
	});

	describe("plan", () => {
		it("reports registry errors without changing anything", async () => {
			project();
			spyOn(versionUpdate, "getUpdatePlan").and.throwError("Unable to get igniteui-webcomponents from the registry");
			await run();
			expect(log()).toContain("Unable to get igniteui-webcomponents from the registry");
			expect(process.exitCode).toBe(1);
		});

		it("prints updates, deprecations, Node engine mismatches, up-to-date, skipped packages and newer majors in a dry run", async () => {
			const original = project({ workspaces: ["packages/*"] });
			plan(
				{ manifest: { version: "6.1.0", deprecated: "use 6.1.1", engines: { node: ">=999" } }, nextMajor: "7.4.1" },
				{ name: "igniteui-cli", section: "devDependencies", declared: "~15.7.0", installed: "15.7.0", baseline: "15.7.0",
					target: "15.8.2", newRange: "~15.8.2", manifest: { version: "15.8.2", engines: { node: ">=10" } } },
				{ name: "igniteui-grid-lite", baseline: "0.11.0", target: "0.11.0", newRange: undefined },
				{ name: "igniteui-dockmanager", declared: "workspace:*", skipped: "unsupported spec", target: undefined, newRange: undefined }
			);

			await run({ dryRun: true, skipInstall: true });

			expect(output).toContain("  igniteui-webcomponents  not installed -> 6.1.0  (~6.0.0 -> ~6.1.0)");
			expect(output).toContain("  igniteui-cli (dev)      15.7.0 -> 15.8.2  (~15.7.0 -> ~15.8.2)");
			expect(output).toContain("    deprecated: use 6.1.1");
			expect(output).toContain(`    requires Node.js >=999, running ${process.version}`);
			expect(log()).not.toContain("requires Node.js >=10");
			expect(output).toContain("Up to date: igniteui-grid-lite 0.11.0");
			expect(output).toContain("Skipped igniteui-dockmanager: unsupported spec");
			expect(log()).toContain("Newer major available (not applied; breaking changes are not migrated automatically): igniteui-webcomponents 7.4.1");
			expect(log()).toContain("No code migrations are applied");
			expect(log()).toContain("Only the root package.json is updated");
			expect(log()).toContain("Dry run: no files were changed.");
			expect(read("package.json")).toBe(original);
			expect(child_process.execSync).not.toHaveBeenCalled();
		});

		it("reports a project without Ignite UI packages", async () => {
			project();
			spyOn(versionUpdate, "getUpdatePlan").and.returnValue([]);

			await run();

			expect(log()).toContain("No Ignite UI packages found in package.json.");
			expect(child_process.execSync).not.toHaveBeenCalled();
			expect(process.exitCode).not.toBe(1);
		});

		it("doesn't install when package.json can't be updated as planned", async () => {
			const original = project({ dependencies: { [WC]: "~5.0.0" } });
			plan();

			await run();

			expect(log()).toContain("package.json changed after the update plan was made");
			expect(read("package.json")).toBe(original);
			expect(child_process.execSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("says there is nothing to update, not that it is up to date, when every package was skipped", async () => {
			project();
			plan({ declared: "workspace:*", skipped: "unsupported spec", target: undefined, newRange: undefined });

			await run();

			expect(log()).toContain("Nothing to update.");
			expect(log()).not.toContain("Already up to date.");
		});

		it("ignores an engines.node value that isn't a valid range", async () => {
			project();
			plan({ manifest: { version: "6.1.0", engines: { node: "latest" } } });

			await run({ dryRun: true });

			expect(log()).not.toContain("requires Node.js");
		});

		it("only warns about several lockfiles in a dry run", async () => {
			const original = project({}, { "yarn.lock": "", "bun.lock": "" });
			plan();

			await run({ dryRun: true });

			expect(log()).toContain("Lockfiles of several package managers found (yarn, bun)");
			expect(log()).toContain("Dry run: no files were changed.");
			expect(read("package.json")).toBe(original);
			expect(process.exitCode).not.toBe(1);
		});

		it("changes nothing when up to date", async () => {
			const original = project();
			plan({ baseline: "6.1.0", target: "6.1.0", newRange: undefined });

			await run();

			expect(log()).toContain("Already up to date.");
			expect(read("package.json")).toBe(original);
			expect(child_process.execSync).not.toHaveBeenCalled();
		});

		it("reports a package held back by the requirements of other packages instead of calling it up to date", async () => {
			const original = project();
			plan(
				{ baseline: "6.1.0", target: "6.1.0", newRange: undefined, newest: "6.2.0" },
				{ name: "igniteui-grid-lite", baseline: "0.11.0", target: "0.11.0", newRange: undefined }
			);

			await run();

			expect(output).toContain("Up to date: igniteui-grid-lite 0.11.0");
			expect(output).toContain("Held back by the version requirements between Ignite UI packages: igniteui-webcomponents 6.1.0 (6.2.0 available)");
			expect(log()).toContain("Nothing to update.");
			expect(log()).not.toContain("Already up to date.");
			expect(read("package.json")).toBe(original);
			expect(child_process.execSync).not.toHaveBeenCalled();
			expect(process.exitCode).not.toBe(1);
		});

		it("lists a package updated below the newest version of its line among the updates and as held back", async () => {
			project();
			plan({ newest: "6.2.0" });

			await run({ dryRun: true });

			expect(output).toContain("  igniteui-webcomponents  not installed -> 6.1.0  (~6.0.0 -> ~6.1.0)");
			expect(output).toContain("Held back by the version requirements between Ignite UI packages: igniteui-webcomponents 6.1.0 (6.2.0 available)");
			expect(log()).not.toContain("Up to date");
			expect(log()).toContain("Dry run: no files were changed.");
		});

		it("warns about a nested copy without blocking when up to date", async () => {
			project();
			plan({ baseline: "6.1.0", target: "6.1.0", newRange: undefined, nested: "~7.4.1 (required by igniteui-react@19.9.0)" });

			await run({ dryRun: true });

			expect(output).toContain("Not met by igniteui-webcomponents ~6.0.0: ~7.4.1 (required by igniteui-react@19.9.0). " +
				"The requiring packages may get a separate copy of igniteui-webcomponents; check that the copies work together at runtime.");
			expect(log()).toContain("Already up to date.");
			expect(process.exitCode).not.toBe(1);
		});

		it("blocks the update on conflicts", async () => {
			const original = project();
			plan({}, { name: "igniteui-grid-lite", conflict: "no version in \"^0.11.0\" satisfies ~0.12.0", newRange: undefined });

			await run();

			expect(log()).toContain("Conflict in igniteui-grid-lite: no version in \"^0.11.0\" satisfies ~0.12.0");
			expect(read("package.json")).toBe(original);
			expect(child_process.execSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});
	});

	describe("install", () => {
		const managers: [string, Record<string, string | Buffer>, string?][] = [
			["npm install", {}],
			["npm install", { "npm-shrinkwrap.json": "{}" }],
			["yarn install", { "yarn.lock": "" }],
			["pnpm install --no-frozen-lockfile", { "pnpm-lock.yaml": "" }],
			["bun install", { "bun.lock": "" }],
			["bun install", { "bun.lockb": Buffer.from([0]) }],
			["pnpm install --no-frozen-lockfile", { "package-lock.json": "{}" }, "pnpm@9.12.0"],
			["yarn install", { "yarn.lock": "" }, "cnpm@9.0.0"]
		];
		for (const [installCommand, lockfiles, packageManager] of managers) {
			const source = packageManager ?? (Object.keys(lockfiles).join() || "no lockfile");
			const forcedCommand = installCommand === "npm install" ? "npm install --force" : installCommand;
			it(`resolves with --force and runs "${forcedCommand}" (${source})`, async () => {
				project(packageManager ? { packageManager } : {}, lockfiles);
				const getPlan = plan();

				await run({ force: true });

				expect(getPlan).toHaveBeenCalledOnceWith({ force: true, verbose: false });
				expect(child_process.execSync).toHaveBeenCalledOnceWith(forcedCommand, installOptions());
				expect(process.exitCode).toBe(0);
			});

			it(`runs "${installCommand}" with visible output after updating package.json (${source})`, async () => {
				project(packageManager ? { packageManager } : {}, lockfiles);
				plan();
				let installedFrom: string;
				(child_process.execSync as jasmine.Spy).and.callFake(() => { installedFrom = read("package.json"); });

				await run();

				expect(child_process.execSync).toHaveBeenCalledOnceWith(installCommand, installOptions());
				expect(installedFrom).toContain(`"${WC}": "~6.1.0"`);
				expect(log()).toContain("Updated 1 package(s). Next: run your build and tests.");
				expect(process.exitCode).not.toBe(1);
			});
		}

		it("keeps the exit code non-zero while installing, so an interrupted install can't report success", async () => {
			project();
			plan();
			let exitCodeDuringInstall: typeof process.exitCode;
			(child_process.execSync as jasmine.Spy).and.callFake(() => { exitCodeDuringInstall = process.exitCode; });

			await run();

			expect(exitCodeDuringInstall).toBe(1);
			expect(process.exitCode).toBe(0);
		});

		it("lets Yarn Berry update the lockfile in CI without changing the environment of ig itself", async () => {
			const immutableInstalls = process.env.YARN_ENABLE_IMMUTABLE_INSTALLS;
			project({ packageManager: "yarn@4.9.1" }, { "yarn.lock": "" });
			plan();

			await run();

			expect((child_process.execSync as jasmine.Spy).calls.mostRecent().args[1].env.YARN_ENABLE_IMMUTABLE_INSTALLS).toBe("false");
			expect(process.env.YARN_ENABLE_IMMUTABLE_INSTALLS).toBe(immutableInstalls);
		});

		it("only updates package.json with --skip-install", async () => {
			project({}, { "yarn.lock": "" });
			plan();

			await run({ skipInstall: true });

			expect(read("package.json")).toContain(`"${WC}": "~6.1.0"`);
			expect(child_process.execSync).not.toHaveBeenCalled();
			expect(log()).toContain(`Run "yarn install" to install them.`);
		});

		it("refuses to guess between several lockfiles, but updates package.json with --skip-install", async () => {
			const original = project({}, { "yarn.lock": "", "package-lock.json": "{}" });
			plan();

			await run();

			expect(log()).toContain("Lockfiles of several package managers found (npm, yarn)");
			expect(read("package.json")).toBe(original);
			expect(child_process.execSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);

			process.exitCode = originalExitCode;
			await run({ skipInstall: true });

			expect(read("package.json")).toContain(`"${WC}": "~6.1.0"`);
			expect(child_process.execSync).not.toHaveBeenCalled();
			expect(log()).toContain("Run your package manager's install command to update the lockfile.");
			expect(process.exitCode).not.toBe(1);
		});

		it("restores package.json and a binary bun.lockb byte for byte, and removes a lockfile created by the failed install", async () => {
			const lockb = Buffer.from([0xff, 0x00, 0xfe, 0x80]);
			const original = project({}, { "bun.lockb": lockb });
			plan();
			(child_process.execSync as jasmine.Spy).and.callFake(() => {
				fs.writeFileSync("bun.lockb", "changed");
				fs.writeFileSync("bun.lock", "created");
				throw new Error("Command failed: bun install");
			});

			await run();

			expect(read("package.json")).toBe(original);
			expect(fs.readFileSync("bun.lockb").equals(lockb)).toBe(true);
			expect(fs.existsSync("bun.lock")).toBe(false);
			expect(log()).toContain(`"bun install" failed. Restored package.json and the lockfile; node_modules may be ` +
				`partially updated, run "bun install" to resync it.`);
			expect(process.exitCode).toBe(1);
		});

		it("names the files it couldn't restore, after restoring the others and reporting the failed install", async () => {
			const lockb = Buffer.from([0xff, 0x00]);
			const original = project({}, { "bun.lockb": lockb });
			plan();
			(child_process.execSync as jasmine.Spy).and.callFake(() => {
				fs.mkdirSync("bun.lock");
				throw new Error("Command failed: bun install");
			});

			await run();

			expect(read("package.json")).toBe(original);
			expect(fs.readFileSync("bun.lockb").equals(lockb)).toBe(true);
			expect(log()).toContain(`"bun install" failed. Could not restore bun.lock; restore them from version control;`);
			expect(process.exitCode).toBe(1);
		});

		it("recommends npm ci after a failed npm install with a lockfile, and npm install without one", async () => {
			project({}, { "package-lock.json": "{}" });
			plan();
			(child_process.execSync as jasmine.Spy).and.throwError("Command failed: npm install");

			await run();
			expect(read("package-lock.json")).toBe("{}");
			expect(log()).toContain(`run "npm ci" to resync it`);

			fs.rmSync("package-lock.json");
			(child_process.execSync as jasmine.Spy).and.callFake(() => {
				fs.writeFileSync("package-lock.json", "created");
				throw new Error("Command failed: npm install");
			});

			await run();
			expect(fs.existsSync("package-lock.json")).toBe(false);
			expect(log()).toContain(`"npm install" failed. Restored package.json; node_modules may be partially updated, run "npm install"`);
		});

		it("rolls back a failed install whatever its exit status, including the statuses above 128 npm exits with on system errors", async () => {
			const exit = spyOn(process, "exit");
			plan();
			for (const status of [1, 254, 4294963238]) {
				const original = project({}, { "package-lock.json": "{}" });
				output = [];
				process.exitCode = originalExitCode;
				(child_process.execSync as jasmine.Spy).and.callFake(() => {
					fs.writeFileSync("package-lock.json", "changed");
					throw Object.assign(new Error("Command failed: npm install"), { status });
				});

				await run();

				expect(read("package.json")).withContext(`status ${status}`).toBe(original);
				expect(read("package-lock.json")).withContext(`status ${status}`).toBe("{}");
				expect(log()).withContext(`status ${status}`).toContain(`"npm install" failed. Restored package.json and the lockfile;`);
				expect(process.exitCode).withContext(`status ${status}`).toBe(1);
			}
			expect(exit).not.toHaveBeenCalled();
		});

		it("warns about uncommitted changes without blocking the update", async () => {
			project();
			plan();
			(Util.spawnSync as jasmine.Spy).and.returnValue({ status: 0, stdout: " M package.json\n" });

			await run();

			expect(Util.spawnSync).toHaveBeenCalledWith("git", jasmine.arrayContaining(["status", "--porcelain", "package.json", "bun.lockb"]),
				{ encoding: "utf8" });
			expect(log()).toContain("package.json or a lockfile has uncommitted changes");
			expect(child_process.execSync).toHaveBeenCalledOnceWith("npm install", installOptions());
		});

		it("suggests ig upgrade-packages for trial packages", async () => {
			project({ dependencies: { [WC]: "~6.0.0", "igniteui-webcomponents-grids": "~6.0.0" } });
			plan({}, { name: "igniteui-webcomponents-grids" });

			await run();

			expect(log()).toContain("To switch to licensed packages, run ig upgrade-packages.");
		});

		it("doesn't suggest ig upgrade-packages for licensed packages", async () => {
			project({ dependencies: { "@infragistics/igniteui-webcomponents-grids": "~6.0.0" } });
			plan({ name: "@infragistics/igniteui-webcomponents-grids" });

			await run();

			expect(log()).not.toContain("ig upgrade-packages");
		});
	});

	describe("--force", () => {
		const forceHint = "Rerun with --force to override these conflicts; the updated packages may then not work together.";
		const overridden = "~6.0.0 (required by igniteui-react@19.9.0)";
		const conflict = { name: "igniteui-grid-lite", conflict: 'no version in "^0.11.0" satisfies ~0.12.0', target: undefined, newRange: undefined };

		it("applies a forced plan after reporting every overridden range and a summary", async () => {
			project();
			plan(
				{ forced: overridden },
				{ name: "igniteui-grid-lite", baseline: "0.11.4", target: "0.11.4", newRange: undefined, forced: "0.11.0 (required by igniteui-react@19.9.0)" }
			);

			await run({ force: true });

			expect(output).toContain("Overridden by --force for igniteui-webcomponents: ~6.0.0 (required by igniteui-react@19.9.0)");
			expect(output).toContain("Overridden by --force for igniteui-grid-lite: 0.11.0 (required by igniteui-react@19.9.0)");
			expect(output).toContain("--force overrides the version requirements of 2 Ignite UI package(s); " +
				"the updated packages may not work together. Run your build and tests.");
			expect(read("package.json")).toContain(`"${WC}": "~6.1.0"`);
			expect(child_process.execSync).toHaveBeenCalledOnceWith("npm install --force", installOptions());
			expect(Util.log).not.toHaveBeenCalledWith(jasmine.any(String), "gray");
			expect(process.exitCode).toBe(0);
		});

		it("says the requirements remain unmet, without claiming an update, when --force changes nothing", async () => {
			const original = project();
			plan({ baseline: "6.1.0", target: "6.1.0", newRange: undefined, forced: "6.0.0 (required by igniteui-react@19.9.0)" });

			await run({ force: true });

			expect(output).toContain("Overridden by --force for igniteui-webcomponents: 6.0.0 (required by igniteui-react@19.9.0)");
			expect(output).toContain("Nothing to update. The version requirements listed above for 1 Ignite UI package(s) remain unmet.");
			expect(log()).not.toContain("Already up to date");
			expect(log()).not.toContain("--force overrides");
			expect(read("package.json")).toBe(original);
			expect(child_process.execSync).not.toHaveBeenCalled();
			expect(process.exitCode).not.toBe(1);
		});

		it("announces forced updates only when they can proceed, in a dry run too", async () => {
			project({}, { "yarn.lock": "", "bun.lock": "" });
			plan({ forced: overridden });

			await run({ force: true });

			expect(log()).toContain("Nothing was updated: unable to choose a package manager to install with.");
			expect(log()).not.toContain("--force overrides");
			expect(process.exitCode).toBe(1);

			process.exitCode = originalExitCode;
			await run({ force: true, dryRun: true });

			expect(log()).toContain("--force overrides the version requirements of 1 Ignite UI package(s)");
			expect(log()).toContain("Dry run: no files were changed.");
			expect(process.exitCode).not.toBe(1);
		});

		const previews: [string, Flags, Record<string, string>, string?][] = [
			["npm, every flag", { force: true, allowDirty: true, verbose: true }, {}, `Would run "npm install --force".`],
			["yarn", { force: true }, { "yarn.lock": "" }, `Would run "yarn install".`],
			["--skip-install", { force: true, skipInstall: true }, {}],
			["several lockfiles", { force: true }, { "yarn.lock": "", "bun.lock": "" }],
			["no --force", {}, {}]
		];
		for (const [name, flags, lockfiles, installLine] of previews) {
			it(`changes nothing in a dry run, naming the install only when --force changes it (${name})`, async () => {
				const original = project({}, lockfiles);
				plan();

				await run({ ...flags, dryRun: true });

				expect(output.filter(line => line.startsWith("Would run"))).toEqual(installLine ? [installLine] : []);
				expect(log()).toContain("Dry run: no files were changed.");
				expect(read("package.json")).toBe(original);
				expect(child_process.execSync).not.toHaveBeenCalled();
				expect(Util.spawnSync).not.toHaveBeenCalled();
				expect(process.exitCode).not.toBe(1);
			});
		}

		const hints: [string, Record<string, string>, string][] = [
			["npm", {}, `Run "npm install --force" to install them.`],
			["yarn", { "yarn.lock": "" }, `Run "yarn install" to install them.`],
			["several lockfiles", { "yarn.lock": "", "bun.lock": "" },
				"Run your package manager's install command to update the lockfile. With npm, add --force."]
		];
		for (const [name, lockfiles, hint] of hints) {
			it(`only updates package.json with --force --skip-install, naming the install command (${name})`, async () => {
				project({}, lockfiles);
				plan();

				await run({ force: true, skipInstall: true });

				expect(read("package.json")).toContain(`"${WC}": "~6.1.0"`);
				expect(output).toContain(`Updated 1 package(s) in package.json. ${hint}`);
				expect(child_process.execSync).not.toHaveBeenCalled();
			});
		}

		const blocked: [string, Partial<PackageUpdate>[], boolean][] = [
			["overridable", [{ overridable: true }], true],
			["not overridable", [{}], false],
			["partly overridable", [{ overridable: true }, { name: "igniteui-dockmanager" }], false]
		];
		for (const [name, conflicts, hinted] of blocked) {
			it(`blocks on conflicts, suggesting --force only when it can override all of them (${name})`, async () => {
				const original = project();
				plan({}, ...conflicts.map(entry => ({ ...conflict, ...entry })));

				await run();

				expect(output.includes(forceHint)).toBe(hinted);
				expect(read("package.json")).toBe(original);
				expect(child_process.execSync).not.toHaveBeenCalled();
				expect(process.exitCode).toBe(1);
			});
		}

		it("still blocks on a conflict --force can't override", async () => {
			const original = project();
			plan({ forced: overridden },
				{ ...conflict, conflict: "--force can't override ranges that aren't valid versions: npm:other@1 (required by igniteui-react@19.9.0)" });

			await run({ force: true });

			expect(log()).toContain("Conflict in igniteui-grid-lite: --force can't override ranges that aren't valid versions");
			expect(log()).toContain("Nothing was updated because of the conflicts above.");
			expect(log()).not.toContain(forceHint);
			expect(log()).not.toContain("--force overrides");
			expect(read("package.json")).toBe(original);
			expect(child_process.execSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("rolls back a failed npm install --force", async () => {
			const original = project({}, { "package-lock.json": "{}" });
			plan({ forced: overridden });
			(child_process.execSync as jasmine.Spy).and.callFake(() => {
				fs.writeFileSync("package-lock.json", "changed");
				throw new Error("Command failed: npm install --force");
			});

			await run({ force: true });

			expect(read("package.json")).toBe(original);
			expect(read("package-lock.json")).toBe("{}");
			expect(log()).toContain(`"npm install --force" failed. Restored package.json and the lockfile; ` +
				`node_modules may be partially updated, run "npm ci" to resync it.`);
			expect(process.exitCode).toBe(1);
		});
	});

	describe("--allow-dirty and --verbose", () => {
		it("skips the uncommitted-changes check with --allow-dirty and still updates", async () => {
			project();
			plan();
			(Util.spawnSync as jasmine.Spy).and.returnValue({ status: 0, stdout: " M package.json\n" });

			await run({ allowDirty: true, verbose: true });

			expect(Util.spawnSync).not.toHaveBeenCalled();
			expect(log()).not.toContain("package.json or a lockfile has uncommitted changes");
			expect(output).toContain("Uncommitted changes not checked (--allow-dirty).");
			expect(child_process.execSync).toHaveBeenCalledOnceWith("npm install", installOptions());
			expect(process.exitCode).toBe(0);
		});

		it("prints framework, package manager, git, install and rollback details, without environment or .npmrc values", async () => {
			const token = "npm_FAKE0TOKEN0123456789";
			const env = process.env;
			process.env = { ...env, NPM_TOKEN: token };
			project({ packageManager: "npm@10.9.0" },
				{ "package-lock.json": "{}", ".npmrc": `//registry.example.com/:_authToken=${token}\n` });
			const getPlan = plan();
			(Util.spawnSync as jasmine.Spy).and.returnValue({ status: 0, stdout: " M package.json\n?? package-lock.json\n" });
			(child_process.execSync as jasmine.Spy).and.callFake(() => {
				fs.writeFileSync("npm-shrinkwrap.json", "created");
				throw new Error("Command failed: npm install");
			});

			try {
				await run({ verbose: true });
			} finally {
				process.env = env;
			}

			expect(getPlan).toHaveBeenCalledOnceWith({ force: false, verbose: true });
			const details = [
				"Framework: webcomponents (from the project config)",
				"Package manager: npm (packageManager field set; lockfiles: package-lock.json)",
				"Uncommitted changes: M package.json, ?? package-lock.json",
				"Backed up package.json, package-lock.json; installing with YARN_ENABLE_IMMUTABLE_INSTALLS=false.",
				"Restored package.json.",
				"Restored package-lock.json.",
				"Removed npm-shrinkwrap.json, created by the failed install."
			];
			for (const detail of details) {
				expect(Util.log).toHaveBeenCalledWith(detail, "gray");
			}
			expect(fs.existsSync("npm-shrinkwrap.json")).toBe(false);
			expect(log()).toContain("package.json or a lockfile has uncommitted changes");
			expect(log()).not.toContain(token);
			expect(log()).not.toContain("registry.example.com");
			expect(process.exitCode).toBe(1);
		});

		it("says when git can't check for uncommitted changes, and where the framework came from", async () => {
			(ProjectConfig.getConfig as jasmine.Spy).and.returnValue({});
			project({ dependencies: { [WC]: "~6.0.0", react: "^19.0.0" } });
			plan();

			await run({ verbose: true });

			expect(Util.log).toHaveBeenCalledWith("Framework: react (detected from package.json)", "gray");
			expect(Util.log).toHaveBeenCalledWith("Package manager: npm (packageManager field not set; lockfiles: none)", "gray");
			expect(Util.log).toHaveBeenCalledWith("Uncommitted changes not checked: no git repository, or git not found.", "gray");
		});
	});

	describe("--migrate-only", () => {
		const SCHEMATICS = {
			old: { version: "1.0.0", description: "Old", factory: "./old" },
			second: { version: "2.0.0", description: "Second", factory: "./second" },
			first: { version: "1.5.0", description: "First", factory: "./first" },
			extra: { version: "2.0.0", description: "Extra", factory: "./extra", optional: true, recommended: true },
			later: { version: "1.8.0", factory: "./later", optional: true }
		};
		const MAP = { react: "./migrations/react.json", webcomponents: "./migrations/webcomponents.json" };
		let runMigrations: jasmine.Spy;
		let loadDevKit: jasmine.Spy;

		/** Installs fixture-lib 2.0.0 with these `ig-update` migrations; returns the absolute paths of its collections */
		function installFixture(migrations: string | Record<string, string> = "./migrations/collection.json") {
			const dir = path.join("node_modules", "fixture-lib");
			const files = typeof migrations === "string" ? [migrations] : Object.values(migrations);
			for (const file of files) {
				fs.mkdirSync(path.dirname(path.join(dir, file)), { recursive: true });
				fs.writeFileSync(path.join(dir, file), JSON.stringify({ schematics: SCHEMATICS }));
			}
			fs.writeFileSync(path.join(dir, "package.json"), JSON.stringify({ name: "fixture-lib", version: "2.0.0", "ig-update": { migrations } }));
			return files.map(file => path.resolve(dir, file));
		}

		const migrate = (args: Flags = {}) => run({ packages: ["fixture-lib"], migrateOnly: true, from: "1.0.0", ...args });
		const named = (...names: string[]) => names.map(name => jasmine.objectContaining({ name }));
		const posted = () => (Util.error as jasmine.Spy).calls.allArgs().map(([message]) => message);
		const requireStack = (...file: string[]) => `Cannot find module 'x'\nRequire stack:\n- ${path.join(tempDir, "node_modules", ...file)}`;

		beforeEach(() => {
			project();
			runMigrations = spyOn(updateMigrations, "runMigrations").and.callFake(async (_collection, migrations) => ({ completed: migrations, notRun: [] }));
			loadDevKit = spyOn(updateMigrations, "loadDevKit").and.resolveTo();
			spyOn(Util, "canPrompt").and.returnValue(false);
		});

		it("runs the required migrations in (from, to] by version after the checks, then lists the optional ones", async () => {
			const [collection] = installFixture();

			await migrate();

			expect(Util.spawnSync).toHaveBeenCalledOnceWith("git", ["status", "--porcelain", "--", "."], { encoding: "utf8" });
			expect(loadDevKit).toHaveBeenCalledBefore(runMigrations);
			expect(runMigrations).toHaveBeenCalledOnceWith(collection, named("first", "second"), "npm");
			expect(output).toEqual([
				"Not a Git repository: review and revert the update's changes manually.",
				"Migrations of fixture-lib from 1.0.0 to 2.0.0:",
				"To run the optional migrations of fixture-lib, use:",
				"  ig update fixture-lib --name later",
				"  ig update fixture-lib --name extra",
				"Migrations completed. Review the changes, then run your build and tests."
			]);
			expect(process.exitCode).not.toBe(1);
		});

		it("runs the optional migrations chosen in the prompt, with the recommended ones preselected", async () => {
			const [collection] = installFixture();
			(Util.canPrompt as jasmine.Spy).and.returnValue(true);
			const checkbox = spyOn(InquirerWrapper, "checkbox").and.resolveTo(["later"]);

			await migrate();

			expect(checkbox).toHaveBeenCalledOnceWith({
				message: "Select the optional migrations of fixture-lib to run",
				choices: [{ value: "later", name: "later", checked: false }, { value: "extra", name: "extra: Extra", checked: true }]
			});
			expect(runMigrations.calls.allArgs()).toEqual([[collection, named("first", "second"), "npm"], [collection, named("later"), "npm"]]);
		});

		it("bounds the range with --to, accepts short versions and rejects invalid ones", async () => {
			const [collection] = installFixture();

			await migrate({ from: "1", to: "1.6" });
			await migrate({ from: "x" });
			await migrate({ to: "y" });

			expect(runMigrations).toHaveBeenCalledOnceWith(collection, named("first"), "npm");
			expect(output).toContain("Migrations of fixture-lib from 1.0.0 to 1.6.0:");
			expect(output).toContain(`"x" is not a valid version.`);
			expect(output).toContain(`"y" is not a valid version.`);
			expect(process.exitCode).toBe(1);
		});

		it("runs one migration with --name, whatever its version", async () => {
			const [collection] = installFixture();

			await migrate({ from: undefined, name: "old" });
			await migrate({ from: undefined, name: "missing" });

			expect(runMigrations).toHaveBeenCalledOnceWith(collection, named("old"), "npm");
			expect(output).toContain(`fixture-lib has no migration named "missing".`);
		});

		it("lists the migrations with --dry-run, without checking git, loading DevKit or running them", async () => {
			installFixture();

			await migrate({ dryRun: true });
			await migrate({ from: "2.0.0", dryRun: true });

			expect(output).toEqual([
				"Migrations of fixture-lib from 1.0.0 to 2.0.0:",
				"  first: First",
				"  second: Second",
				"  later (optional)",
				"  extra (optional): Extra",
				"Dry run: no files were changed.",
				"Migrations of fixture-lib from 2.0.0 to 2.0.0:",
				"No migrations to run."
			]);
			expect(Util.spawnSync).not.toHaveBeenCalled();
			expect(loadDevKit).not.toHaveBeenCalled();
			expect(runMigrations).not.toHaveBeenCalled();
		});

		it("stops before running anything when the DevKit preflight fails, showing its error locally, not in analytics", async () => {
			installFixture();
			const error = requireStack("@angular-devkit", "schematics", "tools", "index.js");
			loadDevKit.and.rejectWith(new Error(error));

			await migrate();

			expect(posted()).toEqual(["Unable to load @angular-devkit/schematics to run the migrations."]);
			expect(Util.warn).toHaveBeenCalledWith(error, "red");
			expect(runMigrations).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("lists optional-only migrations without a terminal, even when DevKit is unavailable", async () => {
			installFixture();
			loadDevKit.and.rejectWith(new Error("Running migrations requires @angular-devkit/schematics."));

			await migrate({ from: "1.6.0", to: "1.9.0" });

			expect(output.slice(-2)).toEqual(["To run the optional migrations of fixture-lib, use:", "  ig update fixture-lib --name later"]);
			expect(loadDevKit).not.toHaveBeenCalled();
			expect(runMigrations).not.toHaveBeenCalled();
			expect(process.exitCode).not.toBe(1);
		});

		it("reports a failed migration with the commands for the rest, showing its error locally, not in analytics, and offers no optional ones", async () => {
			installFixture();
			const error = requireStack("fixture-lib", "migrations", "second.js");
			runMigrations.and.resolveTo({
				completed: [{ name: "first" }], failed: { migration: { name: "second", version: "2.0.0" }, error }, notRun: [{ name: "third" }]
			});

			await migrate();

			expect(output.slice(-4)).toEqual([
				"Migration second (2.0.0) failed, and its changes weren't written.",
				error,
				"Not run: third. Run it with: ig update fixture-lib --name third",
				"Review the changes of the completed migrations with git diff."
			]);
			expect(posted()).toEqual(["Migration second (2.0.0) failed, and its changes weren't written."]);
			expect(process.exitCode).toBe(1);

			runMigrations.and.resolveTo({ completed: [], failed: { migration: { name: "unversioned" }, error }, notRun: [] });
			await migrate();

			expect(output).toContain("Migration unversioned failed, and its changes weren't written.");
		});

		it("shows a reader error locally, not in analytics", async () => {
			const [collection] = installFixture();
			fs.writeFileSync(collection, "{");

			await migrate();

			expect(posted()).toEqual(["Unable to read the migrations of fixture-lib."]);
			expect(Util.warn).toHaveBeenCalledWith(`${collection} is not a valid migrations collection.`, "red");
			expect(process.exitCode).toBe(1);
		});

		it("stops on uncommitted changes in the project unless --allow-dirty", async () => {
			installFixture();
			(Util.spawnSync as jasmine.Spy).and.returnValue({ status: 0, stdout: " M src/app.ts\n" });

			await migrate();

			expect(output).toEqual(["Uncommitted changes. Commit or stash them first, or rerun with --allow-dirty."]);
			expect(runMigrations).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);

			await migrate({ allowDirty: true });

			expect(output).toContain("Uncommitted changes: the update's changes will be mixed with them.");
			expect(runMigrations).toHaveBeenCalledTimes(1);

			(Util.spawnSync as jasmine.Spy).and.returnValue({ status: 0, stdout: "" });
			output = [];
			await migrate();

			expect(output[0]).toBe("Migrations of fixture-lib from 1.0.0 to 2.0.0:");
			expect(runMigrations).toHaveBeenCalledTimes(2);
		});

		it("checks the request before running anything", async () => {
			installFixture();
			fs.mkdirSync("node_modules/plain-lib");
			fs.writeFileSync("node_modules/plain-lib/package.json", JSON.stringify({ name: "plain-lib", version: "1.0.0" }));
			const cases: [Flags, string][] = [
				[{ packages: [] }, "A single package must be specified when using --migrate-only or --name."],
				[{ packages: ["fixture-lib", "plain-lib"] }, "A single package must be specified when using --migrate-only or --name."],
				[{ skipInstall: true }, "--skip-install can't be combined with --migrate-only or --name."],
				[{ packages: ["missing-lib"] }, "Package missing-lib is not installed."],
				[{ packages: ["plain-lib"] }, "plain-lib doesn't provide migrations for webcomponents."],
				[{ from: undefined }, "--migrate-only needs --from <version>, or --name <migration>."]
			];
			for (const [args, message] of cases) {
				await migrate(args);
				expect(output).withContext(JSON.stringify(args)).toContain(message);
			}
			expect(runMigrations).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("rejects invalid package names, unsupported versions and duplicates before anything else", async () => {
			const unsupported = (spec: string) => `Unsupported version "${spec}" for fixture-lib: only registry versions, ranges and tags are supported.`;
			const cases: [string[], string][] = [
				[["Fixture-lib"], `Invalid package name "Fixture-lib".`],
				[["-x"], `Invalid package name "-x".`],
				[[".hidden"], `Invalid package name ".hidden".`],
				[["fixture-lib@file:../lib"], unsupported("file:../lib")],
				[["fixture-lib@workspace:*"], unsupported("workspace:*")],
				[["fixture-lib@github:org/lib"], unsupported("github:org/lib")],
				[["fixture-lib@"], unsupported("")]
			];
			for (const [packages, message] of cases) {
				await migrate({ packages });
				expect(output).withContext(packages.join(" ")).toContain(message);
			}
			await run({ packages: ["fixture-lib", "fixture-lib@^2"] });

			expect(output).toContain(`Duplicate package "fixture-lib".`);
			expect(Util.spawnSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("accepts versions, ranges, tags and scoped names, warning that a version has no effect", async () => {
			installFixture();

			for (const spec of ["2.0.0", "^2", "next"]) {
				await migrate({ packages: [`fixture-lib@${spec}`] });
			}
			await migrate({ packages: ["@scope/lib@~1.2"] });

			expect(output).toContain(`The version "^2" has no effect with --migrate-only.`);
			expect(runMigrations).toHaveBeenCalledTimes(3);
			expect(output).toContain("Package @scope/lib is not installed.");
		});

		it("doesn't update selected packages yet", async () => {
			const getPlan = plan();

			await run({ packages: ["igniteui-webcomponents"] });

			expect(output).toEqual(["Updating selected packages isn't supported yet for React and Web Components projects. " +
				"Run ig update without packages, or use --migrate-only."]);
			expect(getPlan).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		const frameworks: [string, Record<string, string>, string | undefined, string][] = [
			["the local config, not the global one or the dependencies", { react: "^19.0.0" }, "webcomponents", "webcomponents"],
			["react, also with Web Components packages", { react: "^19.0.0", "igniteui-webcomponents": "~7.0.0", lit: "^3.0.0" }, undefined, "react"],
			["lit", { lit: "^3.0.0" }, undefined, "webcomponents"],
			["a Web Components charts package", { "igniteui-webcomponents-charts": "~7.0.0" }, undefined, "webcomponents"],
			["a licensed Web Components grids package", { "@infragistics/igniteui-webcomponents-grids": "~7.0.0" }, undefined, "webcomponents"],
			["the dock manager", { "igniteui-dockmanager": "~2.0.0" }, undefined, "webcomponents"]
		];
		for (const [signal, dependencies, configured, framework] of frameworks) {
			it(`runs the ${framework} migrations of a map, identified by ${signal}`, async () => {
				(ProjectConfig.getConfig as jasmine.Spy).and.returnValue({ project: { framework: "react" } });
				project({ dependencies });
				if (configured) {
					fs.writeFileSync("ignite-ui-cli.json", JSON.stringify({ project: { framework: configured } }));
				}
				const [react, webcomponents] = installFixture(MAP);

				await migrate();

				expect(runMigrations).toHaveBeenCalledOnceWith(framework === "react" ? react : webcomponents, named("first", "second"), "npm");
			});
		}

		it("runs single-path migrations but not a map when the framework isn't identified, and finds no map entry for Angular", async () => {
			(ProjectConfig.getConfig as jasmine.Spy).and.returnValue({});
			project({ dependencies: { vue: "^3.0.0" } });
			installFixture(MAP);

			await migrate({ verbose: true });

			expect(log()).not.toContain("Framework: webcomponents");
			expect(output).toContain("Can't tell whether this is a React or Web Components project, and fixture-lib has migrations for each. " +
				`Set "project.framework" to "react" or "webcomponents" in ignite-ui-cli.json.`);
			expect(runMigrations).not.toHaveBeenCalled();

			const [collection] = installFixture();
			await migrate();

			expect(runMigrations).toHaveBeenCalledOnceWith(collection, named("first", "second"), "npm");

			(ProjectConfig.getConfig as jasmine.Spy).and.returnValue({ project: { framework: "webcomponents" } });
			project({ dependencies: { "@angular/core": "^21.0.0" } });
			installFixture(MAP);
			await migrate();

			expect(output).toContain("fixture-lib doesn't provide migrations for angular.");
		});
	});

	describe("angular", () => {
		const ngBin = () => path.join(tempDir, "node_modules", "@angular", "cli", "bin", "ng.js");

		function installAngularCli(nodeModules: string, bin = "bin/ng.js") {
			const cliDir = path.join(nodeModules, "@angular", "cli");
			fs.mkdirSync(path.join(cliDir, "bin"), { recursive: true });
			fs.writeFileSync(path.join(cliDir, bin), "");
			return path.join(cliDir, bin);
		}

		function angularProject(pkgJson: object, withCli = true) {
			fs.writeFileSync("package.json", JSON.stringify(pkgJson));
			if (withCli) {
				installAngularCli(path.join(tempDir, "node_modules"));
			}
		}

		const hint = (igniteUI: string) => "If ng update reported incompatible peer dependencies, " +
			`update Angular and Ignite UI together: ng update @angular/core @angular/cli ${igniteUI}`;
		const forcedWarning = (igniteUI: string) => "--force let ng update continue despite incompatible peer dependencies; " +
			"any it found are listed above. If it updated anything, Angular packages may now be on incompatible versions, " +
			"for example @angular/core on a newer major than @angular/cli. Run your build and tests. If the build fails, " +
			"update Angular and Ignite UI together (in a git repository, commit the changes first or add --allow-dirty): " +
			`ng update @angular/core @angular/cli ${igniteUI}`;

		beforeEach(() => {
			(ProjectConfig.getConfig as jasmine.Spy).and.returnValue({ project: { framework: "angular" } });
			(Util.spawnSync as jasmine.Spy).and.returnValue({ status: 0 });
		});

		it("previews, then runs, the project's ng update for the package and the ones with ig migrations, with inherited stdio and no shell", async () => {
			angularProject({
				dependencies: { "igniteui-angular": "~21.0.0" },
				devDependencies: { "@igniteui/angular-schematics": "~15.0.0", "igniteui-cli": "~15.0.0" }
			});
			const getPlan = plan();

			await run({ dryRun: true });

			expect(log()).toContain(`Would run "ng update igniteui-angular igniteui-cli @igniteui/angular-schematics" with the project's Angular CLI.`);
			expect(log()).toContain("including new majors, applies their migrations and installs dependencies. In a git repository, it stops if the project has uncommitted changes.");
			expect(log()).toContain("Dry run: no files were changed.");
			expect(Util.spawnSync).not.toHaveBeenCalled();

			await run();

			expect(log()).toContain(`Running "ng update igniteui-angular igniteui-cli @igniteui/angular-schematics" with the project's Angular CLI.`);
			expect(Util.spawnSync).toHaveBeenCalledOnceWith("node",
				[ngBin(), "update", "igniteui-angular", "igniteui-cli", "@igniteui/angular-schematics"], { stdio: "inherit" });
			expect(getPlan).not.toHaveBeenCalled();
			expect(child_process.execSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(0);
		});

		it("updates the licensed package from devDependencies, detected without a project config, and names it in the failure hint", async () => {
			(ProjectConfig.getConfig as jasmine.Spy).and.returnValue({});
			(Util.spawnSync as jasmine.Spy).and.returnValue({ status: 1 });
			angularProject({ dependencies: { "@angular/core": "^21.0.0" }, devDependencies: { "@infragistics/igniteui-angular": "~21.0.0" } });

			await run();

			expect(Util.spawnSync).toHaveBeenCalledOnceWith("node", [ngBin(), "update", "@infragistics/igniteui-angular"], { stdio: "inherit" });
			expect(output).toContain(hint("@infragistics/igniteui-angular"));
		});

		it("runs the extensionless bin/ng of Angular CLI 12", async () => {
			angularProject({ dependencies: { "igniteui-angular": "~12.0.0" } }, false);
			const bin = installAngularCli(path.join(tempDir, "node_modules"), "bin/ng");

			await run();

			expect(Util.spawnSync).toHaveBeenCalledOnceWith("node", [bin, "update", "igniteui-angular"], { stdio: "inherit" });
		});

		it("runs an Angular CLI hoisted to a parent node_modules", async () => {
			fs.mkdirSync("app");
			process.chdir("app");
			angularProject({ dependencies: { "igniteui-angular": "~21.0.0" } });

			await run();

			expect(Util.spawnSync).toHaveBeenCalledOnceWith("node", [ngBin(), "update", "igniteui-angular"], { stdio: "inherit" });
		});

		it("doesn't fall back to an Angular CLI outside the project, such as one on NODE_PATH", async () => {
			const env = process.env;
			const globalModules = path.join(tempDir, "global");
			process.env = { ...env, NODE_PATH: globalModules };
			installAngularCli(globalModules);
			(Module as any)._initPaths();
			angularProject({ dependencies: { "igniteui-angular": "~21.0.0" } }, false);

			try {
				await run();
			} finally {
				process.env = env;
				(Module as any)._initPaths();
			}

			expect(log()).toContain("Angular CLI (@angular/cli) not found in this project.");
			expect(Util.spawnSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("previews without an installed Angular CLI, noting that --skip-install doesn't apply", async () => {
			angularProject({ dependencies: { "igniteui-angular": "~21.0.0" } }, false);

			await run({ dryRun: true, skipInstall: true });

			expect(log()).toContain("--skip-install is not supported for Angular projects");
			expect(log()).toContain(`Would run "ng update igniteui-angular"`);
			expect(Util.spawnSync).not.toHaveBeenCalled();
			expect(process.exitCode).not.toBe(1);
		});

		it("rejects --skip-install without running anything", async () => {
			angularProject({ dependencies: { "igniteui-angular": "~21.0.0" } });

			await run({ skipInstall: true });

			expect(output).toEqual(["--skip-install is not supported for Angular projects: ng update always installs dependencies."]);
			expect(Util.spawnSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("asks to install dependencies when the project has no Angular CLI", async () => {
			angularProject({ dependencies: { "igniteui-angular": "~21.0.0" } }, false);

			await run();

			expect(output).toEqual(["Angular CLI (@angular/cli) not found in this project. " +
				"Install dependencies first (for example, npm install) and rerun ig update."]);
			expect(Util.spawnSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("refuses to choose between the trial and licensed packages", async () => {
			angularProject({ dependencies: { "igniteui-angular": "~21.0.0", "@infragistics/igniteui-angular": "~21.0.0" } });

			await run();

			expect(log()).toContain("Both igniteui-angular and @infragistics/igniteui-angular are listed in package.json.");
			expect(Util.spawnSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("has nothing to update without an Ignite UI for Angular package", async () => {
			angularProject({ dependencies: { "@angular/core": "^21.0.0" }, devDependencies: { "igniteui-cli": "~15.0.0" } });

			await run();

			expect(output).toEqual(["No Ignite UI for Angular package found in package.json. Nothing to update."]);
			expect(Util.spawnSync).not.toHaveBeenCalled();
			expect(process.exitCode).not.toBe(1);
		});

		it("fails without a package.json", async () => {
			await run();

			expect(log()).toContain("No valid package.json found");
			expect(process.exitCode).toBe(1);
		});

		const forwarded: [Flags, string[]][] = [
			[{ force: true }, ["--force"]],
			[{ allowDirty: true }, ["--allow-dirty"]],
			[{ verbose: true }, ["--verbose"]],
			[{ verbose: true, allowDirty: true, force: true }, ["--force", "--allow-dirty", "--verbose"]]
		];
		for (const [flags, options] of forwarded) {
			it(`forwards ${options.join(" ")} to ng update, and previews the same command`, async () => {
				angularProject({ dependencies: { "igniteui-angular": "~21.0.0" }, devDependencies: { "igniteui-cli": "~15.0.0" } });
				const getPlan = plan();

				await run({ ...flags, dryRun: true });

				expect(log()).toContain(`Would run "ng update igniteui-angular igniteui-cli ${options.join(" ")}" with the project's Angular CLI.`);
				expect(Util.spawnSync).not.toHaveBeenCalled();

				await run(flags);

				expect(Util.spawnSync).toHaveBeenCalledOnceWith("node",
					[ngBin(), "update", "igniteui-angular", "igniteui-cli", ...options], { stdio: "inherit" });
				expect(getPlan).not.toHaveBeenCalled();
				expect(child_process.execSync).not.toHaveBeenCalled();
				expect(process.exitCode).toBe(0);
			});
		}

		it("states what --force and --allow-dirty change in the preview", async () => {
			angularProject({ dependencies: { "igniteui-angular": "~21.0.0" } });

			await run({ dryRun: true, force: true });

			expect(log()).toContain("and installs dependencies. ng update doesn't stop on incompatible peer dependencies, " +
				"so Angular packages can end up on incompatible versions. In a git repository, it stops if the project has uncommitted changes.");

			await run({ dryRun: true, allowDirty: true });

			expect(log()).toContain("and installs dependencies. It runs even with uncommitted changes.");
			expect(output.slice(-2).join()).not.toContain("it stops if the project has uncommitted changes");
		});

		it("prints the Angular CLI it runs with --verbose, and still previews without one", async () => {
			angularProject({ dependencies: { "igniteui-angular": "~21.0.0" } }, false);

			await run({ dryRun: true, verbose: true });

			expect(log()).toContain(`Would run "ng update igniteui-angular --verbose"`);
			expect(log()).not.toContain("Angular CLI:");
			expect(process.exitCode).not.toBe(1);

			installAngularCli(path.join(tempDir, "node_modules"));
			await run({ verbose: true });

			expect(Util.log).toHaveBeenCalledWith("Framework: angular (from the project config)", "gray");
			expect(Util.log).toHaveBeenCalledWith(`Angular CLI: ${ngBin()}`, "gray");
			expect(Util.spawnSync).toHaveBeenCalledOnceWith("node", [ngBin(), "update", "igniteui-angular", "--verbose"], { stdio: "inherit" });
		});

		it("still rejects --skip-install with the other flags, and keeps the failure hint with --force", async () => {
			angularProject({ dependencies: { "igniteui-angular": "~21.0.0" } });

			await run({ skipInstall: true, force: true, allowDirty: true, verbose: true });

			expect(log()).toContain("--skip-install is not supported for Angular projects");
			expect(Util.spawnSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);

			(Util.spawnSync as jasmine.Spy).and.returnValue({ status: 1 });
			await run({ force: true });

			expect(Util.spawnSync).toHaveBeenCalledOnceWith("node", [ngBin(), "update", "igniteui-angular", "--force"], { stdio: "inherit" });
			expect(output).toContain(hint("igniteui-angular"));
			expect(process.exitCode).toBe(1);
		});

		const results: [string, Flags, object, number, string[]][] = [
			["success", {}, { status: 0 }, 0, []],
			["failure", {}, { status: 2 }, 2, [hint("igniteui-angular")]],
			["termination by a signal", {}, { status: null, signal: "SIGTERM" }, 1, [hint("igniteui-angular")]],
			["spawn error", {}, { status: null, error: new Error("spawnSync node ENOENT") }, 1, ["Unable to run the Angular CLI: spawnSync node ENOENT"]],
			["success with --force", { force: true }, { status: 0 }, 0, [forcedWarning("igniteui-angular")]],
			["failure with --force", { force: true }, { status: 2 }, 2, [hint("igniteui-angular")]],
			["termination by a signal with --force", { force: true }, { status: null, signal: "SIGTERM" }, 1, [hint("igniteui-angular")]],
			["spawn error with --force", { force: true }, { status: null, error: new Error("spawnSync node ENOENT") }, 1,
				["Unable to run the Angular CLI: spawnSync node ENOENT"]]
		];
		for (const [name, flags, result, exitCode, messages] of results) {
			it(`passes the ng update exit code through (${name})`, async () => {
				angularProject({ dependencies: { "igniteui-angular": "~21.0.0" } });
				(Util.spawnSync as jasmine.Spy).and.returnValue(result);

				await run(flags);

				expect(process.exitCode).toBe(exitCode);
				expect(output.slice(1)).toEqual(messages);
			});
		}

		it("names the licensed package in the recovery command after a forced update", async () => {
			angularProject({ devDependencies: { "@infragistics/igniteui-angular": "~21.0.0" } });

			await run({ force: true, allowDirty: true, verbose: true });

			expect(output).toContain(forcedWarning("@infragistics/igniteui-angular"));
			expect(process.exitCode).toBe(0);
		});

		it("forwards the given packages and migration options, adding the companions only to Ignite UI updates", async () => {
			angularProject({ dependencies: { "igniteui-angular": "~21.0.0", "@angular/core": "~21.0.0" }, devDependencies: { "igniteui-cli": "~15.0.0" } });
			const calls: [Flags, string[]][] = [
				[{ packages: ["igniteui-angular@22", "@angular/core"] }, ["igniteui-angular@22", "@angular/core", "igniteui-cli"]],
				[{ packages: ["@angular/core"] }, ["@angular/core"]],
				[{ packages: ["igniteui-angular"], migrateOnly: true, from: "20.0.0", to: "21.0.0" },
					["igniteui-angular", "--migrate-only", "--from", "20.0.0", "--to", "21.0.0"]],
				[{ packages: ["igniteui-angular"], name: "migration-01" }, ["igniteui-angular", "--migrate-only", "--name", "migration-01"]]
			];
			for (const [args, ngArgs] of calls) {
				(Util.spawnSync as jasmine.Spy).calls.reset();
				await run(args);
				expect(Util.spawnSync).withContext(JSON.stringify(args)).toHaveBeenCalledOnceWith("node", [ngBin(), "update", ...ngArgs], { stdio: "inherit" });
			}
		});

		it("requires a single package with --migrate-only or --name instead of picking the Ignite UI package", async () => {
			angularProject({ dependencies: { "igniteui-angular": "~21.0.0" } });
			const message = "A single package must be specified when using --migrate-only or --name.";

			await run({ migrateOnly: true, from: "20.0.0" });
			await run({ name: "migration-01" });
			await run({ packages: ["igniteui-angular", "@angular/core"], migrateOnly: true, from: "20.0.0" });

			expect(output).toEqual([message, message, message]);
			expect(Util.spawnSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("previews requested versions and migrate-only, and gives the Ignite UI hint only for Ignite UI updates", async () => {
			angularProject({ dependencies: { "igniteui-angular": "~21.0.0", "@angular/core": "~21.0.0" } });

			await run({ packages: ["igniteui-angular@22"], dryRun: true });
			await run({ packages: ["igniteui-angular"], migrateOnly: true, from: "20.0.0", dryRun: true });

			expect(log()).toContain("It updates these packages to the requested versions, applies their migrations and installs dependencies.");
			expect(log()).toContain(`Would run "ng update igniteui-angular --migrate-only --from 20.0.0" with the project's Angular CLI. ` +
				"It runs the package's migrations without changing versions.");

			(Util.spawnSync as jasmine.Spy).and.returnValue({ status: 1 });
			await run({ packages: ["@angular/core"] });

			expect(log()).not.toContain("If ng update reported incompatible peer dependencies");
			expect(process.exitCode).toBe(1);
		});
	});
});
