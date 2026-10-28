const SECTION_START = "<!-- igniteui-cli:supply-chain:start -->";
const SECTION_END = "<!-- igniteui-cli:supply-chain:end -->";
const SEVERITIES = ["critical", "high", "moderate", "low", "info"];
const MAX_DIAGNOSTIC_LINES = 20;
const MAX_LISTED_PACKAGES = 25;
const MAX_AUDIT_REASON_LENGTH = 500;

export interface AuditPackage {
	name: string;
	severity: string;
	direct: boolean;
	fixAvailable: boolean;
}

export type AuditResult =
	| { available: true, counts: Record<string, number>, packages: AuditPackage[] }
	| { available: false, reason: string };

export interface NpmTreeDiagnostics {
	status: number;
	problems: string[];
	stderr: string;
}

export interface PackageEvidence {
	name: string;
	version: string;
	audit: AuditResult;
}

/**
 * Strip terminal noise, npm log prefixes and absolute paths from one diagnostic line.
 * Nothing is HTML-escaped: the result is rendered inside a fenced code block.
 */
function sanitize(line: string): string {
	return String(line)
		.replace(/\u001b\[[0-9;]*m/g, "")
		.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
		.replace(/^npm (?:error|warn|notice)\s+/i, "")
		.replace(/\b(?:https?|file):\/\/[^\s"'<>]+/gi, "[URL]")
		.replace(/(^|\s)["']?(?:[A-Za-z]:)?[\\/].*$/g, "$1")
		.replace(/```/g, "'''")
		.trim();
}

function markdownText(value: string, maxLength = Number.POSITIVE_INFINITY): string {
	return sanitize(value)
		.replace(/\s+/g, " ")
		.slice(0, maxLength)
		.replace(/([\\`*_[\]<>|])/g, "\\$1");
}

/** Deduplicated, bounded diagnostic lines. */
function diagnosticLines(npmTree: NpmTreeDiagnostics): string[] {
	return [...npmTree.problems, ...npmTree.stderr.split(/\r?\n/)]
		.map(sanitize)
		.filter(line => line && !/complete log of this run/i.test(line))
		.filter((line, index, lines) => lines.indexOf(line) === index)
		.slice(0, MAX_DIAGNOSTIC_LINES);
}

function vulnerabilityLines(audit: AuditResult): string[] {
	if (audit.available === false) {
		const reason = markdownText(audit.reason, MAX_AUDIT_REASON_LENGTH) || "npm audit returned no diagnostic";
		return [`The vulnerability scan could not be completed: ${reason}.`];
	}

	if (audit.counts.total === 0) {
		return ["`npm audit` reported no known vulnerabilities in the delivered dependencies."];
	}

	const packages = [...audit.packages]
		.sort((left, right) =>
			SEVERITIES.indexOf(left.severity) - SEVERITIES.indexOf(right.severity) ||
			left.name.localeCompare(right.name))
		.slice(0, MAX_LISTED_PACKAGES);

	return [
		`\`npm audit\` reported ${audit.counts.total} known vulnerabilities in the delivered dependencies.`,
		"",
		"| Severity | Count |",
		"|---|---|",
		...SEVERITIES.filter(severity => audit.counts[severity] > 0).map(
			severity => `| ${severity} | ${audit.counts[severity]} |`
		),
		"",
		"| Package | Severity | Direct | Fix available |",
		"|---|---|---|---|",
		...packages.map(entry =>
			`| ${markdownText(entry.name)} | ${markdownText(entry.severity)} | ${entry.direct ? "yes" : "no"} | ${entry.fixAvailable ? "yes" : "no"} |`
		)
	];
}

/**
 * Render the supply-chain section published to the SBOM archive and the GitHub release notes.
 */
export function formatSupplyChainNotes(evidence: { packages: PackageEvidence[], npmTree: NpmTreeDiagnostics }): string {
	const diagnostics = diagnosticLines(evidence.npmTree);
	const lines = ["## Supply chain", ""];

	for (const entry of evidence.packages) {
		lines.push(
			`### \`${markdownText(entry.name)}\` ${markdownText(entry.version)}`,
			"",
			...vulnerabilityLines(entry.audit),
			""
		);
	}

	lines.push(
		"<details>",
		"<summary>Build-environment SBOM diagnostics (best-effort)</summary>",
		"",
		"The build-environment CycloneDX SBOM is a best-effort inventory of the repository toolchain. npm dependency-tree errors are tolerated there and do not affect the delivered-package SBOMs.",
		""
	);

	if (diagnostics.length === 0) {
		lines.push("`npm ls` reported no dependency-tree problems.");
	} else {
		lines.push(`\`npm ls\` exited with status ${evidence.npmTree.status}.`, "", "```text", ...diagnostics, "```");
	}

	lines.push("", "</details>");

	return `${lines.join("\n")}\n`;
}

/**
 * Add or replace the generated section while preserving authored GitHub release notes.
 */
export function mergeSupplyChainNotes(releaseNotes: string, notes: string): string {
	const section = `${SECTION_START}\n${notes.trim()}\n${SECTION_END}`;
	const start = releaseNotes.indexOf(SECTION_START);
	const end = releaseNotes.indexOf(SECTION_END, start);

	if (start >= 0 && end >= start) {
		return `${releaseNotes.slice(0, start)}${section}${releaseNotes.slice(end + SECTION_END.length)}`;
	}

	const authored = releaseNotes.trimEnd();
	return authored ? `${authored}\n\n${section}\n` : `${section}\n`;
}
