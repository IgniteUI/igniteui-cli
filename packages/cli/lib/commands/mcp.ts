import * as fs from "fs";
import * as path from "path";
import { spawn } from "child_process";
import { CommandType, PositionalArgs } from "./types";
import { ArgumentsCamelCase } from "yargs";

export type McpServerLocation =
	| { status: "found"; entry: string }
	| { status: "not-built"; entry: string }
	| { status: "missing" }
	| { status: "error"; error: Error };

/**
 * Locates the MCP server installed with the CLI copy in `cliDir`.
 * `@igniteui/mcp-server` is a dependency of igniteui-cli, so "missing" and "not-built" mean a broken
 * install, or a source checkout that has not been installed or built yet.
 */
export function locateMcpServer(cliDir: string): McpServerLocation {
	let mcpPkgJson: string;
	try {
		// resolve from the real folder: pnpm links packages and keeps their dependencies next to the link target
		mcpPkgJson = require.resolve("@igniteui/mcp-server/package.json", { paths: [fs.realpathSync(cliDir)] });
	} catch (err) {
		return (err as NodeJS.ErrnoException).code === "MODULE_NOT_FOUND"
			? { status: "missing" }
			: { status: "error", error: err as Error };
	}
	const entry = path.resolve(path.dirname(mcpPkgJson), "dist", "index.js");
	return fs.existsSync(entry) ? { status: "found", entry } : { status: "not-built", entry };
}

/**
 * Resolves the built MCP server entry installed with the CLI copy in `cliDir`.
 * @returns the entry path, or `null` when the server package is missing, not built or cannot be resolved
 */
export function resolveMcpServerEntry(cliDir: string): string | null {
	const location = locateMcpServer(cliDir);
	return location.status === "found" ? location.entry : null;
}

/**
 * Maps the options of `ig mcp` to the server's own command line, which reads only `--remote <url>` and `--debug`.
 * @param args the arguments after `mcp`
 * @returns the server arguments, or `null` when the CLI must parse them (help, version, other or incomplete options)
 */
export function getMcpServerArgs(args: string[]): string[] | null {
	const serverArgs: string[] = [];
	for (let i = 0; i < args.length; i++) {
		const arg = args[i];
		if (arg === "--debug") {
			serverArgs.push(arg);
		} else if (arg === "--remote" && args[i + 1] && !args[i + 1].startsWith("-")) {
			serverArgs.push(arg, args[++i]);
		} else if (arg.startsWith("--remote=") && arg.length > "--remote=".length) {
			serverArgs.push("--remote", arg.slice("--remote=".length));
		} else {
			return null;
		}
	}
	return serverArgs;
}

function mcpServerProblem(location: Exclude<McpServerLocation, { status: "found" }>): string {
	switch (location.status) {
		case "missing":
			return "MCP server package @igniteui/mcp-server not found. It is a dependency of igniteui-cli:\n" +
				"reinstall igniteui-cli, or in a source checkout run `npm ci` at the repository root.\n";
		case "not-built":
			return `MCP server is not built (${location.entry} is missing). Published packages ship it built:\n` +
				"reinstall igniteui-cli, or in a source checkout run `npm run build:mcp` at the repository root.\n";
		case "error":
			return `Could not load the MCP server package @igniteui/mcp-server: ${location.error.message}\n`;
	}
}

const command: CommandType = {
	command: "mcp",
	describe: "Starts the Ignite UI MCP server for AI assistant integration",
	builder: (yargs) => {
		return yargs
			.option("remote", {
				describe: "Backend URL for remote mode (uses HTTP instead of local SQLite)",
				type: "string",
				requiresArg: true
			})
			.option("debug", {
				describe: "Enable debug logging to mcp-server.log",
				type: "boolean",
				default: false
			});
	},
	async handler(argv: ArgumentsCamelCase<PositionalArgs>) {
		const location = locateMcpServer(__dirname);
		if (location.status !== "found") {
			process.stderr.write(mcpServerProblem(location));
			process.exitCode = 1;
			return;
		}
		const mcpEntry = location.entry;

		const args: string[] = [];
		if (argv.remote) {
			args.push("--remote", argv.remote as string);
		}
		if (argv.debug) {
			args.push("--debug");
		}

		return new Promise<void>((resolve, reject) => {
			const child = spawn(process.execPath, [mcpEntry, ...args], {
				stdio: "inherit"
			});

			child.on("error", (err) => {
				process.stderr.write(`Failed to start MCP server: ${err.message}\n`);
				reject(err);
			});

			child.on("exit", (code) => {
				process.exitCode = code ?? 0;
				resolve();
			});
		});
	}
};

export default command;
