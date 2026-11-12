import { App, GoogleAnalytics, InquirerWrapper, PackageManifest, PackageUpdate, ProjectConfig, Util } from "@igniteui/cli-core";
import child_process from "child_process";
import * as fs from "fs";
import * as Module from "module";
import * as os from "os";
import * as path from "path";
import * as versionUpdate from "../../packages/core/update/version-update";
import { default as updateCmd } from "../../packages/cli/lib/commands/update";
import * as updateMigrations from "../../packages/cli/lib/update/migration-runner";

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

	function configure(framework?: string) {
		if (framework) {
			fs.writeFileSync("ignite-ui-cli.json", JSON.stringify({ project: { framework } }));
		} else {
			fs.rmSync("ignite-ui-cli.json", { force: true });
		}
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
	const updateWc = (args: Flags = {}) => run({ packages: [WC], ...args });
	const installOptions = () => ({ stdio: "inherit" as const, env: { ...process.env, YARN_ENABLE_IMMUTABLE_INSTALLS: "false" } });
	const gitOptions = () => ({ encoding: "utf8", env: { ...process.env, LC_ALL: "C" } });
	const NOT_A_REPOSITORY = "fatal: not a git repository (or any of the parent directories): .git\n";
	const GIT_FAILURES: [string, object][] = [
		["an output overflow", { status: null, signal: "SIGTERM", error: Object.assign(new Error("spawnSync git ENOBUFS"), { code: "ENOBUFS" }), stdout: " M src/app.ts" }],
		["dubious ownership", { status: 128, stdout: "", stderr: "fatal: detected dubious ownership in repository at 'C:/secret/app'\n" }],
		["an execution error, even with git's non-repository message", { status: null, error: Object.assign(new Error("spawnSync git EACCES"), { code: "EACCES" }), stderr: NOT_A_REPOSITORY }],
		["a signal", { status: null, signal: "SIGKILL", stdout: "", stderr: "" }]
	];
	const read = (file: string) => fs.readFileSync(file, "utf8");
	const log = () => output.join("\n");

	const SCHEMATICS = {
		old: { version: "1.0.0", description: "Old", factory: "./old" },
		second: { version: "2.0.0", description: "Second", factory: "./second" },
		first: { version: "1.5.0", description: "First", factory: "./first" },
		extra: { version: "2.0.0", description: "Extra", factory: "./extra", optional: true, recommended: true },
		later: { version: "1.8.0", factory: "./later", optional: true }
	};
	const MAP = { react: "./migrations/react.json", webcomponents: "./migrations/webcomponents.json" };
	let runMigrations: jasmine.Spy;
	let checkDevKit: jasmine.Spy;
	let execSync: jasmine.Spy;
	let spawnSync: jasmine.Spy;
	let getConfig: jasmine.Spy;
	let collection: string;

	function installFixture(migrations: string | Record<string, string> = "./migrations/collection.json", name = "fixture-lib", version = "2.0.0") {
		const dir = path.join("node_modules", name);
		const files = typeof migrations === "string" ? [migrations] : Object.values(migrations);
		for (const file of files) {
			fs.mkdirSync(path.dirname(path.join(dir, file)), { recursive: true });
			fs.writeFileSync(path.join(dir, file), JSON.stringify({ schematics: SCHEMATICS }));
		}
		fs.writeFileSync(path.join(dir, "package.json"), JSON.stringify({ name, version, "ig-update": { migrations } }));
		return files.map(file => path.resolve(dir, file));
	}

	const named = (...names: string[]) => names.map(name => jasmine.objectContaining({ name }));
	/** Messages sent to analytics */
	const posted = () => (Util.error as jasmine.Spy).calls.allArgs().map(([message]) => message);

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
		execSync = spyOn(child_process, "execSync");
		spawnSync = spyOn(Util, "spawnSync").and.returnValue({ status: 128, stdout: "", stderr: NOT_A_REPOSITORY } as any);
		spyOn(GoogleAnalytics, "post");
		getConfig = spyOn(ProjectConfig, "getConfig").and.returnValue({} as any);
		configure("webcomponents");
		runMigrations = spyOn(updateMigrations, "runMigrations").and.callFake(async (_collection, migrations) => ({ completed: migrations, notRun: [] }));
		checkDevKit = spyOn(updateMigrations, "checkDevKit").and.resolveTo();
		spyOn(Util, "canPrompt").and.returnValue(false);
	});

	afterEach(() => {
		expect(log()).not.toMatch(/\bsafe\b/i);
		process.chdir(originalCwd);
		process.exitCode = originalExitCode;
		fs.rmSync(tempDir, { recursive: true, force: true });
	});

	describe("frameworks", () => {
		it("posts analytics and detects React from package.json without a project config, saying where it came from", async () => {
			configure();
			project({ dependencies: { [WC]: "~6.0.0", react: "^19.0.0" } });
			plan();

			await updateCmd.handler({ _: [], $0: "ig", packages: [WC], verbose: true });

			expect(GoogleAnalytics.post).toHaveBeenCalledWith({ t: "screenview", cd: "Update" });
			expect(GoogleAnalytics.post).toHaveBeenCalledWith({ t: "event", ec: "$ig update", cd1: "react" });
			expect(log()).toContain("Update plan (React, npm)");
			expect(Util.log).toHaveBeenCalledWith("Framework: react (detected from package.json)", "gray");
			expect(Util.log).toHaveBeenCalledWith("Package manager: npm (packageManager field not set; lockfiles: none)", "gray");
		});

		it("doesn't update jQuery or Blazor projects", async () => {
			const getPlan = plan();
			for (const framework of ["jquery", "blazor"]) {
				configure(framework);
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
			configure();
			await run();
			expect(log()).toContain("No valid package.json found");
			expect(process.exitCode).toBe(1);
		});

		it("ignores a global framework setting, also with a local config that sets none", async () => {
			getConfig.and.returnValue({ project: { framework: "angular" } });
			project({ dependencies: { [WC]: "~6.0.0", react: "^19.0.0" } });
			plan();
			for (const local of [undefined, "{}"]) {
				configure();
				if (local) {
					fs.writeFileSync("ignite-ui-cli.json", local);
				}
				output = [];
				await updateWc({ dryRun: true });
				expect(log()).withContext(`local config: ${local}`).toContain("Update plan (React, npm)");
			}
			expect(spawnSync).not.toHaveBeenCalled();
		});
	});

	describe("discovery", () => {
		const hint = "There might be additional outdated packages that don't provide ig update support. Update them with your package manager.";
		const discover = (result: Awaited<ReturnType<typeof versionUpdate.discoverUpdates>>) =>
			spyOn(versionUpdate, "discoverUpdates").and.resolveTo(result);

		it("lists the available updates with the commands to run, changing nothing whatever the flags", async () => {
			const original = project();
			const getPlan = plan();
			const discovered = discover({ updates: [
				{ name: "igniteui-cli", baseline: "15.7.0", latest: "15.8.2" },
				{ name: WC, baseline: "6.0.0", latest: "7.4.1" }
			], failures: [] });

			await run({ force: true, allowDirty: true, skipInstall: true, dryRun: true });

			expect(discovered).toHaveBeenCalledOnceWith(false);
			expect(output).toEqual([
				"Updates available:",
				"  igniteui-cli            15.7.0 -> 15.8.2  ig update igniteui-cli",
				"  igniteui-webcomponents  6.0.0 -> 7.4.1    ig update igniteui-webcomponents",
				hint
			]);
			expect(read("package.json")).toBe(original);
			expect(getPlan).not.toHaveBeenCalled();
			expect(spawnSync).not.toHaveBeenCalled();
			expect(execSync).not.toHaveBeenCalled();
			expect(checkDevKit).not.toHaveBeenCalled();
			expect(process.exitCode).not.toBe(1);
		});

		it("reports failed lookups separately and out of analytics, and says when no update was found", async () => {
			project();
			const error = "Unable to get @acme/secret@latest from the registry: 404 Not Found - GET https://npm.acme.internal/@acme%2fsecret";
			const failed = ["Unable to check some packages for updates.", error];
			const discovered = discover({ updates: [{ name: WC, baseline: "6.0.0", latest: "6.1.0" }], failures: [error] });

			await run({ verbose: true });

			expect(discovered).toHaveBeenCalledOnceWith(true);
			expect(output.slice(-4)).toEqual(["  igniteui-webcomponents  6.0.0 -> 6.1.0  ig update igniteui-webcomponents", hint, ...failed]);
			expect(posted()).toEqual([failed[0]]);
			expect(process.exitCode).toBe(1);

			output = [];
			discovered.and.resolveTo({ updates: [], failures: [error] });
			await run();
			expect(output).toEqual(["No updates found among the packages that could be checked.", hint, ...failed]);

			output = [];
			process.exitCode = originalExitCode;
			discovered.and.resolveTo({ updates: [], failures: [] });
			await run();
			expect(output).toEqual(["No updates available for the packages that support ig update.", hint]);
			expect(process.exitCode).not.toBe(1);

			output = [];
			discovered.and.rejectWith(new Error("Unable to parse node_modules/x/package.json: Unexpected end of JSON input."));
			await run();
			expect(output).toEqual(["Unable to check for updates.", "Unable to parse node_modules/x/package.json: Unexpected end of JSON input."]);
			expect(process.exitCode).toBe(1);
		});
	});

	describe("plan", () => {
		it("prints updates, deprecations, Node engine mismatches, up-to-date, skipped packages and newer majors in a dry run", async () => {
			const original = project({ workspaces: ["packages/*"] });
			plan(
				{ manifest: { version: "6.1.0", deprecated: "use 6.1.1", engines: { node: ">=999" } }, nextMajor: "7.4.1", newest: "6.2.0" },
				{ name: "igniteui-cli", section: "devDependencies", declared: "~15.7.0", installed: "15.7.0", baseline: "15.7.0",
					target: "15.8.2", newRange: "~15.8.2", manifest: { version: "15.8.2", engines: { node: ">=10" } } },
				{ name: "igniteui-react", declared: "~19.0.0", baseline: "19.0.0", target: "19.1.0", newRange: "~19.1.0",
					manifest: { version: "19.1.0", engines: { node: "latest" } } },
				{ name: "igniteui-grid-lite", baseline: "0.11.0", target: "0.11.0", newRange: undefined },
				{ name: "igniteui-dockmanager", declared: "workspace:*", skipped: "unsupported spec", target: undefined, newRange: undefined }
			);

			await updateWc({ dryRun: true, skipInstall: true });

			expect(output).toContain("  igniteui-webcomponents  not installed -> 6.1.0  (~6.0.0 -> ~6.1.0)  no migrations declared");
			expect(output).toContain("  igniteui-cli (dev)      15.7.0 -> 15.8.2  (~15.7.0 -> ~15.8.2)  no migrations declared");
			expect(output).toContain("    deprecated: use 6.1.1");
			expect(output).toContain(`    requires Node.js >=999, running ${process.version}`);
			expect(log()).not.toContain("requires Node.js >=10");
			expect(log()).withContext("invalid engines.node").not.toContain("requires Node.js latest");
			expect(output).toContain("Held back: igniteui-webcomponents 6.1.0 (6.2.0 available)");
			expect(output).toContain("Up to date: igniteui-grid-lite 0.11.0");
			expect(output).toContain("Skipped igniteui-dockmanager: unsupported spec");
			expect(log()).toContain("Newer version outside the requested range (not applied): igniteui-webcomponents 7.4.1");
			expect(log()).toContain("Only the root package.json is updated");
			expect(log()).toContain("Dry run: no files were changed.");
			expect(read("package.json")).toBe(original);
			expect(execSync).not.toHaveBeenCalled();
		});

		it("changes nothing when up to date, warning about a nested copy without blocking", async () => {
			const original = project();
			plan({ baseline: "6.1.0", target: "6.1.0", newRange: undefined, nested: "~7.4.1 (required by igniteui-react@19.9.0)" });

			await updateWc();

			expect(output).toContain("Not met by igniteui-webcomponents ~6.0.0: ~7.4.1 (required by igniteui-react@19.9.0). " +
				"The requiring packages may get a separate copy of igniteui-webcomponents; check that the copies work together at runtime.");
			expect(log()).toContain("Already up to date.");
			expect(read("package.json")).toBe(original);
			expect(execSync).not.toHaveBeenCalled();
			expect(process.exitCode).not.toBe(1);
		});

		it("reports a package held back by the requirements of other packages instead of calling it up to date", async () => {
			const original = project();
			plan(
				{ baseline: "6.1.0", target: "6.1.0", newRange: undefined, newest: "6.2.0" },
				{ name: "igniteui-grid-lite", baseline: "0.11.0", target: "0.11.0", newRange: undefined }
			);

			await updateWc();

			expect(output).toContain("Up to date: igniteui-grid-lite 0.11.0");
			expect(output).toContain("Held back: igniteui-webcomponents 6.1.0 (6.2.0 available)");
			expect(log()).toContain("Nothing to update.");
			expect(log()).not.toContain("Already up to date.");
			expect(read("package.json")).toBe(original);
			expect(execSync).not.toHaveBeenCalled();
			expect(process.exitCode).not.toBe(1);
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
			it(`runs "${installCommand}" with visible output after updating package.json (${source})`, async () => {
				const immutableInstalls = process.env.YARN_ENABLE_IMMUTABLE_INSTALLS;
				project(packageManager ? { packageManager } : {}, lockfiles);
				plan();
				let installedFrom: string | undefined;
				execSync.and.callFake(() => { installedFrom = read("package.json"); });

				await updateWc();

				expect(execSync).toHaveBeenCalledOnceWith(installCommand, installOptions());
				expect(process.env.YARN_ENABLE_IMMUTABLE_INSTALLS).toBe(immutableInstalls);
				expect(installedFrom).toContain(`"${WC}": "~6.1.0"`);
				expect(log()).toContain("Updated 1 package(s). Next: run your build and tests.");
				expect(process.exitCode).not.toBe(1);
			});
		}

		it("keeps the exit code non-zero while installing, so an interrupted install can't report success", async () => {
			project();
			plan();
			let exitCodeDuringInstall: typeof process.exitCode;
			execSync.and.callFake(() => { exitCodeDuringInstall = process.exitCode; });

			await updateWc();

			expect(exitCodeDuringInstall).toBe(1);
			expect(process.exitCode).toBe(0);
		});

		it("refuses to guess between several lockfiles, but updates package.json with --skip-install", async () => {
			const original = project({}, { "yarn.lock": "", "package-lock.json": "{}" });
			plan();

			await updateWc();

			expect(log()).toContain("Lockfiles of several package managers found (npm, yarn)");
			expect(read("package.json")).toBe(original);
			expect(execSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);

			process.exitCode = originalExitCode;
			await updateWc({ skipInstall: true });

			expect(read("package.json")).toContain(`"${WC}": "~6.1.0"`);
			expect(execSync).not.toHaveBeenCalled();
			expect(log()).toContain("Run your package manager's install command to update the lockfile.");
			expect(process.exitCode).not.toBe(1);
		});

		it("restores package.json and a binary bun.lockb byte for byte, and removes a lockfile created by the failed install", async () => {
			const lockb = Buffer.from([0xff, 0x00, 0xfe, 0x80]);
			const original = project({}, { "bun.lockb": lockb });
			plan();
			execSync.and.callFake(() => {
				fs.writeFileSync("bun.lockb", "changed");
				fs.writeFileSync("bun.lock", "created");
				throw new Error("Command failed: bun install");
			});

			await updateWc();

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
			execSync.and.callFake(() => {
				fs.mkdirSync("bun.lock");
				throw new Error("Command failed: bun install");
			});

			await updateWc();

			expect(read("package.json")).toBe(original);
			expect(fs.readFileSync("bun.lockb").equals(lockb)).toBe(true);
			expect(log()).toContain(`"bun install" failed. Could not restore bun.lock; restore them from version control;`);
			expect(process.exitCode).toBe(1);
		});

		it("rolls back a failed install whatever its exit status, including the statuses above 128 npm exits with on system errors", async () => {
			const exit = spyOn(process, "exit");
			plan();
			for (const status of [1, 254, 4294963238]) {
				const original = project({}, { "package-lock.json": "{}" });
				output = [];
				process.exitCode = originalExitCode;
				execSync.and.callFake(() => {
					fs.writeFileSync("package-lock.json", "changed");
					throw Object.assign(new Error("Command failed: npm install"), { status });
				});

				await updateWc();

				expect(read("package.json")).withContext(`status ${status}`).toBe(original);
				expect(read("package-lock.json")).withContext(`status ${status}`).toBe("{}");
				expect(log()).withContext(`status ${status}`).toContain(`"npm install" failed. Restored package.json and the lockfile; ` +
					`node_modules may be partially updated, run "npm ci" to resync it.`);
				expect(process.exitCode).withContext(`status ${status}`).toBe(1);
			}
			expect(exit).not.toHaveBeenCalled();
		});

		it("suggests ig upgrade-packages for trial packages", async () => {
			project({ dependencies: { [WC]: "~6.0.0", "igniteui-webcomponents-grids": "~6.0.0" } });
			plan({}, { name: "igniteui-webcomponents-grids" });

			await updateWc();

			expect(log()).toContain("To switch to licensed packages, run ig upgrade-packages.");
		});

		it("doesn't suggest ig upgrade-packages for licensed packages", async () => {
			project({ dependencies: { "@infragistics/igniteui-webcomponents-grids": "~6.0.0" } });
			plan({ name: "@infragistics/igniteui-webcomponents-grids" });

			await run({ packages: ["@infragistics/igniteui-webcomponents-grids"] });

			expect(log()).not.toContain("ig upgrade-packages");
		});
	});

	describe("--force", () => {
		const forceHint = "Rerun with --force to override these conflicts; the updated packages may then not work together.";
		const overridden = "~6.0.0 (required by igniteui-react@19.9.0)";
		const conflict = { name: "igniteui-grid-lite", conflict: 'no version in "^0.11.0" satisfies ~0.12.0', target: undefined, newRange: undefined };

		it("applies a forced plan after reporting every overridden range and a summary", async () => {
			project();
			const getPlan = plan(
				{ forced: overridden },
				{ name: "igniteui-grid-lite", baseline: "0.11.4", target: "0.11.4", newRange: undefined, forced: "0.11.0 (required by igniteui-react@19.9.0)" }
			);

			await updateWc({ force: true });

			expect(getPlan).toHaveBeenCalledOnceWith({ requests: [{ name: WC }], force: true, verbose: false });
			expect(output).toContain("Overridden by --force for igniteui-webcomponents: ~6.0.0 (required by igniteui-react@19.9.0)");
			expect(output).toContain("Overridden by --force for igniteui-grid-lite: 0.11.0 (required by igniteui-react@19.9.0)");
			expect(output).toContain("--force overrides the version requirements of 2 package(s); " +
				"the updated packages may not work together. Run your build and tests.");
			expect(read("package.json")).toContain(`"${WC}": "~6.1.0"`);
			expect(execSync).toHaveBeenCalledOnceWith("npm install --force", installOptions());
			expect(Util.log).not.toHaveBeenCalledWith(jasmine.any(String), "gray");
			expect(process.exitCode).toBe(0);
		});

		it("says the requirements remain unmet, without claiming an update, when --force changes nothing", async () => {
			const original = project();
			plan({ baseline: "6.1.0", target: "6.1.0", newRange: undefined, forced: "6.0.0 (required by igniteui-react@19.9.0)" });

			await updateWc({ force: true });

			expect(output).toContain("Overridden by --force for igniteui-webcomponents: 6.0.0 (required by igniteui-react@19.9.0)");
			expect(output).toContain("Nothing to update. The version requirements listed above for 1 package(s) remain unmet.");
			expect(log()).not.toContain("Already up to date");
			expect(log()).not.toContain("--force overrides");
			expect(read("package.json")).toBe(original);
			expect(execSync).not.toHaveBeenCalled();
			expect(process.exitCode).not.toBe(1);
		});

		it("announces forced updates only when they can proceed, in a dry run too", async () => {
			project({}, { "yarn.lock": "", "bun.lock": "" });
			plan({ forced: overridden });

			await updateWc({ force: true });

			expect(log()).toContain("Nothing was updated: unable to choose a package manager to install with.");
			expect(log()).not.toContain("--force overrides");
			expect(process.exitCode).toBe(1);

			process.exitCode = originalExitCode;
			await updateWc({ force: true, dryRun: true });

			expect(log()).toContain("--force overrides the version requirements of 1 package(s)");
			expect(log()).toContain("Dry run: no files were changed.");
			expect(process.exitCode).not.toBe(1);
		});

		const previews: [string, Flags, Record<string, string>, string?][] = [
			["npm, every flag", { force: true, allowDirty: true, verbose: true }, {}, `Would run "npm install --force".`],
			["yarn", { force: true }, { "yarn.lock": "" }, `Would run "yarn install".`],
			["several lockfiles", { force: true }, { "yarn.lock": "", "bun.lock": "" }],
			["--skip-install", { force: true, skipInstall: true }, {}]
		];
		for (const [name, flags, lockfiles, installLine] of previews) {
			it(`changes nothing in a dry run, naming the install only when --force changes it (${name})`, async () => {
				const original = project({}, lockfiles);
				plan();

				await updateWc({ ...flags, dryRun: true });

				expect(output.filter(line => line.startsWith("Would run"))).toEqual(installLine ? [installLine] : []);
				expect(log()).toContain("Dry run: no files were changed.");
				expect(read("package.json")).toBe(original);
				expect(execSync).not.toHaveBeenCalled();
				expect(spawnSync).not.toHaveBeenCalled();
				expect(process.exitCode).not.toBe(1);
			});
		}

		const hints: [string, Record<string, string>, string][] = [
			["npm", {}, `Run "npm install --force" to install them.`],
			["yarn", { "yarn.lock": "" }, `Run "yarn install" to install them.`],
			["pnpm", { "pnpm-lock.yaml": "" }, `Run "pnpm install --no-frozen-lockfile" to install them.`],
			["several lockfiles", { "yarn.lock": "", "bun.lock": "" },
				"Run your package manager's install command to update the lockfile. With npm, add --force."]
		];
		for (const [name, lockfiles, hint] of hints) {
			it(`only updates package.json with --force --skip-install, naming the install command (${name})`, async () => {
				project({}, lockfiles);
				plan();

				await updateWc({ force: true, skipInstall: true });

				expect(read("package.json")).toContain(`"${WC}": "~6.1.0"`);
				expect(output).toContain(`Updated 1 package(s) in package.json. ${hint}`);
				expect(execSync).not.toHaveBeenCalled();
			});
		}

		const blocked: [string, Partial<PackageUpdate>[], boolean][] = [
			["overridable", [{ overridable: true }], true],
			["not overridable", [{}], false],
			["partly overridable", [{ overridable: true }, { name: "igniteui-dockmanager" }], false]
		];
		for (const [name, conflicts, hinted] of blocked) {
			it(`blocks on conflicts, also with --force, suggesting --force only when it can override all of them (${name})`, async () => {
				const original = project();
				plan({ forced: overridden }, ...conflicts.map(entry => ({ ...conflict, ...entry })));

				await updateWc({ force: true });

				expect(log()).toContain(`Conflict in igniteui-grid-lite: ${conflict.conflict}`);
				expect(log()).toContain("Nothing was updated because of the conflicts above.");
				expect(log()).not.toContain("--force overrides");
				expect(output.includes(forceHint)).toBe(hinted);
				expect(read("package.json")).toBe(original);
				expect(execSync).not.toHaveBeenCalled();
				expect(process.exitCode).toBe(1);
			});
		}
	});

	describe("--verbose", () => {
		it("prints framework, package manager, install and rollback details, without environment or .npmrc values", async () => {
			const token = "npm_FAKE0TOKEN0123456789";
			const env = process.env;
			process.env = { ...env, NPM_TOKEN: token };
			project({ packageManager: "npm@10.9.0" },
				{ "package-lock.json": "{}", ".npmrc": `//registry.example.com/:_authToken=${token}\n` });
			const getPlan = plan();
			execSync.and.callFake(() => {
				fs.writeFileSync("npm-shrinkwrap.json", "created");
				throw new Error("Command failed: npm install");
			});

			try {
				await updateWc({ verbose: true });
			} finally {
				process.env = env;
			}

			expect(getPlan).toHaveBeenCalledOnceWith({ requests: [{ name: WC }], force: false, verbose: true });
			const details = [
				"Framework: webcomponents (from the project config)",
				"Package manager: npm (packageManager field set; lockfiles: package-lock.json)",
				"Backed up package.json, package-lock.json; installing with YARN_ENABLE_IMMUTABLE_INSTALLS=false.",
				"Restored package.json.",
				"Restored package-lock.json.",
				"Removed npm-shrinkwrap.json, created by the failed install."
			];
			for (const detail of details) {
				expect(Util.log).toHaveBeenCalledWith(detail, "gray");
			}
			expect(fs.existsSync("npm-shrinkwrap.json")).toBe(false);
			expect(log()).not.toContain(token);
			expect(log()).not.toContain("registry.example.com");
			expect(process.exitCode).toBe(1);
		});
	});

	describe("--migrate-only", () => {
		const migrate = (args: Flags = {}) => run({ packages: ["fixture-lib"], migrateOnly: true, from: "1.0.0", ...args });
		beforeEach(() => {
			project();
			[collection] = installFixture();
		});

		it("runs the required migrations in (from, to] by version after the checks, then lists the optional ones", async () => {
			await migrate();

			expect(spawnSync).toHaveBeenCalledOnceWith("git", ["status", "--porcelain", "--", "."], gitOptions());
			expect(checkDevKit).toHaveBeenCalledBefore(runMigrations);
			expect(runMigrations).toHaveBeenCalledOnceWith(collection, named("first", "second"), "npm");
			expect(output).toEqual([
				"Not a Git repository: review and revert the update's changes manually.",
				"Migrations of fixture-lib from 1.0.0 to 2.0.0:",
				"To run the optional migrations of fixture-lib, use:",
				"  ig update fixture-lib --name later --allow-dirty",
				"  ig update fixture-lib --name extra --allow-dirty",
				"Migrations completed. Review the changes, then run your build and tests."
			]);
			expect(process.exitCode).not.toBe(1);
		});

		it("runs the optional migrations chosen in the prompt, with the recommended ones preselected", async () => {
			(Util.canPrompt as jasmine.Spy).and.returnValue(true);
			const checkbox = spyOn(InquirerWrapper, "checkbox").and.resolveTo(["later"]);

			await migrate();

			expect(checkbox).toHaveBeenCalledOnceWith({
				message: "Select the optional migrations of fixture-lib to run",
				choices: [{ value: "later", name: "later", checked: false }, { value: "extra", name: "extra: Extra", checked: true }]
			});
			expect(runMigrations.calls.allArgs()).toEqual([[collection, named("first", "second"), "npm"], [collection, named("later"), "npm"]]);
			expect(checkDevKit).toHaveBeenCalledTimes(1);
		});

		it("bounds the range with --to, accepts short versions and rejects invalid ones, keeping them out of analytics", async () => {
			await migrate({ from: "1", to: "1.6" });
			await migrate({ from: "x" });
			await migrate({ to: "y" });

			expect(runMigrations).toHaveBeenCalledOnceWith(collection, named("first"), "npm");
			expect(output).toContain("Migrations of fixture-lib from 1.0.0 to 1.6.0:");
			expect(output).toContain(`"x" is not a valid version.`);
			expect(output).toContain(`"y" is not a valid version.`);
			expect(posted()).toEqual(["Unable to run the migrations.", "Unable to run the migrations."]);
			expect(process.exitCode).toBe(1);
		});

		it("asks for --to when the installed version can't be determined", async () => {
			installFixture(undefined, "fixture-lib", "next");

			await migrate();

			expect(runMigrations).not.toHaveBeenCalled();
			expect(output).toContain("Unable to determine the installed version of fixture-lib. Specify it with --to <version>.");
			expect(output).not.toContain("is not a valid version");
			expect(process.exitCode).toBe(1);
		});

		it("runs one migration with --name, whatever its version", async () => {
			await migrate({ from: undefined, name: "old" });
			await migrate({ from: undefined, name: "missing" });

			expect(runMigrations).toHaveBeenCalledOnceWith(collection, named("old"), "npm");
			expect(output).toContain(`fixture-lib has no migration named "missing".`);
			expect(posted()).toEqual(["Unable to run the migrations."]);

			runMigrations.and.resolveTo({ completed: [], failed: { migration: { name: "unversioned" }, error: "boom" }, notRun: [] });
			await migrate({ from: undefined, name: "old" });

			expect(output).toContain("unversioned: boom");
			expect(output.slice(-3)).toEqual([
				"A migration failed, and some of its changes may have been written.",
				"unversioned: boom",
				"Review all project changes before rerunning migrations (use git status and git diff when available)."
			]);
		});

		it("rejects an empty or blank --name before checking Git or updating anything", async () => {
			const getPlan = plan();
			for (const name of ["", "   "]) {
				await run({ packages: ["fixture-lib"], name });
			}

			expect(output).toEqual(["--name needs a migration name.", "--name needs a migration name."]);
			expect(spawnSync).not.toHaveBeenCalled();
			expect(execSync).not.toHaveBeenCalled();
			expect(getPlan).not.toHaveBeenCalled();
			expect(runMigrations).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);

			await run({ packages: ["fixture-lib"], name: ["old", "extra"] as unknown as string });
			expect(output).toContain(`fixture-lib has no migration named "old,extra".`);
		});

		it("lists the migrations with --dry-run, without checking git, loading DevKit or running them", async () => {
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
			expect(spawnSync).not.toHaveBeenCalled();
			expect(checkDevKit).not.toHaveBeenCalled();
			expect(runMigrations).not.toHaveBeenCalled();
		});

		it("stops before running anything when the DevKit preflight fails, showing its error locally, not in analytics", async () => {
			const error = `Cannot find module 'x'\nRequire stack:\n- ${path.join(tempDir, "node_modules/@angular-devkit/schematics/tools/index.js")}`;
			checkDevKit.and.rejectWith(new Error(error));

			await migrate();

			expect(posted()).toEqual(["Unable to load @angular-devkit/schematics to run the migrations."]);
			expect(Util.warn).toHaveBeenCalledWith(error, "red");
			expect(runMigrations).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("lists optional-only migrations without a terminal, even when DevKit is unavailable", async () => {
			checkDevKit.and.rejectWith(new Error("Running migrations requires @angular-devkit/schematics."));

			await migrate({ from: "1.6.0", to: "1.9.0" });

			expect(output.slice(-2)).toEqual(["To run the optional migrations of fixture-lib, use:", "  ig update fixture-lib --name later --allow-dirty"]);
			expect(checkDevKit).not.toHaveBeenCalled();
			expect(runMigrations).not.toHaveBeenCalled();
			expect(process.exitCode).not.toBe(1);
		});

		it("shows a reader error locally, not in analytics", async () => {
			fs.writeFileSync(collection, "{");

			await migrate();

			expect(posted()).toEqual(["Unable to run the migrations."]);
			expect(Util.warn).toHaveBeenCalledWith(`${collection} is not a valid migrations collection.`, "red");
			expect(process.exitCode).toBe(1);
		});

		it("stops on uncommitted changes in the project, and runs in a clean one", async () => {
			spawnSync.and.returnValue({ status: 0, stdout: " M src/app.ts\n" });

			await migrate();

			expect(output).toEqual(["Uncommitted changes. Commit or stash them first, or rerun with --allow-dirty."]);
			expect(runMigrations).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);

			spawnSync.and.returnValue({ status: 0, stdout: "" });
			output = [];
			await migrate();

			expect(output[0]).toBe("Migrations of fixture-lib from 1.0.0 to 2.0.0:");
			expect(runMigrations).toHaveBeenCalledTimes(1);
		});

		it("stops when Git can't check the project for uncommitted changes", async () => {
			spawnSync.and.returnValue(GIT_FAILURES[0][1]);

			await migrate();

			expect(output).toEqual(["Unable to check for uncommitted changes. Fix the problem, or rerun with --allow-dirty.", "spawnSync git ENOBUFS"]);
			expect(runMigrations).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("checks the request before running anything, keeping package names out of analytics", async () => {
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
			expect(posted()).not.toContain(jasmine.stringMatching(/-lib/));
			expect(runMigrations).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("rejects invalid package names, unsupported versions and duplicates before anything else, keeping them out of analytics", async () => {
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
			expect(posted()).toEqual(Array(cases.length + 1).fill("Invalid package arguments."));
			expect(spawnSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("accepts versions, ranges, tags and scoped names, warning that a version has no effect", async () => {
			for (const spec of ["2.0.0", "^2", "next"]) {
				await migrate({ packages: [`fixture-lib@${spec}`] });
			}
			await migrate({ packages: ["@scope/lib@~1.2"] });

			expect(output).toContain(`The version "^2" has no effect with --migrate-only.`);
			expect(runMigrations).toHaveBeenCalledTimes(3);
			expect(output).toContain("Package @scope/lib is not installed.");
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
				getConfig.and.returnValue({ project: { framework: "react" } });
				project({ dependencies });
				configure(configured);
				const [react, webcomponents] = installFixture(MAP);

				await migrate();

				expect(runMigrations).toHaveBeenCalledOnceWith(framework === "react" ? react : webcomponents, named("first", "second"), "npm");
			});
		}

		it("runs single-path migrations but not a map when the framework isn't identified, and finds no map entry for the framework", async () => {
			configure();
			project({ dependencies: { vue: "^3.0.0" } });
			installFixture(MAP);

			await migrate({ verbose: true });

			expect(log()).not.toContain("Framework: webcomponents");
			expect(output).toContain("Can't tell whether this is a React or Web Components project, and fixture-lib has migrations for each. " +
				`Set "project.framework" to "react" or "webcomponents" in ignite-ui-cli.json.`);
			expect(runMigrations).not.toHaveBeenCalled();

			installFixture();
			await migrate();

			expect(runMigrations).toHaveBeenCalledOnceWith(collection, named("first", "second"), "npm");

			configure("react");
			installFixture({ webcomponents: MAP.webcomponents });
			await migrate();

			expect(output).toContain("fixture-lib doesn't provide migrations for react.");
		});
	});

	describe("selected packages", () => {
		const FIXTURE: Partial<PackageUpdate> = {
			name: "fixture-lib", declared: "^1.0.0", installed: "1.0.0", baseline: "1.0.0", target: "2.0.0", newRange: "^2.0.0",
			manifest: { version: "2.0.0", "ig-update": { migrations: "./migrations/collection.json" } }
		};
		const update = (packages: string[], args: Flags = {}) => run({ packages, ...args });
		let original: string;

		beforeEach(() => {
			original = project({ dependencies: { [WC]: "~6.0.0", "fixture-lib": "^1.0.0" } });
			[collection] = installFixture();
		});

		it("updates the requested packages after the Git check, then runs the new migrations from the baseline to the installed version", async () => {
			const getPlan = plan(FIXTURE, {});
			execSync.and.callFake(() => expect(checkDevKit).toHaveBeenCalledTimes(1));

			await update(["fixture-lib", WC]);

			expect(spawnSync).toHaveBeenCalledOnceWith("git", ["status", "--porcelain", "--", "."], gitOptions());
			expect(getPlan).toHaveBeenCalledOnceWith({ requests: [{ name: "fixture-lib" }, { name: WC }], force: false, verbose: false });
			expect(read("package.json")).toContain(`"fixture-lib": "^2.0.0"`);
			expect(execSync).toHaveBeenCalledOnceWith("npm install", installOptions());
			expect(runMigrations).toHaveBeenCalledOnceWith(collection, named("first", "second"), "npm");
			expect(output).toEqual([
				"Not a Git repository: review and revert the update's changes manually.",
				"Update plan (Web Components, npm)",
				"  fixture-lib             1.0.0 -> 2.0.0  (^1.0.0 -> ^2.0.0)  migrations declared",
				"  igniteui-webcomponents  not installed -> 6.1.0  (~6.0.0 -> ~6.1.0)  no migrations declared",
				`Running "npm install".`,
				"Updated 2 package(s).",
				"Migrations of fixture-lib from 1.0.0 to 2.0.0:",
				"To run the optional migrations of fixture-lib, use:",
				"  ig update fixture-lib --name later --allow-dirty",
				"  ig update fixture-lib --name extra --allow-dirty",
				"Migrations completed. Review the changes, then run your build and tests."
			]);
			expect(process.exitCode).toBe(0);
		});

		it("loads no DevKit when no new version declares migrations for the framework", async () => {
			project({ dependencies: { [WC]: "~6.0.0", "fixture-lib": "^1.0.0", "igniteui-grid-lite": "~0.11.0" } });
			plan({}, { ...FIXTURE, manifest: { version: "2.0.0", "ig-update": { migrations: { react: "./react.json" } } } },
				{ name: "igniteui-grid-lite", declared: "~0.11.0", installed: "0.11.0", baseline: "0.11.0", target: "0.11.0", newRange: "0.11.0",
					manifest: { version: "0.11.0", "ig-update": { migrations: "./migrations.json" } } });

			await update(["fixture-lib", WC, "igniteui-grid-lite"]);

			expect(output).toContain("  fixture-lib             1.0.0 -> 2.0.0  (^1.0.0 -> ^2.0.0)  no migrations declared");
			expect(output).toContain("  igniteui-grid-lite      0.11.0 -> 0.11.0  (~0.11.0 -> 0.11.0)");
			expect(output).toContain("Updated 3 package(s). Next: run your build and tests.");
			expect(checkDevKit).not.toHaveBeenCalled();
			expect(runMigrations).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(0);
		});

		it("runs the migrations once per package, in request order, then those of the packages that joined", async () => {
			project({ dependencies: { "joined-lib": "^1.0.0", "fixture-lib": "^1.0.0", "other-lib": "^1.0.0" }, devDependencies: { "fixture-lib": "^1.0.0" } });
			const [other] = installFixture(undefined, "other-lib");
			const [joined] = installFixture(undefined, "joined-lib");
			const entry = (name: string, section: PackageUpdate["section"] = "dependencies") => ({ ...FIXTURE, name, section });
			plan(entry("joined-lib"), entry("fixture-lib"), entry("other-lib"), entry("fixture-lib", "devDependencies"));

			await update(["other-lib", "fixture-lib"]);

			expect(runMigrations.calls.allArgs().map(args => args[0])).toEqual([other, collection, joined]);
			expect(read("package.json")).not.toContain(`"^1.0.0"`);
		});

		it("changes nothing when the DevKit preflight fails", async () => {
			plan(FIXTURE);
			checkDevKit.and.rejectWith(new Error("Running migrations requires Node.js ^22.22.3 (running v20.0.0)."));

			await update(["fixture-lib"]);

			expect(output.slice(-2)).toEqual(["Nothing was updated: unable to load @angular-devkit/schematics to run the migrations.",
				"Running migrations requires Node.js ^22.22.3 (running v20.0.0)."]);
			expect(read("package.json")).toBe(original);
			expect(execSync).not.toHaveBeenCalled();
			expect(runMigrations).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("previews with --dry-run, without checking Git, loading DevKit, installing or running migrations", async () => {
			plan(FIXTURE);

			await update(["fixture-lib"], { dryRun: true });

			expect(output).toContain("  fixture-lib  1.0.0 -> 2.0.0  (^1.0.0 -> ^2.0.0)  migrations declared");
			expect(log()).toContain("Dry run: no files were changed.");
			expect(read("package.json")).toBe(original);
			expect(spawnSync).not.toHaveBeenCalled();
			expect(checkDevKit).not.toHaveBeenCalled();
			expect(execSync).not.toHaveBeenCalled();
			expect(runMigrations).not.toHaveBeenCalled();
		});

		it("only updates package.json with --skip-install, printing the install and migration commands", async () => {
			plan(FIXTURE, {});

			await update(["fixture-lib", WC], { skipInstall: true });

			expect(read("package.json")).toContain(`"fixture-lib": "^2.0.0"`);
			expect(output.slice(-3)).toEqual([
				`Updated 2 package(s) in package.json. Run "npm install" to install them.`,
				"Then run their migrations:",
				"  ig update fixture-lib --migrate-only --from 1.0.0 --to 2.0.0 --allow-dirty"
			]);
			expect(spawnSync).toHaveBeenCalledTimes(1);
			expect(checkDevKit).not.toHaveBeenCalled();
			expect(execSync).not.toHaveBeenCalled();
			expect(runMigrations).not.toHaveBeenCalled();
		});

		it("restores package.json and runs no migrations when the install fails", async () => {
			plan(FIXTURE);
			execSync.and.throwError("Command failed: npm install");

			await update(["fixture-lib"]);

			expect(read("package.json")).toBe(original);
			expect(log()).toContain(`"npm install" failed. Restored package.json; node_modules may be partially updated, run "npm install"`);
			expect(log()).not.toContain("Migrations of");
			expect(runMigrations).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("stops at a failed migration, keeping the new versions, with the commands to run the rest", async () => {
			project({ dependencies: { "fixture-lib": "^1.0.0", "other-lib": "^1.0.0" } });
			installFixture(undefined, "other-lib");
			plan(FIXTURE, { ...FIXTURE, name: "other-lib" });
			runMigrations.and.resolveTo({
				completed: [{ name: "first" }], failed: { migration: { name: "second", version: "2.0.0" }, error: "boom" }, notRun: [{ name: "third" }]
			});

			await update(["fixture-lib", "other-lib"]);

			expect(runMigrations).toHaveBeenCalledTimes(1);
			expect(posted()).toEqual(["A migration failed, and some of its changes may have been written."]);
			expect(output.slice(-7)).toEqual([
				"Migrations of fixture-lib from 1.0.0 to 2.0.0:",
				"A migration failed, and some of its changes may have been written.",
				"second (2.0.0): boom",
				"Not run: third. Run it with: ig update fixture-lib --name third --allow-dirty",
				"Review all project changes before rerunning migrations (use git status and git diff when available).",
				"The new versions remain installed. To run the remaining migrations, use:",
				"  ig update other-lib --migrate-only --from 1.0.0 --allow-dirty"
			]);
			expect(read("package.json")).toContain(`"other-lib": "^2.0.0"`);
			expect(process.exitCode).toBe(1);
		});

		it("stops when the migrations of an installed package can't be read, with the command to run them later", async () => {
			fs.writeFileSync(collection, "{");
			plan(FIXTURE);

			await update(["fixture-lib"]);

			expect(output.slice(-4)).toEqual([
				"Unable to read the migrations of an updated package.",
				`${collection} is not a valid migrations collection.`,
				"The new versions remain installed. To run the remaining migrations, use:",
				"  ig update fixture-lib --migrate-only --from 1.0.0 --allow-dirty"
			]);
			expect(posted()).toEqual(["Unable to read the migrations of an updated package."]);
			expect(runMigrations).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("reports malformed ig-update metadata as invalid after the install, not as missing", async () => {
			const igUpdate = { migrations: ["./migrations/collection.json"] };
			fs.writeFileSync("node_modules/fixture-lib/package.json", JSON.stringify({ name: "fixture-lib", version: "2.0.0", "ig-update": igUpdate }));
			plan({ ...FIXTURE, manifest: { version: "2.0.0", "ig-update": igUpdate as PackageManifest["ig-update"] } });

			await update(["fixture-lib"]);

			expect(output).toContain("  fixture-lib  1.0.0 -> 2.0.0  (^1.0.0 -> ^2.0.0)  migrations declared");
			expect(checkDevKit).toHaveBeenCalled();
			expect(output.slice(-4)).toEqual([
				"Unable to read the migrations of an updated package.",
				`fixture-lib has an invalid "ig-update" field: "migrations" must be a path, or an object that maps framework ids to paths.`,
				"The new versions remain installed. To run the remaining migrations, use:",
				"  ig update fixture-lib --migrate-only --from 1.0.0 --allow-dirty"
			]);
			expect(process.exitCode).toBe(1);
		});

		it("lists the migrations to run when DevKit can't be loaded after the install", async () => {
			project({ dependencies: { "fixture-lib": "^1.0.0", "other-lib": "^1.0.0" } });
			installFixture(undefined, "other-lib");
			const error = "Cannot find module '@angular-devkit/schematics/package.json'";
			let loads = 0;
			checkDevKit.and.callFake(async () => {
				if (loads++) {
					throw new Error(error);
				}
			});
			plan(FIXTURE, { ...FIXTURE, name: "other-lib" });

			await update(["fixture-lib", "other-lib"]);

			expect(output.slice(-5)).toEqual([
				"Unable to load @angular-devkit/schematics to run the migrations.",
				error,
				"The new versions remain installed. To run the remaining migrations, use:",
				"  ig update fixture-lib --migrate-only --from 1.0.0 --allow-dirty",
				"  ig update other-lib --migrate-only --from 1.0.0 --allow-dirty"
			]);
			expect(posted()).toEqual(["Unable to load @angular-devkit/schematics to run the migrations."]);
			expect(runMigrations).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("checks DevKit once before changing anything and once after the install, however many migrations run", async () => {
			project({ dependencies: { "fixture-lib": "^1.0.0", "other-lib": "^1.0.0" } });
			installFixture(undefined, "other-lib");
			plan(FIXTURE, { ...FIXTURE, name: "other-lib" });
			(Util.canPrompt as jasmine.Spy).and.returnValue(true);
			spyOn(InquirerWrapper, "checkbox").and.resolveTo(["extra"]);
			execSync.and.callFake(() => expect(checkDevKit).toHaveBeenCalledTimes(1));

			await update(["fixture-lib", "other-lib"]);

			expect(runMigrations).toHaveBeenCalledTimes(4);
			expect(checkDevKit).toHaveBeenCalledTimes(2);
			expect(process.exitCode).toBe(0);
		});

		it("stops when the optional-migrations prompt is cancelled, with the commands for the rest", async () => {
			project({ dependencies: { "fixture-lib": "^1.0.0", "other-lib": "^1.0.0" } });
			installFixture(undefined, "other-lib");
			plan(FIXTURE, { ...FIXTURE, name: "other-lib" });
			(Util.canPrompt as jasmine.Spy).and.returnValue(true);
			spyOn(InquirerWrapper, "checkbox").and.rejectWith(Object.assign(new Error("User force closed the prompt with SIGINT"), { name: "ExitPromptError" }));

			await update(["fixture-lib", "other-lib"]);

			expect(runMigrations).toHaveBeenCalledOnceWith(collection, named("first", "second"), "npm");
			expect(output.slice(-6)).toEqual([
				"Cancelled: no optional migrations were run.",
				"To run the optional migrations of fixture-lib, use:",
				"  ig update fixture-lib --name later --allow-dirty",
				"  ig update fixture-lib --name extra --allow-dirty",
				"The new versions remain installed. To run the remaining migrations, use:",
				"  ig update other-lib --migrate-only --from 1.0.0 --allow-dirty"
			]);
			expect(posted()).toEqual(["Cancelled: no optional migrations were run."]);
			expect(process.exitCode).toBe(1);
		});

		it("keeps package names out of analytics when package.json can't be updated as planned", async () => {
			project({ dependencies: { [WC]: "~6.0.0", "fixture-lib": "^1.5.0" } });
			plan(FIXTURE);

			await update(["fixture-lib"]);

			expect(output.slice(-2)).toEqual(["Nothing was updated: unable to update package.json.",
				"package.json changed after the update plan was made (dependencies.fixture-lib). Run the update again."]);
			expect(posted()).toEqual(["Nothing was updated: unable to update package.json."]);
			expect(execSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("runs the migrations up to the installed version when it differs from the plan", async () => {
			installFixture(undefined, "fixture-lib", "1.8.0");
			plan({ ...FIXTURE, target: "1.6.0", newRange: "^1.6.0" });

			await update(["fixture-lib"]);

			expect(output).toContain("Installed fixture-lib 1.8.0 instead of the planned 1.6.0.");
			expect(output).toContain("Migrations of fixture-lib from 1.0.0 to 1.8.0:");
			expect(runMigrations).toHaveBeenCalledOnceWith(collection, named("first"), "npm");
			expect(output).toContain("  ig update fixture-lib --name later --allow-dirty");
		});

		it("stops on uncommitted changes before planning, also with --force, unless --allow-dirty", async () => {
			const getPlan = plan(FIXTURE);
			spawnSync.and.returnValue({ status: 0, stdout: " M src/app.ts\n" });

			await update(["fixture-lib"], { force: true });

			expect(output).toEqual(["Uncommitted changes. Commit or stash them first, or rerun with --allow-dirty."]);
			expect(getPlan).not.toHaveBeenCalled();
			expect(read("package.json")).toBe(original);
			expect(process.exitCode).toBe(1);

			await update(["fixture-lib"], { allowDirty: true });

			expect(output).toContain("Uncommitted changes: the update's changes will be mixed with them.");
			expect(runMigrations).toHaveBeenCalledTimes(1);
			expect(process.exitCode).toBe(0);
		});

		for (const [failure, result] of GIT_FAILURES) {
			it(`stops when Git can't check for uncommitted changes because of ${failure}, keeping the details out of analytics, unless --allow-dirty`, async () => {
				const getPlan = plan(FIXTURE);
				spawnSync.and.returnValue(result);

				await update(["fixture-lib"]);

				expect(output[0]).toBe("Unable to check for uncommitted changes. Fix the problem, or rerun with --allow-dirty.");
				expect(posted()).toEqual(["Unable to check for uncommitted changes. Fix the problem, or rerun with --allow-dirty."]);
				expect(getPlan).not.toHaveBeenCalled();
				expect(read("package.json")).toBe(original);
				expect(process.exitCode).toBe(1);

				output = [];
				await update(["fixture-lib"], { allowDirty: true });

				expect(output[0]).toBe("Unable to check for uncommitted changes: the update's changes may be mixed with existing ones.");
				expect(runMigrations).toHaveBeenCalledTimes(1);
				expect(process.exitCode).toBe(0);
			});
		}

		it("warns and continues outside a Git repository and without Git", async () => {
			plan(FIXTURE);
			for (const result of [
				{ status: 128, stdout: "", stderr: NOT_A_REPOSITORY },
				{ status: 128, stdout: "", stderr: "fatal: Not a git repository (or any of the parent directories): .git\n" },
				{ status: null, error: Object.assign(new Error("spawnSync git ENOENT"), { code: "ENOENT" }) }
			]) {
				spawnSync.and.returnValue(result);
				project({ dependencies: { [WC]: "~6.0.0", "fixture-lib": "^1.0.0" } });
				output = [];
				await update(["fixture-lib"]);

				expect(output[0]).withContext(JSON.stringify(result)).toBe("Not a Git repository: review and revert the update's changes manually.");
			}
			expect(runMigrations).toHaveBeenCalledTimes(3);
			expect(process.exitCode).toBe(0);
		});

		it("fails without changes when a requested package can't be updated, keeping its spec out of analytics, and only warns about one that joined", async () => {
			const reason = `unsupported spec "git+https://token@github.com/acme/lib.git" (only exact, ^, ~ and x-range versions are supported)`;
			const getPlan = plan({ ...FIXTURE, skipped: reason, target: undefined, newRange: undefined }, {});

			await update(["fixture-lib@^9", WC]);

			expect(output).toContain(`Unable to update fixture-lib: ${reason}.`);
			expect(posted()).toEqual(["Nothing was updated: a package in the update can't be updated."]);
			expect(getPlan).toHaveBeenCalledWith({ requests: [{ name: "fixture-lib", spec: "^9" }, { name: WC }], force: false, verbose: false });
			expect(read("package.json")).toBe(original);
			expect(execSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);

			await update([WC]);

			expect(output).toContain(`Skipped fixture-lib: ${reason}`);
			expect(read("package.json")).toContain(`"${WC}": "~6.1.0"`);
			expect(process.exitCode).toBe(0);
		});

		it("refuses to update a package installed below its declared range, without querying the registry, installing or migrating", async () => {
			original = project({ dependencies: { "fixture-lib": "^2.0.0" } });
			installFixture(undefined, "fixture-lib", "1.0.0");
			const registry = spyOn(child_process, "spawnSync");

			await update(["fixture-lib"]);

			expect(output).toContain(`Unable to update fixture-lib: installed 1.0.0 is outside the declared range "^2.0.0"; ` +
				"update package.json or reinstall before updating.");
			expect(posted()).toEqual(["Nothing was updated: a package in the update can't be updated."]);
			expect(registry).not.toHaveBeenCalled();
			expect(read("package.json")).toBe(original);
			expect(execSync).not.toHaveBeenCalled();
			expect(checkDevKit).not.toHaveBeenCalled();
			expect(runMigrations).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("keeps registry errors, which can name private packages and registries, out of analytics", async () => {
			const error = "Unable to get @acme/secret from the registry: 404 Not Found - GET https://npm.acme.internal/@acme%2fsecret";
			spyOn(versionUpdate, "getUpdatePlan").and.throwError(error);

			await update(["fixture-lib"]);

			expect(output.slice(-2)).toEqual(["Nothing was updated: unable to plan the update.", error]);
			expect(posted()).toEqual(["Nothing was updated: unable to plan the update."]);
			expect(read("package.json")).toBe(original);
			expect(process.exitCode).toBe(1);
		});

		it("names what holds a package back with the command to update them together, and newer versions outside the request", async () => {
			project({ dependencies: { [WC]: "~6.0.0", "fixture-lib": "^1.0.0", "example-theme": "^1.0.0" } });
			plan(
				{ ...FIXTURE, target: "1.5.0", newRange: "^1.5.0", newest: "2.0.0", nextMajor: "3.0.0", heldBackBy: [
					{ name: "example-pin", reason: "^1.0.0 (required by example-pin@1.0.0)" },
					{ name: "example-theme", reason: `2.0.0 requires example-theme@^2.0.0, outside "^1"` },
					{ name: "example-pin", reason: "1.x (required by example-pin@1.0.0)" }
				] },
				{ name: "example-theme", declared: "^1.0.0", baseline: "1.0.0", target: "1.0.0", newRange: undefined },
				{ forced: "~6.0.0 (required by igniteui-react@19.9.0)" }
			);

			await update(["fixture-lib@^1", "example-theme@^1", WC], { dryRun: true, force: true });

			expect(output).toContain("Held back: fixture-lib 1.5.0 (2.0.0 available): ^1.0.0 (required by example-pin@1.0.0); " +
				`2.0.0 requires example-theme@^2.0.0, outside "^1"; 1.x (required by example-pin@1.0.0)`);
			expect(output).toContain(`  To update them together, run: ig update "fixture-lib@^1" example-pin`);
			expect(output).toContain("Newer version outside the requested range (not applied): fixture-lib 3.0.0");
			expect(output).toContain("--force overrides the version requirements of 1 package(s); " +
				"the updated packages may not work together. Run your build and tests.");
		});

		it("runs single-path migrations but skips a map when the framework isn't identified, still updating every package", async () => {
			configure();
			const packages = { dependencies: { "fixture-lib": "^1.0.0", "map-lib": "^1.0.0" } };
			project(packages);
			const [, webcomponents] = installFixture(MAP, "map-lib");
			plan(FIXTURE, { ...FIXTURE, name: "map-lib", manifest: { version: "2.0.0", "ig-update": { migrations: MAP } } });

			await update(["fixture-lib", "map-lib"]);

			expect(output).toContain("    Skipped map-lib migrations: can't tell whether this is a React or Web Components project. " +
				`Set "project.framework" in ignite-ui-cli.json, then run ig update map-lib --migrate-only --from 1.0.0 --allow-dirty`);
			expect(read("package.json")).toContain(`"map-lib": "^2.0.0"`);
			expect(runMigrations).toHaveBeenCalledOnceWith(collection, named("first", "second"), "npm");
			expect(process.exitCode).toBe(0);

			configure("webcomponents");
			project(packages);
			runMigrations.calls.reset();
			await update(["fixture-lib", "map-lib"]);

			expect(runMigrations.calls.allArgs().map(args => args[0])).toEqual([collection, webcomponents]);
		});

		const detected: [string, Record<string, string>, string][] = [
			["react, also with Web Components packages", { react: "^19.0.0", lit: "^3.0.0" }, "react"],
			["lit", { lit: "^3.0.0" }, "webcomponents"]
		];
		for (const [signal, dependencies, framework] of detected) {
			it(`runs the ${framework} migrations of a map, detected from package.json by ${signal}`, async () => {
				configure();
				project({ dependencies: { "map-lib": "^1.0.0", ...dependencies } });
				const [react, webcomponents] = installFixture(MAP, "map-lib");
				plan({ ...FIXTURE, name: "map-lib", manifest: { version: "2.0.0", "ig-update": { migrations: MAP } } });

				await update(["map-lib"]);

				expect(runMigrations).toHaveBeenCalledOnceWith(framework === "react" ? react : webcomponents, named("first", "second"), "npm");
			});
		}
	});

	describe("angular", () => {
		const ngBin = () => path.join(tempDir, "node_modules", "@angular", "cli", "bin", "ng.js");

		function installAngularCli(bin = "bin/ng.js", nodeModules = path.join(tempDir, "node_modules")) {
			const file = path.join(nodeModules, "@angular/cli", bin);
			fs.mkdirSync(path.dirname(file), { recursive: true });
			fs.writeFileSync(file, "");
			return file;
		}

		function angularProject(withCli = true, pkgJson: object = { dependencies: { "igniteui-angular": "~21.0.0" } }) {
			fs.writeFileSync("package.json", JSON.stringify(pkgJson));
			if (withCli) {
				installAngularCli();
			}
		}

		const hint = (igniteUI: string) => "If ng update reported incompatible peer dependencies, " +
			`update Angular and Ignite UI together: ng update @angular/core @angular/cli ${igniteUI}`;
		const forcedWarning = (igniteUI: string) => "--force let ng update continue despite incompatible peer dependencies; " +
			"any it found are listed above. If it updated anything, Angular packages may now be on incompatible versions, " +
			"for example @angular/core on a newer major than @angular/cli. Run your build and tests. If the build fails, " +
			"update Angular and Ignite UI together (in a git repository, commit the changes first or add --allow-dirty): " +
			`ng update @angular/core @angular/cli ${igniteUI}`;

		const updateAngular = (args: Flags = {}) => run({ packages: ["igniteui-angular"], ...args });

		beforeEach(() => {
			configure("angular");
			spawnSync.and.returnValue({ status: 0 });
		});

		it("previews, then runs, the project's ng update for the package and the ones with ig migrations, with inherited stdio and no shell", async () => {
			angularProject(true, {
				dependencies: { "igniteui-angular": "~21.0.0" },
				devDependencies: { "@igniteui/angular-schematics": "~15.0.0", "igniteui-cli": "~15.0.0" }
			});
			const getPlan = plan();

			await updateAngular({ dryRun: true });

			expect(log()).toContain(`Would run "ng update igniteui-angular igniteui-cli @igniteui/angular-schematics" with the project's Angular CLI.`);
			expect(log()).toContain("including new majors, applies their migrations and installs dependencies. In a git repository, it stops if the project has uncommitted changes.");
			expect(log()).toContain("Dry run: no files were changed.");
			expect(spawnSync).not.toHaveBeenCalled();

			await updateAngular();

			expect(log()).toContain(`Running "ng update igniteui-angular igniteui-cli @igniteui/angular-schematics" with the project's Angular CLI.`);
			expect(spawnSync).toHaveBeenCalledOnceWith("node",
				[ngBin(), "update", "igniteui-angular", "igniteui-cli", "@igniteui/angular-schematics"], { stdio: "inherit" });
			expect(getPlan).not.toHaveBeenCalled();
			expect(execSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(0);
		});

		it("updates the licensed package from devDependencies, detected without a project config, and names it in the failure hint and forced warning", async () => {
			configure();
			spawnSync.and.returnValue({ status: 1 });
			angularProject(true, { dependencies: { "@angular/core": "^21.0.0" }, devDependencies: { "@infragistics/igniteui-angular": "~21.0.0" } });

			await run({ packages: ["@infragistics/igniteui-angular"] });

			expect(spawnSync).toHaveBeenCalledOnceWith("node", [ngBin(), "update", "@infragistics/igniteui-angular"], { stdio: "inherit" });
			expect(output).toContain(hint("@infragistics/igniteui-angular"));

			spawnSync.and.returnValue({ status: 0 });
			await run({ packages: ["@infragistics/igniteui-angular"], force: true, allowDirty: true, verbose: true });

			expect(output).toContain(forcedWarning("@infragistics/igniteui-angular"));
			expect(process.exitCode).toBe(0);
		});

		it("runs ng update for an Angular project without a local framework, whatever the global config says", async () => {
			configure();
			getConfig.and.returnValue({ project: { framework: "react" } });
			angularProject(true, { dependencies: { "@angular/core": "^21.0.0", "igniteui-angular": "~21.0.0" } });
			const getPlan = plan();

			await updateAngular();

			expect(spawnSync).toHaveBeenCalledOnceWith("node", [ngBin(), "update", "igniteui-angular"], { stdio: "inherit" });
			expect(getPlan).not.toHaveBeenCalled();
			expect(execSync).not.toHaveBeenCalled();
			expect(log()).not.toContain("Update plan");
			expect(process.exitCode).toBe(0);
		});

		it("runs the extensionless bin/ng of Angular CLI 12", async () => {
			angularProject(false, { dependencies: { "igniteui-angular": "~12.0.0" } });
			const bin = installAngularCli("bin/ng");

			await run();

			expect(spawnSync).toHaveBeenCalledOnceWith("node", [bin, "update"], { stdio: "inherit" });
		});

		it("runs an Angular CLI hoisted to a parent node_modules", async () => {
			fs.mkdirSync("app");
			process.chdir("app");
			configure("angular");
			angularProject();

			await run();

			expect(spawnSync).toHaveBeenCalledOnceWith("node", [ngBin(), "update"], { stdio: "inherit" });
		});

		it("doesn't fall back to an Angular CLI outside the project, such as one on NODE_PATH", async () => {
			const env = process.env;
			const globalModules = path.join(tempDir, "global");
			process.env = { ...env, NODE_PATH: globalModules };
			installAngularCli("bin/ng.js", globalModules);
			(Module as any)._initPaths();
			angularProject(false);

			try {
				await run();
			} finally {
				process.env = env;
				(Module as any)._initPaths();
			}

			expect(log()).toContain("Angular CLI (@angular/cli) not found in this project.");
			expect(spawnSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("previews without an installed Angular CLI, noting that --skip-install doesn't apply", async () => {
			angularProject(false);

			await run({ dryRun: true, skipInstall: true });

			expect(log()).toContain("--skip-install is not supported for Angular projects");
			expect(log()).toContain(`Would run "ng update" with the project's Angular CLI. It lists the available updates without changing anything.`);
			expect(spawnSync).not.toHaveBeenCalled();
			expect(process.exitCode).not.toBe(1);
		});

		it("rejects --skip-install without running anything, also with the other flags", async () => {
			angularProject();

			await updateAngular({ skipInstall: true, force: true, allowDirty: true });

			expect(output).toEqual(["--skip-install is not supported for Angular projects: ng update always installs dependencies."]);
			expect(spawnSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("asks to install dependencies when the project has no Angular CLI", async () => {
			angularProject(false);

			await run();

			expect(output).toEqual(["Angular CLI (@angular/cli) not found in this project. " +
				"Install dependencies first (for example, npm install) and rerun ig update."]);
			expect(spawnSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});

		it("lists updates with a bare ng update without packages, forwarding the flags", async () => {
			const listing = (args: string) => `"ng update${args}" with the project's Angular CLI. It lists the available updates without changing anything.`;
			angularProject(true, { dependencies: { "igniteui-angular": "~21.0.0" }, devDependencies: { "igniteui-cli": "~15.0.0" } });
			spawnSync.and.returnValue({ status: 2 });

			await run({ dryRun: true, force: true, allowDirty: true });
			await run({ force: true });

			expect(output).toEqual([`Would run ${listing(" --force --allow-dirty")}`, "Dry run: no files were changed.", `Running ${listing(" --force")}`]);
			expect(spawnSync).toHaveBeenCalledOnceWith("node", [ngBin(), "update", "--force"], { stdio: "inherit" });
			expect(process.exitCode).toBe(2);
		});

		it("fails without a package.json", async () => {
			await run();

			expect(log()).toContain("No valid package.json found");
			expect(process.exitCode).toBe(1);
		});

		it("forwards --force, --allow-dirty and --verbose to ng update in that order, previewing the same command and what the flags change", async () => {
			angularProject(true, { dependencies: { "igniteui-angular": "~21.0.0" }, devDependencies: { "igniteui-cli": "~15.0.0" } });
			const getPlan = plan();
			const flags = { verbose: true, allowDirty: true, force: true };

			await updateAngular({ dryRun: true, force: true });

			expect(log()).toContain("and installs dependencies. ng update doesn't stop on incompatible peer dependencies, " +
				"so Angular packages can end up on incompatible versions. In a git repository, it stops if the project has uncommitted changes.");

			output = [];
			await updateAngular({ ...flags, dryRun: true });

			expect(log()).toContain(`Would run "ng update igniteui-angular igniteui-cli --force --allow-dirty --verbose" with the project's Angular CLI.`);
			expect(log()).toContain("It runs even with uncommitted changes.");
			expect(log()).not.toContain("it stops if the project has uncommitted changes");
			expect(spawnSync).not.toHaveBeenCalled();

			await updateAngular(flags);

			expect(spawnSync).toHaveBeenCalledOnceWith("node",
				[ngBin(), "update", "igniteui-angular", "igniteui-cli", "--force", "--allow-dirty", "--verbose"], { stdio: "inherit" });
			expect(getPlan).not.toHaveBeenCalled();
			expect(execSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(0);
		});

		it("prints the Angular CLI it runs with --verbose, and still previews without one", async () => {
			angularProject(false);

			await updateAngular({ dryRun: true, verbose: true });

			expect(log()).toContain(`Would run "ng update igniteui-angular --verbose"`);
			expect(log()).not.toContain("Angular CLI:");
			expect(process.exitCode).not.toBe(1);

			installAngularCli();
			await updateAngular({ verbose: true });

			expect(Util.log).toHaveBeenCalledWith("Framework: angular (from the project config)", "gray");
			expect(Util.log).toHaveBeenCalledWith(`Angular CLI: ${ngBin()}`, "gray");
			expect(spawnSync).toHaveBeenCalledOnceWith("node", [ngBin(), "update", "igniteui-angular", "--verbose"], { stdio: "inherit" });
		});

		const results: [string, Flags, object, number, string[]][] = [
			["success", {}, { status: 0 }, 0, []],
			["failure", {}, { status: 2 }, 2, [hint("igniteui-angular")]],
			["termination by a signal", {}, { status: null, signal: "SIGTERM" }, 1, [hint("igniteui-angular")]],
			["spawn error", {}, { status: null, error: new Error("spawnSync node ENOENT") }, 1, ["Unable to run the Angular CLI: spawnSync node ENOENT"]],
			["success with --force", { force: true }, { status: 0 }, 0, [forcedWarning("igniteui-angular")]],
			["failure with --force", { force: true }, { status: 2 }, 2, [hint("igniteui-angular")]]
		];
		for (const [name, flags, result, exitCode, messages] of results) {
			it(`passes the ng update exit code through (${name})`, async () => {
				angularProject();
				spawnSync.and.returnValue(result);

				await updateAngular(flags);

				expect(process.exitCode).toBe(exitCode);
				expect(output.slice(1)).toEqual(messages);
			});
		}

		it("forwards the given packages and migration options, adding the companions only to Ignite UI updates", async () => {
			angularProject(true, { dependencies: { "igniteui-angular": "~21.0.0", "@angular/core": "~21.0.0" }, devDependencies: { "igniteui-cli": "~15.0.0" } });
			const calls: [Flags, string[]][] = [
				[{ packages: ["igniteui-angular@22", "@angular/core"] }, ["igniteui-angular@22", "@angular/core", "igniteui-cli"]],
				[{ packages: ["@angular/core"] }, ["@angular/core"]],
				[{ packages: ["igniteui-angular"], migrateOnly: true, from: "20.0.0", to: "21.0.0" },
					["igniteui-angular", "--migrate-only", "--from", "20.0.0", "--to", "21.0.0"]],
				[{ packages: ["igniteui-angular"], name: "migration-01" }, ["igniteui-angular", "--migrate-only", "--name", "migration-01"]]
			];
			for (const [args, ngArgs] of calls) {
				spawnSync.calls.reset();
				await run(args);
				expect(spawnSync).withContext(JSON.stringify(args)).toHaveBeenCalledOnceWith("node", [ngBin(), "update", ...ngArgs], { stdio: "inherit" });
			}
		});

		it("previews requested versions and migrate-only, and gives the Ignite UI hint only for Ignite UI updates", async () => {
			angularProject(true, { dependencies: { "igniteui-angular": "~21.0.0", "@angular/core": "~21.0.0" } });

			await run({ packages: ["igniteui-angular@22"], dryRun: true });
			await run({ packages: ["igniteui-angular"], migrateOnly: true, from: "20.0.0", dryRun: true });

			expect(log()).toContain("It updates these packages to the requested versions, applies their migrations and installs dependencies.");
			expect(log()).toContain(`Would run "ng update igniteui-angular --migrate-only --from 20.0.0" with the project's Angular CLI. ` +
				"It runs the package's migrations without changing versions.");

			spawnSync.and.returnValue({ status: 1 });
			await run({ packages: ["@angular/core"] });

			expect(log()).not.toContain("If ng update reported incompatible peer dependencies");
			expect(process.exitCode).toBe(1);
		});
	});
});
