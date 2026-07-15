import child_process from "child_process";
import { EventEmitter } from "events";
import fs = require("fs");
import * as path from "path";
import yargs from "yargs";
import mcp from "../../packages/cli/lib/commands/mcp";

function createFakeChildProcess(): EventEmitter {
	return new EventEmitter();
}

describe("Unit - MCP CLI command", () => {
	const mcpPackageJson = path.join(process.cwd(), "node_modules", "@igniteui", "mcp-server", "package.json");
	const mcpEntry = path.resolve(path.dirname(mcpPackageJson), "dist", "index.js");

	let stderrWriteSpy: jasmine.Spy;
	let spawnSpy: jasmine.Spy;

	beforeEach(() => {
		process.exitCode = undefined;
		stderrWriteSpy = spyOn(process.stderr, "write").and.returnValue(true);
		spawnSpy = spyOn(child_process, "spawn");
	});

	afterEach(() => {
		process.exitCode = undefined;
	});

	function mockMcpPackageResolution(resolvedPath?: string, shouldThrow = false): void {
		const moduleApi = require("module");
		const originalResolveFilename = moduleApi._resolveFilename;

		spyOn(moduleApi, "_resolveFilename").and.callFake((request: string, ...args: any[]) => {
			if (request === "@igniteui/mcp-server/package.json") {
				if (shouldThrow) {
					throw new Error("Cannot find module");
				}
				return resolvedPath;
			}

			return originalResolveFilename.call(moduleApi, request, ...args);
		});
	}

	function mockInstalledMcp(entryExists: boolean, child?: EventEmitter): EventEmitter {
		const spawnedChild = child ?? createFakeChildProcess();
		mockMcpPackageResolution(mcpPackageJson);
		spyOn(fs, "existsSync").and.returnValue(entryExists);
		spawnSpy.and.returnValue(spawnedChild as any);
		return spawnedChild;
	}

	describe("metadata", () => {
		it("registers the MCP command with the expected description", () => {
			expect(mcp.command).toBe("mcp");
			expect(mcp.describe).toBe("Starts the Ignite UI MCP server for AI assistant integration");
		});

		it("configures the debug and remote options", () => {
			const buildParser = mcp.builder as any;
			const parser = buildParser(yargs([]));
			const argv = parser.parseSync(["--remote", "https://docs.example.test", "--debug"]);
			const defaults = buildParser(yargs([])).parseSync([]);

			expect(argv.remote).toBe("https://docs.example.test");
			expect(argv.debug).toBeTrue();
			expect(defaults.debug).toBeFalse();
		});
	});

	describe("preflight checks", () => {
		it("shows an install message when the MCP server package cannot be resolved", async () => {
			const existsSyncSpy = spyOn(fs, "existsSync");
			mockMcpPackageResolution(undefined, true);

			await mcp.handler({ _: ["mcp"], $0: "ig" } as any);

			expect(process.exitCode).toBe(1);
			expect(existsSyncSpy).not.toHaveBeenCalled();
			expect(spawnSpy).not.toHaveBeenCalled();

			expect(stderrWriteSpy).toHaveBeenCalled();
			const message = stderrWriteSpy.calls.allArgs().map(args => args[0]).join("");
			expect(message).toContain("MCP server package not found");
			expect(message).toContain("yarn install");
		});

		it("shows a build message when the MCP server entry does not exist", async () => {
			mockMcpPackageResolution(mcpPackageJson);
			spyOn(fs, "existsSync").and.returnValue(false);

			await mcp.handler({ _: ["mcp"], $0: "ig" } as any);

			expect(fs.existsSync).toHaveBeenCalledWith(mcpEntry);
			expect(process.exitCode).toBe(1);
			expect(spawnSpy).not.toHaveBeenCalled();

			expect(stderrWriteSpy).toHaveBeenCalled();
			const message = stderrWriteSpy.calls.allArgs().map(args => args[0]).join("");
			expect(message).toContain("MCP server not built");
			expect(message).toContain("build:mcp");
		});
	});

	describe("runtime behavior", () => {
		it("starts the installed MCP server with stdio inheritance", async () => {
			const child = mockInstalledMcp(true);
			const result = mcp.handler({ _: ["mcp"], $0: "ig" } as any) as Promise<void>;

			expect(spawnSpy).toHaveBeenCalledWith(
				process.execPath,
				[mcpEntry],
				{ stdio: "inherit" }
			);

			child.emit("exit", 0);
			await result;
		});

		it("forwards remote and debug flags to the installed MCP server", async () => {
			const remoteUrl = "https://docs.example.test";
			const child = mockInstalledMcp(true);
			const result = mcp.handler({
				remote: remoteUrl,
				debug: true,
				_: ["mcp"],
				$0: "ig"
			} as any) as Promise<void>;

			expect(spawnSpy).toHaveBeenCalledWith(
				process.execPath,
				[mcpEntry, "--remote", remoteUrl, "--debug"],
				{ stdio: "inherit" }
			);

			child.emit("exit", 0);
			await result;
		});

		it("forwards only the debug flag when remote mode is not used", async () => {
			const child = mockInstalledMcp(true);
			const result = mcp.handler({
				debug: true,
				_: ["mcp"],
				$0: "ig"
			} as any) as Promise<void>;

			expect(spawnSpy).toHaveBeenCalledWith(
				process.execPath,
				[mcpEntry, "--debug"],
				{ stdio: "inherit" }
			);

			child.emit("exit", 0);
			await result;
		});

		it("propagates the child process exit code", async () => {
			const child = mockInstalledMcp(true);
			const result = mcp.handler({ _: ["mcp"], $0: "ig" } as any) as Promise<void>;

			child.emit("exit", 7);
			await result;

			expect(process.exitCode).toBe(7);
		});

		it("defaults the process exit code to 0 when the child exits without one", async () => {
			const child = mockInstalledMcp(true);
			const result = mcp.handler({ _: ["mcp"], $0: "ig" } as any) as Promise<void>;

			child.emit("exit", null);
			await result;

			expect(process.exitCode).toBe(0);
		});

		it("reports child process startup errors", async () => {
			const child = mockInstalledMcp(true);
			const error = new Error("boom");
			const result = mcp.handler({ _: ["mcp"], $0: "ig" } as any) as Promise<void>;

			child.emit("error", error);

			await expectAsync(result).toBeRejectedWith(error);

			expect(stderrWriteSpy).toHaveBeenCalled();
			const message = stderrWriteSpy.calls.allArgs().map(args => args[0]).join("");
			expect(message).toContain("Failed to start MCP server");
			expect(message).toContain("boom");
		});
	});
});
