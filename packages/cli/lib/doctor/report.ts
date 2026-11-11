import { CheckResult, CheckStatus } from "./types";

const COLORS: Record<CheckStatus, string> = {
	ok: "\u001b[32m",
	warn: "\u001b[33m",
	fail: "\u001b[31m",
	skip: "\u001b[2m"
};
const RESET = "\u001b[0m";

export function summarize(results: CheckResult[]): Record<CheckStatus, number> {
	const summary: Record<CheckStatus, number> = { ok: 0, warn: 0, fail: 0, skip: 0 };
	for (const result of results) {
		summary[result.status]++;
	}
	return summary;
}

export function formatText(results: CheckResult[], color: boolean): string {
	const lines: string[] = [];
	let group = "";
	for (const result of results) {
		if (result.group !== group) {
			group = result.group;
			lines.push("", group);
		}
		const label = result.status.padEnd(4);
		lines.push(`  ${color ? COLORS[result.status] + label + RESET : label}  ${result.detail}`);
		if (result.fix) {
			lines.push(`        ${result.fix}`);
		}
	}

	const summary = summarize(results);
	lines.push("", `${summary.ok} ok, ${summary.warn} warning(s), ${summary.fail} failed, ${summary.skip} skipped`);
	return lines.join("\n").trimStart();
}

export function formatJson(results: CheckResult[]): string {
	const summary = summarize(results);
	return JSON.stringify({ ok: summary.fail === 0, summary, checks: results }, null, 2);
}
