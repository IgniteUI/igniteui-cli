import { Util } from "@igniteui/cli-core";
import { DocSearchEntry } from "./commands/types";

const HIT = />>>([\s\S]*?)<<</g;

export function formatSearchResults(results: DocSearchEntry[], term: string, framework: string): string {
	const lines = [`Found ${results.length} result${results.length === 1 ? "" : "s"} for "${term}" in the ${framework} docs:`, ""];

	results.forEach((result, index) => {
		const indent = " ".repeat(String(index + 1).length + 2);
		lines.push(`${index + 1}. ${Util.style(result.title, "bold")}  ${Util.style(result.name, "cyan")}`);
		if (result.summary?.trim()) {
			lines.push(indent + result.summary.replace(/\s+/g, " ").trim());
		}
		// an excerpt keeps the line breaks of the doc it was cut from
		const excerpt = result.excerpt?.replace(/\s+/g, " ").trim();
		if (excerpt) {
			lines.push(indent + Util.style("> ", "dim") + excerpt.replace(HIT, (_match, hit: string) => Util.style(hit, "yellow")));
		}
		lines.push("");
	});

	lines.push("Read a result:      ig doc --read <name>");
	lines.push(`Search the website: ig doc ${Util.quoteIfNeeded(term)} --open`);
	return lines.join("\n");
}

/** Drops what only an MCP client can use: the frontmatter and the `mcp:` link targets. */
export function formatDoc(text: string): string {
	return text
		.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "")
		.replace(/\[([^\]]+)\]\(mcp:[^)]*\)/g, "$1")
		.trim();
}
