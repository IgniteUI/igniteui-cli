import { FS_TOKEN, IFileSystem } from "../types/FileSystem";
import * as jsonc from "jsonc-parser";
import { App } from "./App";

export interface McpServerEntry {
	command: string;
	args: string[];
}

export const AI_ASSISTANT_CHOICES = ["generic", "vscode", "cursor", "gemini", "junie"] as const;
export type AiCodingAssistant = typeof AI_ASSISTANT_CHOICES[number];

interface AssistantMcpConfig {
	mcpFilePath: string;
	rootKey: "servers" | "mcpServers";
}

export const AI_ASSISTANT_LABELS: Record<AiCodingAssistant, string> = {
	"generic":	".mcp.json (generic for Claude Code, GitHub Copilot, and other assistants)",
	"vscode":	"VS Code",
	"cursor":	"Cursor",
	"gemini":	"Gemini",
	"junie":	"JetBrains Junie",
};

export const AI_ASSISTANT_MCP_CONFIGS: Record<AiCodingAssistant, AssistantMcpConfig> = {
	"generic":	{ mcpFilePath: ".mcp.json",              rootKey: "mcpServers" },
	"vscode":	{ mcpFilePath: ".vscode/mcp.json",      rootKey: "servers" },
	"cursor":	{ mcpFilePath: ".cursor/mcp.json",       rootKey: "mcpServers" },
	"gemini":	{ mcpFilePath: ".gemini/settings.json",  rootKey: "mcpServers" },
	"junie":	{ mcpFilePath: ".junie/mcp/mcp.json",    rootKey: "mcpServers" },
};

// The key stays "igniteui-cli" so re-running ai-config updates configs written by earlier versions
const IGNITEUI_DOCS_SERVER_KEY = "igniteui-cli";

const IGNITEUI_MCP_SERVERS: Record<string, McpServerEntry> = {
	[IGNITEUI_DOCS_SERVER_KEY]: {
		command: "npx",
		args: ["-y", "@igniteui/mcp-server"]
	},
	"igniteui-theming": {
		command: "npx",
		args: ["-y", "igniteui-theming", "igniteui-theming-mcp"]
	}
};

/**
 * Docs server entry for projects that list `igniteui-cli`: npx runs the project's own CLI copy, which starts
 * its bundled server. Starting `@igniteui/mcp-server` directly fails there under pnpm, because npx finds the
 * server as a transitive dependency but pnpm doesn't link its `igniteui-mcp` bin into `node_modules/.bin`.
 */
const IGNITEUI_CLI_DOCS_SERVER: McpServerEntry = {
	command: "npx",
	args: ["-y", "igniteui-cli", "mcp"]
};

function projectListsIgniteUICli(fileSystem: IFileSystem): boolean {
	if (!fileSystem.fileExists("./package.json")) {
		return false;
	}
	try {
		const packageJson = JSON.parse(fileSystem.readFile("./package.json"));
		return !!(packageJson.dependencies?.["igniteui-cli"] || packageJson.devDependencies?.["igniteui-cli"]);
	} catch {
		return false;
	}
}

function getIgniteUIMcpServers(fileSystem: IFileSystem): Record<string, McpServerEntry> {
	if (projectListsIgniteUICli(fileSystem)) {
		return { ...IGNITEUI_MCP_SERVERS, [IGNITEUI_DOCS_SERVER_KEY]: IGNITEUI_CLI_DOCS_SERVER };
	}
	return IGNITEUI_MCP_SERVERS;
}

export interface McpConfigStatus {
	mcpFilePath: string;
	/** Ignite UI servers the file doesn't list. */
	missingServers: string[];
}

/** Reports the Ignite UI servers of every assistant MCP config file found in the project. */
export function getMcpConfigStatus(): McpConfigStatus[] {
	const fileSystem = App.container.get<IFileSystem>(FS_TOKEN);
	const result: McpConfigStatus[] = [];
	for (const { mcpFilePath, rootKey } of Object.values(AI_ASSISTANT_MCP_CONFIGS)) {
		if (!fileSystem.fileExists(mcpFilePath)) {
			continue;
		}
		let servers: Record<string, unknown> = {};
		try {
			servers = jsonc.parse(fileSystem.readFile(mcpFilePath))?.[rootKey] ?? {};
		} catch { /* an unreadable file lists no servers */ }
		result.push({
			mcpFilePath,
			missingServers: Object.keys(IGNITEUI_MCP_SERVERS).filter(key => !servers[key])
		});
	}
	return result;
}

type Update = [path: jsonc.JSONPath, value: unknown, currentValue: unknown];

/**
 * Reads the assistant-specific MCP config file, ensures all IgniteUI MCP servers are present,
 * optionally adds additional servers. Creates the file if it doesn't exist.
 * @param assistant target AI coding assistant (defaults to "vscode")
 * @param additionalServers optional extra servers to include alongside the built-in ones
 * @returns whether the file was modified
 */
export function addMcpServers(
	assistant: AiCodingAssistant,
	additionalServers?: Record<string, McpServerEntry>
): boolean {
	const { mcpFilePath, rootKey } = AI_ASSISTANT_MCP_CONFIGS[assistant];
	const fileSystem = App.container.get<IFileSystem>(FS_TOKEN);
	const servers = { ...additionalServers, ...getIgniteUIMcpServers(fileSystem) };

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
		const current = existing[key];
		// Update only the fields we write, so user-added ones (env, type, ...) survive a re-run
		const updates: Update[] = current && typeof current === "object" && !Array.isArray(current)
			? Object.entries(value).map(([field, fieldValue]): Update => [[rootKey, key, field], fieldValue, current[field]])
			: [[[rootKey, key], value, current]];
		for (const [path, update, currentValue] of updates) {
			if (JSON.stringify(update) === JSON.stringify(currentValue)) {
				continue;
			}
			const edits = jsonc.modify(text, path, update, { formattingOptions });
			const newText = jsonc.applyEdits(text, edits);
			if (newText !== text) {
				text = newText;
				modified = true;
			}
		}
	}

	if (modified) {
		fileSystem.writeFile(mcpFilePath, text);
	}

	return modified;
}
