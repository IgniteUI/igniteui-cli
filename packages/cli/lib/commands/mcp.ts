import * as fs from "fs";
import * as path from "path";
import { spawn } from "child_process";
import { CommandType, PositionalArgs } from "./types";
import { ArgumentsCamelCase } from "yargs";

const command: CommandType = {
	command: "mcp",
	describe: "Starts the Ignite UI MCP server for AI assistant integration",
	templateManager: null,
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
			})
			.usage("");
	},
	async handler(argv: ArgumentsCamelCase<PositionalArgs>) {
		const mcpEntry = path.resolve(__dirname, "..", "..", "mcp", "dist", "index.js");

		if (!fs.existsSync(mcpEntry)) {
			process.stderr.write(
				"MCP server bundle not found. Build it first:\n" +
				"  cd packages/igniteui-mcp/igniteui-doc-mcp && npm install && npm run build && cd ../../..\n" +
				"  npm run build:mcp-bundle\n"
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
