import * as jsonc from "jsonc-parser";

export interface McpServerEntry {
	command: string;
	args: string[];
}

export const IGNITEUI_MCP_SERVERS: Record<string, McpServerEntry> = {
	"igniteui-cli": {
		command: "npx",
		args: ["-y", "igniteui-cli@next", "mcp"]
	},
	"igniteui-theming": {
		command: "npx",
		args: ["-y", "igniteui-theming", "igniteui-theming-mcp"]
	}
};

/**
 * Adds MCP servers to mcp.json content using jsonc-parser to preserve comments.
 * @param existingContent existing file content, or undefined/empty if file doesn't exist
 * @param servers servers to add (skips keys already present)
 * @returns the resulting text and whether any changes were made
 */
export function addMcpServers(
	existingContent: string | undefined,
	servers: Record<string, McpServerEntry>
): { text: string; modified: boolean } {
	if (!existingContent) {
		return {
			text: JSON.stringify({ servers: { ...servers } }, null, 2),
			modified: Object.keys(servers).length > 0
		};
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

	return { text, modified };
}
