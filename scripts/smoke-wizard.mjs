#!/usr/bin/env node
// Drives the interactive `ig new` wizard of the locally built CLI over a pipe, the way a user would:
// arrow keys and Enter on select prompts, typed text on input prompts.
// Scenarios and answers come from spec/helpers/wizard-matrix.ts (compiled by `npm run build`).
//
//   node scripts/smoke-wizard.mjs list <framework> <each|pairs|all>
//   node scripts/smoke-wizard.mjs run <framework> <scenarioId> <workDir> <projectName>
//
// Without a TTY the CLI skips the AI config prompts and "Run the app now", so they are not expected here;
// spec/acceptance/wizard-spec.ts covers them.
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CLI_ENTRY = path.join(ROOT, "packages/cli/bin/execute.js");
const require = createRequire(import.meta.url);

const QUIET_MS = 250;
const STEP_TIMEOUT_MS = 15 * 60 * 1000;
const MAX_ARROW_STEPS = 60;
const DOWN = "\x1b[B";

function loadScenarios(framework) {
	const { App } = require(path.join(ROOT, "packages/core"));
	const { TemplateManager } = require(path.join(ROOT, "packages/cli/lib/TemplateManager"));
	const matrix = require(path.join(ROOT, "spec/helpers/wizard-matrix.js"));
	App.initialize();
	const all = matrix.buildWizardScenarios(new TemplateManager());
	return { matrix, scenarios: all.filter(s => s.framework === framework) };
}

