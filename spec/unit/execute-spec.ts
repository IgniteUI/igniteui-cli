import fs from "fs";
import * as os from "os";
import * as path from "path";

describe("Unit - execute.js", () => {
	const execute = require.resolve("../../packages/cli/bin/execute.js");
	const invokedCli = require.resolve("../../packages/cli/lib/cli");
	const invokedPackage = require.resolve("../../packages/cli/package.json");
	const devBuildSource = path.join(path.dirname(execute), "../lib/cli.ts");
	let originalCwd: string;
	let originalArgv: string[];
	let originalEnv: NodeJS.ProcessEnv;
	let originalInvokedCli: NodeModule | undefined;
	let originalInvokedPackage: NodeModule | undefined;
	let existsSync: jasmine.Spy;
	let tempRoot: string;
	let localPackage: string;
	let localCli: string;

	function stubModule(file: string, exports: object) {
		require.cache[file] = { id: file, filename: file, loaded: true, exports } as NodeModule;
	}

	function runExecute(...args: string[]): Promise<string> {
		return new Promise(resolve => {
			stubModule(invokedCli, { run: async () => resolve("invoked") });
			stubModule(localCli, { run: async () => resolve("local") });
			process.argv = [process.execPath, execute, ...args];
			delete require.cache[execute];
			require(execute);
		});
	}

	function setLocal(version: string, engines?: object) {
		fs.writeFileSync(localPackage, JSON.stringify({ name: "igniteui-cli", version, engines }));
		delete require.cache[localPackage];
	}

	function publishInvoked(version: string) {
		existsSync.withArgs(devBuildSource).and.returnValue(false);
		stubModule(invokedPackage, { version });
	}

	beforeEach(() => {
		originalCwd = process.cwd();
		originalArgv = process.argv;
		originalEnv = process.env;
		process.env = { ...originalEnv };
		delete process.env.IG_DISABLE_VERSION_CHECK;
		originalInvokedCli = require.cache[invokedCli];
		originalInvokedPackage = require.cache[invokedPackage];
		existsSync = spyOn(fs, "existsSync").and.callThrough();
		tempRoot = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), "igniteui-execute-")));
		const localDir = path.join(tempRoot, "node_modules", "igniteui-cli");
		localPackage = path.join(localDir, "package.json");
		localCli = path.join(localDir, "index.js");
		fs.mkdirSync(localDir, { recursive: true });
		setLocal("0.0.1");
		fs.writeFileSync(localCli, "");
		process.chdir(tempRoot);
		// the global and local version mismatch message
		spyOn(console, "error");
	});

	afterEach(() => {
		process.chdir(originalCwd);
		process.argv = originalArgv;
		process.env = originalEnv;
		require.cache[invokedCli] = originalInvokedCli;
		require.cache[invokedPackage] = originalInvokedPackage;
		fs.rmSync(tempRoot, { recursive: true, force: true });
	});

	it("delegates other commands to the project-local CLI, except ai-config, which runs with the invoked CLI", async () => {
		setLocal("16.2.0");
		publishInvoked("16.0.0");

		expect(await runExecute("add", "grid")).toBe("local");
		expect(await runExecute("ai-config")).toBe("invoked");
	});

	it("runs update with the local CLI when it is a release of at least 16.0.0, not older than the invoked one", async () => {
		const expected: Record<string, [string, string]> = {
			"15.9.0": ["invoked", "invoked"],
			"16.0.0-alpha.1": ["invoked", "invoked"],
			"latest": ["invoked", "invoked"],
			"16.0.0": ["local", "invoked"],
			"16.1.0-beta.0": ["local", "invoked"],
			"16.2.0": ["local", "local"]
		};
		for (const [local, results] of Object.entries(expected)) {
			setLocal(local);
			for (const [i, invoked] of ["16.0.0", "16.2.0"].entries()) {
				publishInvoked(invoked);

				expect(await runExecute("update", "igniteui-react")).withContext(`local ${local}, invoked ${invoked}`).toBe(results[i]);
			}
		}
	});

	it("runs update with the local CLI only when it declares no Node.js requirement or one the running Node.js meets", async () => {
		const expected: [string, object | undefined, string][] = [
			["16.0.0", undefined, "local"],
			["16.0.0", { node: ">=0.0.0" }, "local"],
			["16.0.0", { node: ">=999" }, "invoked"],
			["16.0.0", { node: "not a range" }, "invoked"],
			["16.2.0", { node: ">=999" }, "invoked"]
		];
		for (const [invoked, engines, result] of expected) {
			setLocal("16.2.0", engines);
			publishInvoked(invoked);

			expect(await runExecute("update")).withContext(`invoked ${invoked}, engines ${JSON.stringify(engines)}`).toBe(result);
		}
	});

	it("runs update with the invoked CLI when there is no local CLI", async () => {
		fs.rmSync(path.join(tempRoot, "node_modules"), { recursive: true, force: true });
		publishInvoked("16.0.0");

		expect(await runExecute("update")).toBe("invoked");
	});

	it("runs update with the invoked CLI when it is a repository build or IG_DISABLE_VERSION_CHECK is 1 or true", async () => {
		setLocal("16.2.0");

		expect(await runExecute("update")).withContext("repository build").toBe("invoked");

		publishInvoked("16.0.0");
		for (const [value, result] of [["1", "invoked"], ["true", "invoked"], ["TRUE", "invoked"], ["0", "local"], ["false", "local"], ["", "local"]]) {
			process.env.IG_DISABLE_VERSION_CHECK = value;

			expect(await runExecute("update")).withContext(`IG_DISABLE_VERSION_CHECK=${value}`).toBe(result);
		}
	});
});
