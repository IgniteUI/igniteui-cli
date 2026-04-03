import * as fs from "fs";
import * as path from "path";
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { Util } from "@igniteui/cli-core";
import { defer } from "rxjs";
import { McpOptions } from "./schema";

export default function(options: McpOptions): Rule {
	return (_tree: Tree, _context: SchematicContext) => {
		return defer(async () => {
			let mcpEntry: string;
			try {
				const mcpPkgJson = require.resolve("@igniteui/mcp-server/package.json");
				mcpEntry = path.resolve(path.dirname(mcpPkgJson), "dist", "index.js");
			} catch {
				_context.logger.error(
					"MCP server package not found. Install it first:\n" +
					"  yarn install\n"
				);
				return _tree;
			}

			if (!fs.existsSync(mcpEntry)) {
				_context.logger.error(
					"MCP server not built. Build it first:\n" +
					"  npm run build:mcp\n"
				);
				return _tree;
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
			return _tree;
		});
	};
}