// Colors are dropped; cursor moves and line erases become line breaks so each redraw starts a new line.
function toText(raw) {
	return raw
		.replace(/\x1b\[[0-9;?]*m/g, "")
		.replace(/\x1b\[[0-9;?]*[A-Za-z]/g, "\n")
		.replace(/\r\n?/g, "\n");
}

function normalizeLabel(label) {
	return label.replace(/\.{2,}.*$/, "").trim();
}

/** The newest prompt line after `from`: { status: "?" | "✔", line, frame } or undefined. */
function lastPrompt(text, from) {
	const lines = text.slice(from).split("\n");
	for (let i = lines.length - 1; i >= 0; i--) {
		const m = /^\s*([?✔]) (.+)$/.exec(lines[i]);
		if (m) {
			return { status: m[1], line: m[2], frame: lines.slice(i + 1) };
		}
	}
	return undefined;
}

/** Text offset just after the first "✔ <message>" line at or after `from`, or -1. */
function acceptedAt(text, from, message) {
	let offset = from;
	for (const line of text.slice(from).split("\n")) {
		offset += line.length + 1;
		if (line.trimStart().startsWith(`✔ ${message}`)) {
			return offset;
		}
	}
	return -1;
}

function activeChoice(frame) {
	for (let i = frame.length - 1; i >= 0; i--) {
		const m = /^\s*❯\s*(.+)$/.exec(frame[i]);
		if (m) {
			return normalizeLabel(m[1]);
		}
	}
	return undefined;
}

async function runScenario(framework, scenarioId, workDir, projectName) {
	const { matrix, scenarios } = loadScenarios(framework);
	const s = scenarios.find(x => x.id === scenarioId);
	if (!s) {
		throw new Error(`unknown scenario ${framework}/${scenarioId}`);
	}
	const expected = matrix.expectedPrompts(s, false);
	const known = [...new Set([...Object.values(matrix.PROMPTS), ...s.extra.map(e => e.message)])]
		.sort((a, b) => b.length - a.length);

	const child = spawn(process.execPath, [CLI_ENTRY, "new"], {
		cwd: workDir,
		stdio: ["pipe", "pipe", "pipe"],
		env: { ...process.env, FORCE_COLOR: "0", NO_COLOR: "1" }
	});
	let raw = "";
	let lastData = Date.now();
	let exitCode;
	const onData = d => {
		raw += d.toString();
		lastData = Date.now();
		process.stdout.write(d);
	};
	child.stdout.on("data", onData);
	child.stderr.on("data", onData);
	const exited = new Promise(resolve => child.on("exit", code => { exitCode = code; resolve(); }));

	const sleep = ms => new Promise(r => setTimeout(r, ms));
	const settle = async (predicate, what) => {
		const start = Date.now();
		for (;;) {
			if (exitCode !== undefined) { return false; }
			if (Date.now() - lastData >= QUIET_MS && predicate()) { return true; }
			if (Date.now() - start > STEP_TIMEOUT_MS) { throw new Error(`timed out waiting for ${what}`); }
			await sleep(50);
		}
	};
	const send = keys => child.stdin.write(keys);

	const asked = [];
	let from = 0;
	try {
		for (;;) {
			const pending = () => lastPrompt(toText(raw), from)?.status === "?";
			if (!await settle(pending, "the next prompt")) {
				break;
			}
			const prompt = lastPrompt(toText(raw), from);
			const message = known.find(m => prompt.line.startsWith(m));
			if (!message) {
				throw new Error(`unexpected prompt: "${prompt.line}"`);
			}
			asked.push(message);
			const answer = matrix.answerFor(s, message, projectName);
			if (!answer) {
				throw new Error(`no answer for prompt: "${message}"`);
			}

			const isSelect = prompt.frame.some(l => /^\s*❯/.test(l));
			if (typeof answer.value === "boolean") {
				send(answer.value ? "y\r" : "n\r");
			} else if (isSelect) {
				const target = normalizeLabel(answer.label ?? answer.value);
				for (let step = 0; ; step++) {
					const current = activeChoice(lastPrompt(toText(raw), from).frame);
					if (current === target) {
						break;
					}
					if (step >= MAX_ARROW_STEPS) {
						throw new Error(`"${target}" not reachable in "${message}" (stuck on "${current}")`);
					}
					const before = raw.length;
					send(DOWN);
					await settle(() => raw.length > before, `a redraw in "${message}"`);
				}
				send("\r");
			} else {
				send(`${answer.value}\r`);
			}
			const sentAt = toText(raw).length;
			const accepted = () => acceptedAt(toText(raw), sentAt, message);
			const rejected = () => {
				const p = lastPrompt(toText(raw), sentAt);
				return p?.status === "?" && p.line.startsWith(message) && p.frame.some(l => /^\s*>/.test(l));
			};
			const settled = await settle(() => accepted() >= 0 || rejected(), `"${message}" to be accepted`);
			if (settled && accepted() < 0) {
				throw new Error(`answer "${answer.value}" was rejected for "${message}": ` +
					lastPrompt(toText(raw), sentAt).frame.join(" ").trim());
			}
			// the next prompt can arrive in the same chunk, so continue right after the accepted line
			from = accepted() >= 0 ? accepted() : toText(raw).length;
		}
		await exited;
	} catch (e) {
		child.kill();
		await exited;
		console.error(`\n[smoke-wizard] ${e.message}`);
		console.error(`[smoke-wizard] asked so far: ${JSON.stringify(asked)}`);
		return 1;
	}

	const problems = [];
	if (exitCode !== 0) {
		problems.push(`ig exited with ${exitCode}`);
	}
	if (JSON.stringify(asked) !== JSON.stringify(expected)) {
		problems.push(`prompts differ\n  expected: ${JSON.stringify(expected)}\n  asked:    ${JSON.stringify(asked)}`);
	}
	if (!/Next Steps/.test(toText(raw))) {
		problems.push("no \"Next Steps\" in the output");
	}
	for (const p of problems) {
		console.error(`\n[smoke-wizard] ${p}`);
	}
	return problems.length ? 1 : 0;
}

const [cmd, ...args] = process.argv.slice(2);
if (cmd === "list" && args.length === 2) {
	const { matrix, scenarios } = loadScenarios(args[0]);
	if (!["each", "pairs", "all"].includes(args[1])) {
		console.error(`coverage must be each, pairs or all, not "${args[1]}"`);
		process.exit(2);
	}
	for (const s of matrix.sampleScenarios(scenarios, args[1])) {
		console.log(s.id);
	}
} else if (cmd === "run" && args.length === 4) {
	process.exitCode = await runScenario(...args);
} else {
	console.error("usage: smoke-wizard.mjs list <framework> <each|pairs|all>\n" +
		"       smoke-wizard.mjs run <framework> <scenarioId> <workDir> <projectName>");
	process.exit(2);
}
