import * as jsonc from "jsonc-parser";

export interface McpServerEntry {
	command: string;
	args: string[];
}

const IGNITEUI_MCP_SERVERS: Record<string, McpServerEntry> = {
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

/**
 * Reads existing mcp.json content, merges servers, and writes back if changed.
 * @param readFile callback to read existing content (return undefined if file doesn't exist)
 * @param writeFile callback to write the resulting content
 * @param extraServers additional servers to include alongside the built-in ones
 * @returns whether the file was modified
 */
export function configureMcpFile(
	readFile: () => string | undefined,
	writeFile: (content: string) => void,
	extraServers?: Record<string, McpServerEntry>
): boolean {
	const servers = { ...extraServers, ...IGNITEUI_MCP_SERVERS };
	const existingContent = readFile();
	const { text, modified } = addMcpServers(existingContent, servers);
	if (modified) {
		writeFile(text);
	}
	return modified;
}
