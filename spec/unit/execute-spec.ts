import * as fs from "fs";
import * as os from "os";
import * as path from "path";

describe("Unit - execute.js", () => {
	const execute = require.resolve("../../packages/cli/bin/execute.js");
	const invokedCli = require.resolve("../../packages/cli/lib/cli");
	let originalCwd: string;
	let originalArgv: string[];
	let originalInvokedCli: NodeModule | undefined;
	let tempRoot: string;
	let localCli: string;

	function stubCli(file: string, onRun: () => void) {
		require.cache[file] = { id: file, filename: file, loaded: true, exports: { run: async () => onRun() } } as NodeModule;
	}

	function runExecute(...args: string[]): Promise<string> {
		return new Promise(resolve => {
			stubCli(invokedCli, () => resolve("invoked"));
			stubCli(localCli, () => resolve("local"));
			process.argv = [process.execPath, execute, ...args];
			delete require.cache[execute];
			require(execute);
		});
	}

	beforeEach(() => {
		originalCwd = process.cwd();
		originalArgv = process.argv;
		originalInvokedCli = require.cache[invokedCli];
		tempRoot = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), "igniteui-execute-")));
		const localDir = path.join(tempRoot, "node_modules", "igniteui-cli");
		localCli = path.join(localDir, "index.js");
		fs.mkdirSync(localDir, { recursive: true });
		fs.writeFileSync(path.join(localDir, "package.json"), JSON.stringify({ name: "igniteui-cli", version: "0.0.1" }));
		fs.writeFileSync(localCli, "");
		process.chdir(tempRoot);
		spyOn(console, "log");
	});

	afterEach(() => {
		process.chdir(originalCwd);
		process.argv = originalArgv;
		require.cache[invokedCli] = originalInvokedCli;
		fs.rmSync(tempRoot, { recursive: true, force: true });
	});

	it("delegates commands to the project-local CLI", async () => {
		expect(await runExecute("add", "grid")).toBe("local");
	});

	it("runs update and ai-config with the invoked CLI, even when an older one is installed locally", async () => {
		expect(await runExecute("update")).toBe("invoked");
		expect(await runExecute("ai-config")).toBe("invoked");
	});
});
