import { Util } from "@igniteui/cli-core";
import child_process from "child_process";
import fs from "fs";
import * as os from "os";
import * as path from "path";
import { runTemporaryCli, selectRunner } from "../../packages/cli/lib/commands/update-runner";
import * as versionUpdate from "../../packages/core/update/version-update";

describe("Unit - update runner", () => {
	let originalEnv: NodeJS.ProcessEnv;
	let existsSync: jasmine.Spy;
	let version: jasmine.Spy;
	let npmView: jasmine.Spy;

	const manifests = (...versions: string[]) => versions.map(v => ({ version: v }));

	function select(running: string, published: unknown, verbose = false) {
		version.and.returnValue(running);
		npmView.and.returnValue(published);
		return selectRunner(verbose);
	}

	beforeEach(() => {
		originalEnv = process.env;
		process.env = { ...originalEnv };
		delete process.env.IG_DISABLE_VERSION_CHECK;
		existsSync = spyOn(fs, "existsSync").and.returnValue(false);
		version = spyOn(Util, "version");
		npmView = spyOn(versionUpdate, "npmView");
		spyOn(Util, "log");
		spyOn(Util, "warn");
		spyOn(Util, "error");
	});

	afterEach(() => {
		process.env = originalEnv;
	});

	it("looks up the running major once, without retries and with a new empty cache, and selects its newest version above the running one", () => {
		expect(select("16.0.0", manifests("16.0.0", "16.2.1", "16.1.0"))).toBe("16.2.1");
		const cache: string = npmView.calls.mostRecent().args[3][3];
		expect(npmView).toHaveBeenCalledOnceWith("igniteui-cli@16", ["name", "version", "engines"], false,
			["--fetch-retries=0", "--fetch-timeout=15000", "--cache", cache]);
		expect(cache.startsWith(path.join(os.tmpdir(), "igniteui-cli-lookup-"))).toBeTrue();
		expect(fs.statSync(cache, { throwIfNoEntry: false })).toBeUndefined();
	});

	it("selects only versions of at least 16.0.0 that are newer than the running one, from an array or a single match", () => {
		const cases: [string, unknown, string | undefined][] = [
			["16.0.0", manifests("16.0.0"), undefined],
			["16.2.1", manifests("16.0.0", "16.2.1"), undefined],
			["16.3.0-beta.0", manifests("16.2.1"), undefined],
			["16.3.0-beta.0", manifests("16.2.1", "16.3.0"), "16.3.0"],
			["15.8.2", manifests("15.9.0"), undefined],
			["16.0.0-alpha.0", manifests("16.0.0-alpha.1"), undefined],
			["16.0.0", manifests("16.0.1", "latest"), "16.0.1"],
			["16.0.0", manifests("v16.0.1"), "16.0.1"],
			["16.0.0", { version: "16.0.1" }, "16.0.1"]
		];
		for (const [running, published, runner] of cases) {
			expect(select(running, published)).withContext(`running ${running}, published ${JSON.stringify(published)}`).toBe(runner);
		}
	});

	it("selects the newest version that supports the running Node.js, naming a newer one that doesn't with --verbose", () => {
		const published = [{ version: "16.1.0", engines: { node: ">=1" } }, { version: "16.2.0", engines: { node: ">=999" } }];

		expect(select("16.0.0", published, true)).toBe("16.1.0");
		expect(Util.log).toHaveBeenCalledWith(`Skipped igniteui-cli 16.2.0: it requires Node.js >=999 (running ${process.version}).`, "gray");
		expect(select("16.0.0", [{ version: "16.1.0", engines: { node: "latest" } }])).toBeUndefined();

		const nodeVersion = Object.getOwnPropertyDescriptor(process, "version")!;
		Object.defineProperty(process, "version", { value: "v24.0.0-rc.1" });
		expect(select("16.0.0", [{ version: "16.1.0", engines: { node: ">=18" } }])).withContext("prerelease Node.js").toBe("16.1.0");
		Object.defineProperty(process, "version", nodeVersion);
	});

	it("warns and continues with the running version when the lookup or its temporary cache fails", () => {
		version.and.returnValue("16.0.0");
		npmView.and.throwError("Unable to get igniteui-cli@16 from the registry: request failed.");

		expect(selectRunner(false)).toBeUndefined();
		expect(Util.warn).toHaveBeenCalledOnceWith("Unable to get igniteui-cli@16 from the registry: request failed. Continuing with igniteui-cli 16.0.0.", "yellow");
		expect(fs.statSync(npmView.calls.mostRecent().args[3][3], { throwIfNoEntry: false })).toBeUndefined();

		spyOn(fs, "mkdtempSync").and.throwError("EACCES: permission denied");

		expect(selectRunner(false)).toBeUndefined();
		expect(Util.warn).toHaveBeenCalledWith("EACCES: permission denied Continuing with igniteui-cli 16.0.0.", "yellow");
		expect(npmView).toHaveBeenCalledTimes(1);
		expect(Util.error).not.toHaveBeenCalled();
	});

	it("skips the lookup for a repository build or when IG_DISABLE_VERSION_CHECK is 1 or true", () => {
		const cases: [string, string | undefined][] = [["1", undefined], ["true", undefined], ["TRUE", undefined], ["0", "16.1.0"], ["false", "16.1.0"]];
		for (const [value, runner] of cases) {
			process.env.IG_DISABLE_VERSION_CHECK = value;

			expect(select("16.0.0", manifests("16.1.0"), true)).withContext(value).toBe(runner);
		}
		expect(Util.log).toHaveBeenCalledWith("Skipped the igniteui-cli version check: IG_DISABLE_VERSION_CHECK is set.", "gray");

		delete process.env.IG_DISABLE_VERSION_CHECK;
		existsSync.and.callThrough();

		expect(select("16.0.0", manifests("16.1.0"), true)).toBeUndefined();
		expect(Util.log).toHaveBeenCalledWith("Skipped the igniteui-cli version check: repository build.", "gray");
		expect(npmView).toHaveBeenCalledTimes(2);
	});

	describe("runTemporaryCli", () => {
		const RECOVERY = "To run this update with igniteui-cli 16.0.0 instead, set IG_DISABLE_VERSION_CHECK=1 and rerun the command.";
		const INSTALLED = { bin: { ig: "bin/execute.js" } };
		let originalCwd: string;
		let originalArgv: string[];
		let project: string;
		let mkdtemp: jasmine.Spy;
		let npmCommand: jasmine.Spy;
		let spawnSync: jasmine.Spy;
		let install: object;
		let installed: object | undefined;
		let child: object;
		let seen: { npmrc?: string; sigint: number }[];

		const dir = (): string => mkdtemp.calls.mostRecent().returnValue;
		const read = (file: string) => fs.existsSync(file) ? fs.readFileSync(file, "utf8") : undefined;

		beforeEach(() => {
			originalCwd = process.cwd();
			originalArgv = process.argv;
			project = fs.mkdtempSync(path.join(os.tmpdir(), "igniteui-runner-project-"));
			process.chdir(project);
			process.argv = [process.execPath, "execute.js", "update", "igniteui-react", "--dry-run"];
			existsSync.and.callThrough();
			version.and.returnValue("16.0.0");
			mkdtemp = spyOn(fs, "mkdtempSync").and.callThrough();
			npmCommand = spyOn(versionUpdate, "npmCommand").and.callFake((args: string[]) => ["npm", args, { shell: true }]);
			install = { status: 0 };
			installed = INSTALLED;
			child = { status: 3 };
			seen = [];
			spawnSync = spyOn(child_process, "spawnSync").and.callFake(((command: string) => {
				seen.push({ npmrc: read(path.join(dir(), ".npmrc")), sigint: process.listenerCount("SIGINT") });
				if (command !== "npm") {
					return child;
				}
				if (installed) {
					const packageDir = path.join(dir(), "node_modules", "igniteui-cli");
					fs.mkdirSync(packageDir, { recursive: true });
					fs.writeFileSync(path.join(packageDir, "package.json"), JSON.stringify(installed));
				}
				return install;
			}) as never);
		});

		afterEach(() => {
			process.chdir(originalCwd);
			process.argv = originalArgv;
			fs.rmSync(project, { recursive: true, force: true });
		});

		it("installs the version into a temporary directory and reruns the command with it, returning its exit code", () => {
			const sigint = process.listenerCount("SIGINT");

			expect(runTemporaryCli("16.2.1", false)).toBe(3);
			expect(dir().startsWith(path.join(os.tmpdir(), "igniteui-cli-update-"))).toBeTrue();
			expect(spawnSync.calls.allArgs()).toEqual([
				["npm", ["install", "igniteui-cli@16.2.1", "--prefix", dir(), "--no-save", "--no-package-lock", "--no-audit", "--no-fund",
					"--ignore-scripts", "--include=optional", "--loglevel=error"], { shell: true, stdio: ["ignore", "ignore", "inherit"] }],
				[process.execPath, [path.join(dir(), "node_modules", "igniteui-cli", "bin", "execute.js"), "update", "igniteui-react", "--dry-run"],
					{ stdio: "inherit", env: jasmine.objectContaining({ IG_DISABLE_VERSION_CHECK: "1", IG_CLI_ANALYTICS: "false" }) }]
			]);
			expect(seen).toEqual([{ npmrc: undefined, sigint: sigint + 1 }, { npmrc: undefined, sigint: sigint + 1 }]);
			expect(process.listenerCount("SIGINT")).toBe(sigint);
			expect(fs.existsSync(dir())).toBeFalse();
			expect(Util.error).not.toHaveBeenCalled();
		});

		it("copies the project .npmrc for the install only, without printing it", () => {
			fs.writeFileSync(".npmrc", "//registry.example/:_authToken=SECRET\n");

			expect(runTemporaryCli("16.2.1", true)).toBe(3);
			expect(seen.map(s => s.npmrc)).toEqual(["//registry.example/:_authToken=SECRET\n", undefined]);
			expect(JSON.stringify((Util.log as jasmine.Spy).calls.allArgs())).not.toContain("SECRET");
		});

		it("returns the new CLI's exit code as is, and 1 when it ends without one or doesn't start", () => {
			const results: [object, number][] = [[{ status: 0 }, 0], [{ status: 3221225786 }, 3221225786], [{ status: null, signal: "SIGTERM" }, 1]];
			for (const [result, code] of results) {
				child = result;

				expect(runTemporaryCli("16.2.1", false)).withContext(JSON.stringify(result)).toBe(code);
			}
			expect(Util.error).not.toHaveBeenCalled();

			child = { status: null, error: new Error("spawnSync node EACCES") };

			expect(runTemporaryCli("16.2.1", false)).toBe(1);
			expect(Util.error).toHaveBeenCalledOnceWith("Couldn't start igniteui-cli 16.2.1.", "red");
			expect(Util.warn).toHaveBeenCalledOnceWith("spawnSync node EACCES", "red");
			expect(Util.log).toHaveBeenCalledWith(RECOVERY);
			expect(fs.existsSync(dir())).toBeFalse();
		});

		it("reports a failed install with the way to keep the running version, never starting the new CLI", () => {
			const failures: [object, object | undefined, string | jasmine.AsymmetricMatcher<string>][] = [
				[{ status: 1 }, INSTALLED, "npm install ended with exit code 1."],
				[{ status: null, signal: "SIGINT" }, INSTALLED, "npm install ended with SIGINT."],
				[{ status: null, error: new Error("spawnSync npm ENOENT") }, INSTALLED, "spawnSync npm ENOENT"],
				[{ status: 0 }, undefined, jasmine.stringContaining("ENOENT")],
				[{ status: 0 }, { bin: "bin/execute.js" }, 'igniteui-cli 16.2.1 has no "ig" command.']
			];
			for (const [result, manifest, details] of failures) {
				spawnSync.calls.reset();
				install = result;
				installed = manifest;

				expect(runTemporaryCli("16.2.1", false)).withContext(JSON.stringify(result)).toBe(1);
				expect(spawnSync.calls.allArgs().map(([command]) => command)).toEqual(["npm"]);
				expect(Util.warn).toHaveBeenCalledWith(details, "red");
				expect(fs.existsSync(dir())).toBeFalse();
			}

			spawnSync.calls.reset();
			npmCommand.and.throwError('Unable to run npm through cmd.exe with the argument "C:\\a%b".');

			expect(runTemporaryCli("16.2.1", false)).toBe(1);
			expect(spawnSync).not.toHaveBeenCalled();
			expect(Util.warn).toHaveBeenCalledWith('Unable to run npm through cmd.exe with the argument "C:\\a%b".', "red");
			expect(fs.existsSync(dir())).toBeFalse();
			expect(Util.error).toHaveBeenCalledTimes(6);
			expect(Util.error).toHaveBeenCalledWith("Couldn't install igniteui-cli 16.2.1 to run this update.", "red");
			expect(Util.log).toHaveBeenCalledWith(RECOVERY);
		});

		it("keeps ignoring Ctrl+C while removing the temporary directory, and only notes one it can't remove with --verbose", () => {
			const sigint = process.listenerCount("SIGINT");
			let sigintWhileRemoving = 0;
			const rmSync = fs.rmSync;
			spyOn(fs, "rmSync").and.callFake((file: fs.PathLike, options?: fs.RmOptions) => {
				if (file === dir()) {
					sigintWhileRemoving = process.listenerCount("SIGINT");
					throw new Error("EBUSY");
				}
				rmSync(file, options);
			});

			expect(runTemporaryCli("16.2.1", true)).toBe(3);
			expect(sigintWhileRemoving).toBe(sigint + 1);
			expect(process.listenerCount("SIGINT")).toBe(sigint);
			expect(Util.log).toHaveBeenCalledWith(`Unable to remove ${dir()}: EBUSY`, "gray");
			rmSync(dir(), { recursive: true, force: true });
		});
	});
});
