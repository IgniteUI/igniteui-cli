import { Util } from "@igniteui/cli-core";

export interface DocSearchResult {
	title: string;
	name: string;
	summary?: string;
	excerpt?: string;
}

const RESULT_HEADER = /^- \*\*(.+)\*\* \(`([^`]+)`\)$/;
const HIT = />>>([\s\S]*?)<<</g;

const STYLES = {
	bold: ["\u001b[1m", "\u001b[22m"],
	dim: ["\u001b[2m", "\u001b[22m"],
	cyan: ["\u001b[36m", "\u001b[39m"],
	yellow: ["\u001b[33m", "\u001b[39m"]
};

function paint(text: string, style: keyof typeof STYLES, color: boolean): string {
	return color ? STYLES[style][0] + text + STYLES[style][1] : text;
}

/** Reads the result list out of the markdown the docs provider returns for a search. */
export function parseSearchResults(markdown: string): DocSearchResult[] {
	const results: DocSearchResult[] = [];
	let current: DocSearchResult | undefined;

	for (const line of markdown.split(/\r?\n/)) {
		const header = RESULT_HEADER.exec(line);
		if (header) {
			current = { title: header[1], name: header[2] };
			results.push(current);
		} else if (!current) {
			continue;
		} else if (current.excerpt !== undefined) {
			// an excerpt keeps the line breaks of the doc it was cut from
			current.excerpt += " " + line;
		} else if (line.startsWith("  > ")) {
			current.excerpt = line.slice(4);
		} else if (line.trim()) {
			current.summary = line.trim();
		}
	}

	for (const result of results) {
		result.excerpt = result.excerpt?.replace(/\s+/g, " ").trim() || undefined;
	}
	return results;
}

export function formatSearchResults(
	results: DocSearchResult[], term: string, framework: string, color: boolean
): string {
	const lines = [`Found ${results.length} result${results.length === 1 ? "" : "s"} for "${term}" in the ${framework} docs:`, ""];

	results.forEach((result, index) => {
		const indent = " ".repeat(String(index + 1).length + 2);
		lines.push(`${index + 1}. ${paint(result.title, "bold", color)}  ${paint(result.name, "cyan", color)}`);
		if (result.summary) {
			lines.push(indent + result.summary);
		}
		if (result.excerpt) {
			const excerpt = result.excerpt.replace(HIT, (_match, hit: string) => paint(hit, "yellow", color));
			lines.push(indent + paint("> ", "dim", color) + excerpt);
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
