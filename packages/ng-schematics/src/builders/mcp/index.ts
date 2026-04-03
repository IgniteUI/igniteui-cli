import * as fs from "fs";
import * as path from "path";
import { spawnSync } from "child_process";
import { createBuilder, BuilderContext, BuilderOutput } from "@angular-devkit/architect";
import { McpOptions } from "../../mcp/schema";

export default createBuilder<McpOptions>((options: McpOptions, context: BuilderContext): BuilderOutput => {
	let mcpEntry: string;
	try {
		const mcpPkgJson = require.resolve("@igniteui/mcp-server/package.json");
		mcpEntry = path.resolve(path.dirname(mcpPkgJson), "dist", "index.js");
	} catch {
		context.logger.error(
			"MCP server package not found. Install it first:\n" +
			"  yarn install\n"
		);
		return { success: false };
	}

	if (!fs.existsSync(mcpEntry)) {
		context.logger.error(
			"MCP server not built. Build it first:\n" +
			"  npm run build:mcp\n"
		);
		return { success: false };
	}

	const args: string[] = [];
	if (options.remote) {
		args.push("--remote", options.remote);
	}
	if (options.debug) {
		args.push("--debug");
	}

	spawnSync(process.execPath, [mcpEntry, ...args], { stdio: "inherit" });
	return { success: true };
});
