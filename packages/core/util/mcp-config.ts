import { FS_TOKEN, IFileSystem } from "../types/FileSystem";
import * as jsonc from "jsonc-parser";
import { App } from "./App";

export interface McpServerEntry {
	command: string;
	args: string[];
}

export const AI_ASSISTANT_CHOICES = ["vscode", "claude-code", "cursor", "gemini", "junie"] as const;
export type AiCodingAssistant = typeof AI_ASSISTANT_CHOICES[number];

interface AssistantMcpConfig {
	mcpFilePath: string;
	rootKey: "servers" | "mcpServers";
}

export const AI_ASSISTANT_LABELS: Record<AiCodingAssistant, string> = {
	"vscode":      "VS Code (GitHub Copilot)",
	"claude-code": "Claude Code",
	"cursor":      "Cursor",
	"gemini":      "Gemini",
	"junie":       "JetBrains Junie",
};

export const AI_ASSISTANT_MCP_CONFIGS: Record<AiCodingAssistant, AssistantMcpConfig> = {
	"vscode":      { mcpFilePath: ".vscode/mcp.json",      rootKey: "servers" },
	"claude-code": { mcpFilePath: ".mcp.json",              rootKey: "mcpServers" },
	"cursor":      { mcpFilePath: ".cursor/mcp.json",       rootKey: "mcpServers" },
	"gemini":      { mcpFilePath: ".gemini/settings.json",  rootKey: "mcpServers" },
	"junie":       { mcpFilePath: ".junie/mcp/mcp.json",    rootKey: "mcpServers" },
};

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

/**
 * Reads the assistant-specific MCP config file, ensures all IgniteUI MCP servers are present,
 * optionally adds additional servers. Creates the file if it doesn't exist.
 * @param assistant target AI coding assistant (defaults to "vscode")
 * @param additionalServers optional extra servers to include alongside the built-in ones
 * @returns whether the file was modified
 */
export function addMcpServers(
	assistant: AiCodingAssistant = "vscode",
	additionalServers?: Record<string, McpServerEntry>
): boolean {
	const { mcpFilePath, rootKey } = AI_ASSISTANT_MCP_CONFIGS[assistant];
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
		fileSystem.writeFile(mcpFilePath, JSON.stringify({ [rootKey]: servers }, null, 2) + "\n");
		return true;
	}

	const parsed = jsonc.parse(existingContent);
	const existing = parsed[rootKey] ?? {};
	const formattingOptions: jsonc.FormattingOptions = { tabSize: 2, insertSpaces: true };

	let text = existingContent;
	let modified = false;

	for (const [key, value] of Object.entries(servers)) {
		if (!existing[key]) {
			const edits = jsonc.modify(text, [rootKey, key], value, { formattingOptions });
			text = jsonc.applyEdits(text, edits);
			modified = true;
		}
	}

	if (modified) {
		fileSystem.writeFile(mcpFilePath, text);
	}

	return modified;
}

