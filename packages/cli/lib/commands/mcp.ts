import * as fs from "fs";
import * as path from "path";
import { spawn } from "child_process";
import { CommandType, PositionalArgs } from "./types";
import { ArgumentsCamelCase } from "yargs";

/**
 * Resolves the built MCP server entry installed with the CLI copy in `cliDir`.
 * @returns the entry path, or `null` when the server package is missing or not built
 */
export function resolveMcpServerEntry(cliDir: string): string | null {
	try {
		// resolve from the real folder: pnpm links packages and keeps their dependencies next to the link target
		const mcpPkgJson = require.resolve("@igniteui/mcp-server/package.json", { paths: [fs.realpathSync(cliDir)] });
		const mcpEntry = path.resolve(path.dirname(mcpPkgJson), "dist", "index.js");
		return fs.existsSync(mcpEntry) ? mcpEntry : null;
	} catch {
		return null;
	}
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
		let mcpEntry: string;
		try {
			const mcpPkgJson = require.resolve("@igniteui/mcp-server/package.json");
			mcpEntry = path.resolve(path.dirname(mcpPkgJson), "dist", "index.js");
		} catch {
			process.stderr.write(
				"MCP server package not found. Install it first:\n" +
				"  yarn install\n"
			);
			process.exitCode = 1;
			return;
		}

		if (!fs.existsSync(mcpEntry)) {
			process.stderr.write(
				"MCP server not built. Build it first:\n" +
				"  npm run build:mcp\n"
			);
			process.exitCode = 1;
			return;
		}

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
