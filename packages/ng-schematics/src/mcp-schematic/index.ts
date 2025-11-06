import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { runMcpServer } from "../mcp/cli";

export function mcp(_options: any): Rule {
	return async (_tree: Tree, _context: SchematicContext) => {
		// This schematic is primarily meant to be invoked via CLI
		// The actual MCP server logic is in the cli.ts file
		await runMcpServer({ readOnly: _options.readOnly || false });
		return _tree;
	};
}
