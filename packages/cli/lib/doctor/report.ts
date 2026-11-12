import { Util } from "@igniteui/cli-core";
import { CheckResult, CheckStatus } from "./types";

const STYLES = { ok: "green", warn: "yellow", fail: "red", skip: "dim" } as const;

export function summarize(results: CheckResult[]): Record<CheckStatus, number> {
	const summary: Record<CheckStatus, number> = { ok: 0, warn: 0, fail: 0, skip: 0 };
	for (const result of results) {
		summary[result.status]++;
	}
	return summary;
}

export function formatText(results: CheckResult[]): string {
	const lines: string[] = [];
	let group = "";
	for (const result of results) {
		if (result.group !== group) {
			group = result.group;
			lines.push("", group);
		}
		lines.push(`  ${Util.style(result.status.padEnd(4), STYLES[result.status])}  ${result.detail}`);
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
