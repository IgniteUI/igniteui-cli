import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { getPlatforms } from './config/platforms.js';
import { DocLoader } from './lib/doc-loader.js';
import { createGetApiReferenceHandler, createSearchApiHandler } from './tools/handlers.js';
import { getApiReferenceSchema, searchApiSchema } from './tools/schemas.js';
import { TOOL_DESCRIPTIONS } from './tools/descriptions.js';

// Initialize
const platforms = getPlatforms();
const docLoader = new DocLoader(platforms);
docLoader.load();

// Create server
const server = new McpServer({
  name: "igniteui-api-docs",
  version: "1.0.0",
});

// Register tools
server.registerTool(
  "get_api_reference",
  {
    description: TOOL_DESCRIPTIONS.get_api_reference,
    inputSchema: getApiReferenceSchema,
  },
  createGetApiReferenceHandler(docLoader)
);

server.registerTool(
  "search_api",
  {
    description: TOOL_DESCRIPTIONS.search_api,
    inputSchema: searchApiSchema,
  },
  createSearchApiHandler(docLoader)
);

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  
  const stats = docLoader.getStats();
  console.error("✅ IgniteUI API MCP server running");
  console.error("📊 Statistics:", JSON.stringify(stats, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});