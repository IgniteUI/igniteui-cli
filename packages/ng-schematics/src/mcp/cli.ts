import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createMcpServer } from "./mcp-server";

const INTERACTIVE_MESSAGE = `
To start using the Ignite UI for Angular Schematics MCP Server, add this configuration to your host:

{
  "mcpServers": {
    "igniteui-angular-schematics": {
      "command": "npx",
      "args": ["-y", "@igniteui/angular-schematics-mcp"]
    }
  }
}

Exact configuration may differ depending on the host.

For more information, visit: https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/cli/getting-started-with-angular-schematics
`;

function isTTY(): boolean {
	return Boolean(process.stdout.isTTY);
}

export async function runMcpServer(options: {
	readOnly?: boolean;
}): Promise<void> {
	if (isTTY()) {
		console.log(INTERACTIVE_MESSAGE);
		return;
	}

	const server = await createMcpServer({
		readOnly: options.readOnly,
	});

	const transport = new StdioServerTransport();
	await server.connect(transport);
}

// If this file is run directly
if (require.main === module) {
	runMcpServer({ readOnly: false }).catch((error) => {
		console.error("Error running MCP server:", error);
		process.exit(1);
	});
}
