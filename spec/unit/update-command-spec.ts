import { App, GoogleAnalytics, PackageUpdate, ProjectConfig, Util } from "@igniteui/cli-core";
import * as fs from "fs";
import * as Module from "module";
import * as os from "os";
import * as path from "path";
import * as versionUpdate from "../../packages/core/update/version-update";
import { default as updateCmd } from "../../packages/cli/lib/commands/update";

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
	}

	function plan(...entries: Partial<PackageUpdate>[]) {
		return spyOn(versionUpdate, "getUpdatePlan").and.returnValue((entries.length ? entries : [{}]).map(entry => ({
			name: WC, section: "dependencies", declared: "~6.0.0", baseline: "6.0.0",
			target: "6.1.0", newRange: "~6.1.0", manifest: { version: "6.1.0" }, ...entry
		}) as PackageUpdate));
	}

	const run = (args: { dryRun?: boolean, skipInstall?: boolean } = {}) => updateCmd.update({ _: [], $0: "ig", ...args });
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
		spyOn(Util, "execSync");
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
			project({ workspaces: ["packages/*"] });
			const original = read("package.json");
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
			expect(Util.execSync).not.toHaveBeenCalled();
		});

		it("reports a project without Ignite UI packages", async () => {
			project();
			spyOn(versionUpdate, "getUpdatePlan").and.returnValue([]);

			await run();

			expect(log()).toContain("No Ignite UI packages found in package.json.");
			expect(Util.execSync).not.toHaveBeenCalled();
			expect(process.exitCode).not.toBe(1);
		});

		it("doesn't install when package.json can't be updated as planned", async () => {
			project({ dependencies: { [WC]: "~5.0.0" } });
			const original = read("package.json");
			plan();

			await run();

			expect(log()).toContain("package.json changed after the update plan was made");
			expect(read("package.json")).toBe(original);
			expect(Util.execSync).not.toHaveBeenCalled();
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
			project({}, { "yarn.lock": "", "bun.lock": "" });
			const original = read("package.json");
			plan();

			await run({ dryRun: true });

			expect(log()).toContain("Lockfiles of several package managers found (yarn, bun)");
			expect(log()).toContain("Dry run: no files were changed.");
			expect(read("package.json")).toBe(original);
			expect(process.exitCode).not.toBe(1);
		});

		it("changes nothing when up to date", async () => {
			project();
			const original = read("package.json");
			plan({ baseline: "6.1.0", target: "6.1.0", newRange: undefined });

			await run();

			expect(log()).toContain("Already up to date.");
			expect(read("package.json")).toBe(original);
			expect(Util.execSync).not.toHaveBeenCalled();
		});

		it("blocks the update on conflicts", async () => {
			project();
			const original = read("package.json");
			plan({}, { name: "igniteui-grid-lite", conflict: "no version in \"^0.11.0\" satisfies ~0.12.0", newRange: undefined });

			await run();

			expect(log()).toContain("Conflict in igniteui-grid-lite: no version in \"^0.11.0\" satisfies ~0.12.0");
			expect(read("package.json")).toBe(original);
			expect(Util.execSync).not.toHaveBeenCalled();
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
			it(`runs "${installCommand}" with visible output after updating package.json (${source})`, async () => {
				project(packageManager ? { packageManager } : {}, lockfiles);
				plan();
				let installedFrom: string;
				(Util.execSync as jasmine.Spy).and.callFake(() => { installedFrom = read("package.json"); });

				await run();

				expect(Util.execSync).toHaveBeenCalledOnceWith(installCommand, installOptions());
				expect(installedFrom).toContain(`"${WC}": "~6.1.0"`);
				expect(log()).toContain("Updated 1 package(s). Next: run your build and tests.");
				expect(process.exitCode).not.toBe(1);
			});
		}

		it("keeps the exit code non-zero while installing, so an interrupted install can't report success", async () => {
			project();
			plan();
			let exitCodeDuringInstall: typeof process.exitCode;
			(Util.execSync as jasmine.Spy).and.callFake(() => { exitCodeDuringInstall = process.exitCode; });

			await run();

			expect(exitCodeDuringInstall).toBe(1);
			expect(process.exitCode).toBe(0);
		});

		it("lets Yarn Berry update the lockfile in CI without changing the environment of ig itself", async () => {
			const immutableInstalls = process.env.YARN_ENABLE_IMMUTABLE_INSTALLS;
			project({ packageManager: "yarn@4.9.1" }, { "yarn.lock": "" });
			plan();

			await run();

			expect((Util.execSync as jasmine.Spy).calls.mostRecent().args[1].env.YARN_ENABLE_IMMUTABLE_INSTALLS).toBe("false");
			expect(process.env.YARN_ENABLE_IMMUTABLE_INSTALLS).toBe(immutableInstalls);
		});

		it("only updates package.json with --skip-install", async () => {
			project({}, { "yarn.lock": "" });
			plan();

			await run({ skipInstall: true });

			expect(read("package.json")).toContain(`"${WC}": "~6.1.0"`);
			expect(Util.execSync).not.toHaveBeenCalled();
			expect(log()).toContain(`Run "yarn install" to install them.`);
		});

		it("refuses to guess between several lockfiles, but updates package.json with --skip-install", async () => {
			project({}, { "yarn.lock": "", "package-lock.json": "{}" });
			const original = read("package.json");
			plan();

			await run();

			expect(log()).toContain("Lockfiles of several package managers found (npm, yarn)");
			expect(read("package.json")).toBe(original);
			expect(Util.execSync).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);

			process.exitCode = originalExitCode;
			await run({ skipInstall: true });

			expect(read("package.json")).toContain(`"${WC}": "~6.1.0"`);
			expect(Util.execSync).not.toHaveBeenCalled();
			expect(log()).toContain("Run your package manager's install command to update the lockfile.");
			expect(process.exitCode).not.toBe(1);
		});

		it("restores package.json and a binary bun.lockb byte for byte, and removes a lockfile created by the failed install", async () => {
			const lockb = Buffer.from([0xff, 0x00, 0xfe, 0x80]);
			project({}, { "bun.lockb": lockb });
			const original = read("package.json");
			plan();
			(Util.execSync as jasmine.Spy).and.callFake(() => {
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
			project({}, { "bun.lockb": lockb });
			const original = read("package.json");
			plan();
			(Util.execSync as jasmine.Spy).and.callFake(() => {
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
			(Util.execSync as jasmine.Spy).and.throwError("Command failed: npm install");

			await run();
			expect(read("package-lock.json")).toBe("{}");
			expect(log()).toContain(`run "npm ci" to resync it`);

			fs.rmSync("package-lock.json");
			(Util.execSync as jasmine.Spy).and.callFake(() => {
				fs.writeFileSync("package-lock.json", "created");
				throw new Error("Command failed: npm install");
			});

			await run();
			expect(fs.existsSync("package-lock.json")).toBe(false);
			expect(log()).toContain(`"npm install" failed. Restored package.json; node_modules may be partially updated, run "npm install"`);
		});

		it("warns about uncommitted changes without blocking the update", async () => {
			project();
			plan();
			(Util.spawnSync as jasmine.Spy).and.returnValue({ status: 0, stdout: " M package.json\n" });

			await run();

			expect(Util.spawnSync).toHaveBeenCalledWith("git", jasmine.arrayContaining(["status", "--porcelain", "package.json", "bun.lockb"]),
				{ encoding: "utf8" });
			expect(log()).toContain("package.json or a lockfile has uncommitted changes");
			expect(Util.execSync).toHaveBeenCalledOnceWith("npm install", installOptions());
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
			expect(log()).toContain("including new majors, applies their migrations and installs dependencies. It requires a clean git working tree.");
			expect(log()).toContain("Dry run: no files were changed.");
			expect(Util.spawnSync).not.toHaveBeenCalled();

			await run();

			expect(log()).toContain(`Running "ng update igniteui-angular igniteui-cli @igniteui/angular-schematics" with the project's Angular CLI.`);
			expect(Util.spawnSync).toHaveBeenCalledOnceWith("node",
				[ngBin(), "update", "igniteui-angular", "igniteui-cli", "@igniteui/angular-schematics"], { stdio: "inherit" });
			expect(getPlan).not.toHaveBeenCalled();
			expect(Util.execSync).not.toHaveBeenCalled();
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

		const results: [string, object, number, string[]][] = [
			["success", { status: 0 }, 0, []],
			["failure", { status: 2 }, 2, [hint("igniteui-angular")]],
			["termination by a signal", { status: null, signal: "SIGTERM" }, 1, [hint("igniteui-angular")]],
			["spawn error", { status: null, error: new Error("spawnSync node ENOENT") }, 1, ["Unable to run the Angular CLI: spawnSync node ENOENT"]]
		];
		for (const [name, result, exitCode, messages] of results) {
			it(`passes the ng update exit code through (${name})`, async () => {
				angularProject({ dependencies: { "igniteui-angular": "~21.0.0" } });
				(Util.spawnSync as jasmine.Spy).and.returnValue(result);

				await run();

				expect(process.exitCode).toBe(exitCode);
				expect(output.slice(1)).toEqual(messages);
			});
		}
	});
});
