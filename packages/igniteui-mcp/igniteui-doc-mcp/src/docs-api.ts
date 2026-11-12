/**
 * Programmatic access to the bundled docs database, exposed as `@igniteui/mcp-server/docs`.
 * Importing this entry must not start the MCP server.
 */
export { LocalDocsProvider } from "./providers/LocalDocsProvider.js";
export { resolveDoc, sanitizeSearchDocsQuery } from "./tools/doc-tools.js";
