import { cpSync, mkdirSync, existsSync, writeFileSync } from "fs";
import { resolve, join, extname } from "path";

const mcpRoot = resolve(__dirname, "..", "packages", "igniteui-mcp", "igniteui-doc-mcp");
const dest = resolve(__dirname, "..", "packages", "cli", "mcp");

// Copy compiled server (dist/) — only .js, .d.ts, and .db files
const distSrc = join(mcpRoot, "dist");
const distDest = join(dest, "dist");

if (!existsSync(distSrc)) {
	console.error(`MCP dist/ not found at ${distSrc}. Build the MCP server first:`);
	console.error("  cd packages/igniteui-mcp/igniteui-doc-mcp && npm run build");
	process.exit(1);
}

mkdirSync(distDest, { recursive: true });
cpSync(distSrc, distDest, {
	recursive: true,
	filter: (source) => {
		// Exclude intermediate processing artifacts
		if (source.includes("docs_processing") ||
			source.includes("docs_prepeared") ||
			source.includes("docs_final") ||
			source.includes("diff-manifest")) {
			return false;
		}
		// Allow directories (needed for recursive copy)
		const ext = extname(source);
		if (!ext) return true;
		// Only include .js, .d.ts, and .db files
		return source.endsWith(".d.ts") || ext === ".js" || ext === ".db";
	}
});
console.log("  Copied dist/ (compiled MCP server + SQLite DB)");

// Ensure ESM module resolution works inside the CJS CLI package
writeFileSync(join(distDest, "package.json"), JSON.stringify({ type: "module" }, null, 2) + "\n");
console.log("  Created dist/package.json (ESM marker)");

// Copy API documentation (docs/) for get_api_reference and search_api tools
const docsToCopy = [
	{ src: "docs/angular/api", label: "Angular API docs" },
	{ src: "docs/react", label: "React API docs" },
	{ src: "docs/webcomponents/api", label: "Web Components API docs" },
];

for (const doc of docsToCopy) {
	const docSrc = join(mcpRoot, doc.src);
	const docDest = join(dest, doc.src);
	if (existsSync(docSrc)) {
		mkdirSync(docDest, { recursive: true });
		cpSync(docSrc, docDest, { recursive: true });
		console.log(`  Copied ${doc.src} (${doc.label})`);
	} else {
		console.warn(`  ⚠ Skipped ${doc.src} — not found (${doc.label})`);
	}
}

console.log("\nBundled MCP server into packages/cli/mcp/");
