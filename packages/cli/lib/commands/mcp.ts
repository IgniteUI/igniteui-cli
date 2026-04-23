import * as fs from "fs";
import * as path from "path";
import { spawn } from "child_process";
import { CommandType, PositionalArgs } from "./types";
import { ArgumentsCamelCase } from "yargs";

const command: CommandType = {
	command: "mcp",
	describe: "starts the Ignite UI MCP server for AI assistant integration",
	templateManager: null,
	builder: (yargs) => {
		return yargs
			.option("remote", {
				describe: "backend URL for remote mode (uses HTTP instead of local SQLite)",
				type: "string",
				requiresArg: true
			})
			.option("debug", {
				describe: "enable debug logging to mcp-server.log",
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
