import { FS_TOKEN, IFileSystem } from "../types/FileSystem";
import * as jsonc from "jsonc-parser";
import { App } from "./App";
import { AIAgentTarget } from "./ai-skills";

export interface McpServerEntry {
	command: string;
	args: string[];
}

const IGNITEUI_MCP_SERVERS: Record<string, McpServerEntry> = {
	"igniteui-cli": {
		command: "npx",
		args: ["-y", "igniteui-cli", "mcp"]
	},
	"igniteui-theming": {
		command: "npx",
		args: ["-y", "igniteui-theming", "igniteui-theming-mcp"]
	}
};

export const VS_CODE_MCP_PATH = ".vscode/mcp.json";
export const CURSOR_MCP_PATH = ".cursor/mcp.json";

/** Project-level MCP config file paths and their servers root key, keyed by AI agent target. */
export const AI_AGENT_MCP_CONFIGS: Partial<Record<AIAgentTarget, { path: string; serversKey: string }>> = {
	cursor: { path: CURSOR_MCP_PATH, serversKey: "mcpServers" }
};

/**
 * Reads a MCP config JSON file, ensures all IgniteUI MCP servers are present,
 * optionally adds additional servers. Creates the file if it doesn't exist.
 * @param mcpFilePath path to the MCP config file
 * @param additionalServers optional extra servers to include alongside the built-in ones
 * @param serversKey root key used for the servers object in the JSON (default: "servers")
 * @returns whether the file was modified
 */
export function addMcpServers(
	mcpFilePath: string,
	additionalServers?: Record<string, McpServerEntry>,
	serversKey = "servers"
): boolean {
	const fileSystem = App.container.get<IFileSystem>(FS_TOKEN);
	const servers = { ...additionalServers, ...IGNITEUI_MCP_SERVERS };

	let existingContent: string | undefined;
	try {
		existingContent = fileSystem.readFile(mcpFilePath);
	} catch {
		existingContent = undefined;
	}

	if (!existingContent) {
		if (Object.keys(servers).length === 0) {
			return false;
		}
		fileSystem.writeFile(mcpFilePath, JSON.stringify({ [serversKey]: servers }, null, 2) + "\n");
		return true;
	}

	const parsed = jsonc.parse(existingContent);
	const existing = parsed[serversKey] ?? {};
	const formattingOptions: jsonc.FormattingOptions = { tabSize: 2, insertSpaces: true };

	let text = existingContent;
	let modified = false;

	for (const [key, value] of Object.entries(servers)) {
		if (!existing[key]) {
			const edits = jsonc.modify(text, [serversKey, key], value, { formattingOptions });
			text = jsonc.applyEdits(text, edits);
			modified = true;
		}
	}

	if (modified) {
		fileSystem.writeFile(mcpFilePath, text);
	}

	return modified;
}

/**
 * Writes MCP server configuration for the selected AI agents.
 * Always writes `.vscode/mcp.json` (VS Code baseline).
 * Also writes `.cursor/mcp.json` (with `mcpServers` key) when `cursor` is in the agents list.
 * @param agents list of AI agent targets
 * @param additionalServers optional extra servers to include alongside the built-in ones
 */
export function configureMcpForAgents(
	agents: AIAgentTarget[],
	additionalServers?: Record<string, McpServerEntry>
): void {
	// VS Code is always written as the baseline
	addMcpServers(VS_CODE_MCP_PATH, additionalServers, "servers");

	// Write agent-specific config files for agents that have a project-level MCP config
	for (const agent of agents) {
		const agentConfig = AI_AGENT_MCP_CONFIGS[agent];
		if (agentConfig) {
			addMcpServers(agentConfig.path, additionalServers, agentConfig.serversKey);
		}
	}
}
