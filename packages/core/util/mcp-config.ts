import { FS_TOKEN, IFileSystem } from "../types/FileSystem";
import * as jsonc from "jsonc-parser";
import { App } from "./App";

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

/**
 * Reads .vscode/mcp.json, ensures all IgniteUI MCP servers are present,
 * optionally adds additional servers. Creates the file if it doesn't exist.
 * @param additionalServers optional extra servers to include alongside the built-in ones
 * @returns whether the file was modified
 */
export function addMcpServers(
	mcpFilePath: string,
	additionalServers?: Record<string, McpServerEntry>
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
		fileSystem.writeFile(mcpFilePath, JSON.stringify({ servers }, null, 2) + "\n");
		return true;
	}

	const parsed = jsonc.parse(existingContent);
	const existing = parsed.servers ?? {};
	const formattingOptions: jsonc.FormattingOptions = { tabSize: 2, insertSpaces: true };

	let text = existingContent;
	let modified = false;

	for (const [key, value] of Object.entries(servers)) {
		if (!existing[key]) {
			const edits = jsonc.modify(text, ["servers", key], value, { formattingOptions });
			text = jsonc.applyEdits(text, edits);
			modified = true;
		}
	}

	if (modified) {
		fileSystem.writeFile(mcpFilePath, text);
	}

	return modified;
}
