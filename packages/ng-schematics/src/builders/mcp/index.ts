import * as fs from "fs";
import * as path from "path";
import { createBuilder, BuilderContext, BuilderOutput } from "@angular-devkit/architect";
import { Util } from "@igniteui/cli-core";
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

	Util.execSync(
		`node "${mcpEntry}" ${args.join(" ")}`,
		{ stdio: "inherit", killSignal: "SIGINT" }
	);
	return { success: true };
});
