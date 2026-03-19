import { GoogleAnalytics, Util } from "@igniteui/cli-core";
import { ArgumentsCamelCase, CommandModule } from "yargs";
import * as path from "path";
import * as fs from "fs";
import { homedir } from "os";

const MCP_SERVER_KEY = "igniteui-mcp-server";


function resolveMcpEntry(): { command: string; args: string[] } {
	// Resolve the MCP server entry from the CLI's own node_modules.
	// This works in both the monorepo (file: dep) and when the CLI is globally installed.
	try {
		const pkgEntry = require.resolve("igniteui-mcp-server");
		return { command: "node", args: [pkgEntry] };
	} catch {
		// Not installed alongside the CLI — download and run on demand via npx
		return { command: "npx", args: ["-y", "igniteui-mcp-server"] };
	}
}

type Client = "vscode" | "claude";

interface McpServerEntry {
	command: string;
	args: string[];
}

interface VsCodeMcpConfig {
	servers: Record<string, McpServerEntry>;
}

interface ClaudeDesktopConfig {
	mcpServers: Record<string, McpServerEntry>;
}

function getConfigPath(client: Client): string {
	switch (client) {
		case "vscode":
			return path.join(process.cwd(), ".vscode", "mcp.json");
		case "claude": {
			const platform = process.platform;
			if (platform === "win32") {
				return path.join(process.env.APPDATA || homedir(), "Claude", "claude_desktop_config.json");
			} else if (platform === "darwin") {
				return path.join(homedir(), "Library", "Application Support", "Claude", "claude_desktop_config.json");
			} else {
				return path.join(homedir(), ".config", "Claude", "claude_desktop_config.json");
			}
		}
	}
}

function readJson<T>(filePath: string, fallback: T): T {
	try {
		return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
	} catch {
		return fallback;
	}
}

function writeJson(filePath: string, data: unknown): void {
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function configureVsCode(entry: McpServerEntry): void {
	const configPath = getConfigPath("vscode");
	const config = readJson<VsCodeMcpConfig>(configPath, { servers: {} });
	config.servers = config.servers || {};
	if (config.servers[MCP_SERVER_KEY]) {
		Util.log( ` Ignite UI MCP server already configured in ${configPath}`);
		return;
	}
	config.servers[MCP_SERVER_KEY] = entry;
	writeJson(configPath, config);
	Util.log(Util.greenCheck() + ` MCP server configured in ${configPath}`);
}

function configureClaude(entry: McpServerEntry): void {
	const configPath = getConfigPath("claude");
	const config = readJson<ClaudeDesktopConfig>(configPath, { mcpServers: {} });
	config.mcpServers = config.mcpServers || {};
	if (config.mcpServers[MCP_SERVER_KEY]) {
		Util.log(` Ignite UI MCP server already configured in ${configPath}`);
		return;
	}
	config.mcpServers[MCP_SERVER_KEY] = entry;
	writeJson(configPath, config);
	Util.log(Util.greenCheck() + ` MCP server configured in ${configPath}`);
}

const command: CommandModule = {
	command: "mcp",
	describe: "Configure the Ignite UI MCP server for an AI client",
	builder: (yargs) => {
		return yargs
			.option("client", {
				alias: "c",
				describe: "The AI client to configure (vscode, claude)",
				type: "string",
				choices: ["vscode", "claude"],
				default: "vscode"
			})
			.usage(""); // do not show any usage instructions before the commands list
	},
	async handler(argv: ArgumentsCamelCase) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "MCP"
		});

		const client = argv.client as Client;
		const entry = resolveMcpEntry();

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig mcp",
			ea: `client: ${client}`
		});

		switch (client) {
			case "vscode":
				configureVsCode(entry);
				break;
			case "claude":
				configureClaude(entry);
				break;
		}
	}
};

export default command;
