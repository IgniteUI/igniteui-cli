import * as jsonc from "jsonc-parser";
import * as semver from "semver";
import { FS_TOKEN, IFileSystem } from "../types";
import { App, ProjectConfig, Util } from "../util";
import {
	NPM_ANGULAR, NPM_CLI, NPM_GRID_LITE, NPM_REACT, NPM_WEBCOMPONENTS, UPGRADEABLE_PACKAGES
} from "./package-resolve";

/** A direct Ignite UI dependency of the project, as seen by `ig update`. */
export interface PackageUpdate {
	name: string;
	section: "dependencies" | "devDependencies";
	/** Spec as written in package.json */
	declared: string;
	/** Version in node_modules */
	installed?: string;
	/** Version the update is computed from */
	baseline?: string;
	skipped?: string;
	/** Newest version in `^baseline`; equals `baseline` when up to date */
	target?: string;
	/** Registry metadata of `target` */
	manifest?: PackageManifest;
	/** `latest` dist-tag outside `^baseline`; reported, never applied */
	nextMajor?: string;
	/** Spec to write to package.json; unset when nothing changes */
	newRange?: string;
	/** Unresolvable constraint between Ignite UI packages; blocks the update */
	conflict?: string;
	/** Set on conflicts: whether `--force` would override every conflict and update package.json */
	overridable?: boolean;
	/** Ranges left unmet by `--force`; reported, never blocks */
	forced?: string;
}

export interface PackageManifest {
	version: string;
	dependencies?: Record<string, string>;
	peerDependencies?: Record<string, string>;
	engines?: Record<string, string>;
	deprecated?: string;
}

/** Trial <-> licensed name of the same package */
const COUNTERPART = new Map<string, string>();
for (const trial of Object.keys(UPGRADEABLE_PACKAGES) as (keyof typeof UPGRADEABLE_PACKAGES)[]) {
	if (trial !== NPM_ANGULAR) {
		COUNTERPART.set(trial, UPGRADEABLE_PACKAGES[trial]).set(UPGRADEABLE_PACKAGES[trial], trial);
	}
}

/** Packages `ig update` may change; Angular goes through `ng update` instead. */
export const UPDATABLE_PACKAGES: ReadonlySet<string> = new Set([
	...COUNTERPART.keys(),
	NPM_REACT,
	NPM_WEBCOMPONENTS,
	NPM_GRID_LITE,
	NPM_CLI
]);

/** Exact, `^`, `~` and x-range specs; complex ranges, tags and urls have no usable baseline. */
const SIMPLE_SPEC = /^[\^~]?\d+(\.(\d+|[xX*])){0,2}(-[0-9A-Za-z.-]+)?$/;

/** Package an overrides/resolutions key targets: `parent/@scope/pkg@^1.0.0` -> `@scope/pkg` */
const OVERRIDE_TARGET = /(?:^|\/)((?:@[^/@]+\/)?[^/@]+)(?:@[^/]*)?$/;

/** @throws when `package.json` is missing or invalid */
export function getUpdateCandidates(): PackageUpdate[] {
	const fs = App.container.get<IFileSystem>(FS_TOKEN);
	if (!fs.fileExists("./package.json")) {
		throw new Error("No package.json found in the current directory.");
	}

	let pkgJson;
	try {
		pkgJson = JSON.parse(fs.readFile("./package.json"));
	} catch (err) {
		throw new Error(`Unable to parse package.json: ${(err as Error).message}`);
	}

	const overridden = new Set([...Object.keys(pkgJson.overrides ?? {}), ...Object.keys(pkgJson.resolutions ?? {})]
		.map(key => OVERRIDE_TARGET.exec(key)?.[1]));
	const candidates: PackageUpdate[] = [];

	for (const section of ["dependencies", "devDependencies"] as const) {
		const deps: Record<string, string> = pkgJson[section] ?? {};
		for (const name of Object.keys(deps).filter(dep => UPDATABLE_PACKAGES.has(dep))) {
			const declared = deps[name];
			const manifestPath = `node_modules/${name}/package.json`;
			const installed: string = fs.fileExists(manifestPath) ? JSON.parse(fs.readFile(manifestPath)).version : undefined;
			const candidate: PackageUpdate = { name, section, declared, installed };
			const range = SIMPLE_SPEC.test(declared) && semver.validRange(declared);
			const minVersion = range && semver.minVersion(range);

			if (!minVersion) {
				candidate.skipped = `unsupported spec "${declared}" (only exact, ^, ~ and x-range versions are supported)`;
			} else if (installed && semver.satisfies(installed, declared)) {
				candidate.baseline = installed;
			} else if (installed && semver.gt(installed, minVersion)) {
				candidate.skipped = `installed ${installed} is outside the declared range "${declared}"; ` +
					"update package.json or reinstall before updating";
			} else {
				if (installed) {
					Util.warn(`node_modules is out of sync with package.json for ${name} ` +
						`(installed ${installed}, declared ${declared}).`, "yellow");
				}
				candidate.baseline = minVersion.version;
			}

			if (overridden.has(name)) {
				Util.warn(`${name} is listed in package.json overrides/resolutions, which can override the updated version.`, "yellow");
			}
			candidates.push(candidate);
		}
	}

	return candidates;
}

/** @throws when the registry can't be queried */
export function getUpdatePlan({ force = false, verbose = false } = {}): PackageUpdate[] {
	const plan = getUpdateCandidates();
	for (const c of plan) {
		const baseline = c.skipped
			? `skipped: ${c.skipped}`
			: `baseline ${c.baseline} (${c.baseline === c.installed ? "installed version" : "declared minimum"})`;
		debug(verbose, `${c.name} (${c.section}): declared ${c.declared}, installed ${c.installed ?? "none"}, ${baseline}`);
	}

	const lines = new Map<PackageUpdate, PackageManifest[]>();
	for (const candidate of plan.filter(c => !c.skipped)) {
		const line = `^${candidate.baseline}`;
		const info = npmView(candidate.name, "versions dist-tags", verbose);
		if (!semver.maxSatisfying([].concat(info.versions), line)) {
			candidate.skipped = `no published version matches "${line}"`;
			continue;
		}
		const latest = info["dist-tags"]?.latest;
		if (semver.valid(latest) && semver.gtr(latest, line)) {
			candidate.nextMajor = latest;
		}
		// versions with none of the fields come back as plain strings
		const manifests: (PackageManifest | string)[] = [].concat(
			npmView(`${candidate.name}@${line}`, "version dependencies peerDependencies deprecated engines", verbose));
		lines.set(candidate, manifests
			.map(m => typeof m === "string" ? { version: m } : m)
			.sort((a, b) => semver.rcompare(a.version, b.version)));
		debug(verbose, `${candidate.name}: ${manifests.length} version(s) in "${line}", latest ${latest ?? "none"}` +
			(candidate.nextMajor ? " (newer major, not applied)" : ""));
	}

	const updates = plan.filter(c => !c.skipped);
	alignTargets(updates, lines, force);
	if (verbose) {
		for (const update of updates.filter(u => u.target)) {
			const newest = lines.get(update)![0];
			const constraints = constraintsOn(update, updates);
			const heldBack = newest.version === update.target ? [] : [
				...constraints.filter(c => semver.satisfies(update.target!, c.range) && !semver.satisfies(newest.version, c.range))
					.map(c => formatConstraints([c])),
				...updates.filter(other => other !== update).flatMap(other => requirements(newest, other.name)
					.filter(range => !lines.get(other)!.some(m => semver.satisfies(m.version, range)))
					.map(range => `${newest.version} requires ${other.name}@${range}, outside "^${other.baseline}"`))
			];
			debug(verbose, `${update.name}: target ${update.target} (newest in "^${update.baseline}": ${newest.version}), ` +
				`range ${update.declared} -> ${update.newRange ?? update.declared}` +
				(constraints.length ? `, requirements: ${formatConstraints(constraints)}` : "") +
				(heldBack.length ? `; held back by ${heldBack.join(", ")}` : ""));
		}
	}
	for (const skipped of plan.filter(c => c.skipped)) {
		for (const { range, from } of constraintsOn(skipped, updates)) {
			Util.warn(`${from} requires ${skipped.name}@${range}, which is not checked because ${skipped.name} is skipped.`, "yellow");
		}
	}
	return plan;
}

/**
 * Writes each `newRange` to package.json as a value-only edit, keeping its formatting.
 * @throws when the plan has conflicts or can't be applied as planned; nothing is written then
 */
export function applyUpdatePlan(plan: PackageUpdate[]): void {
	const conflicts = plan.filter(c => c.conflict).map(c => c.name);
	if (conflicts.length) {
		throw new Error(`Unable to update package.json, conflicting versions for: ${conflicts.join(", ")}`);
	}

	const fs = App.container.get<IFileSystem>(FS_TOKEN);
	const original = fs.readFile("./package.json");
	const pkgJson = JSON.parse(original);
	const changes = plan.filter(c => c.newRange);
	let text = original;
	for (const { name, section, declared, newRange } of changes) {
		if (pkgJson[section]?.[name] !== declared) {
			throw new Error(`package.json changed after the update plan was made (${section}.${name}). Run the update again.`);
		}
		text = jsonc.applyEdits(text, jsonc.modify(text, [section, name], newRange, {}));
	}
	// jsonc edits the first of duplicate keys, while npm reads the last
	const updated = JSON.parse(text);
	const duplicate = changes.find(c => updated[c.section][c.name] !== c.newRange);
	if (duplicate) {
		throw new Error(`package.json lists ${duplicate.name} more than once in ${duplicate.section}. ` +
			"Remove the duplicate and run the update again.");
	}
	if (text !== original) {
		fs.writeFile("./package.json", text);
	}
}

/**
 * Picks each target as the newest version in its line that satisfies the other targets' dependencies and peers,
 * repeating until stable since targets depend on each other, then sets `newRange` or `conflict`.
 */
function alignTargets(updates: PackageUpdate[], lines: Map<PackageUpdate, PackageManifest[]>, force: boolean): void {
	let changed = true;
	for (let pass = 0; changed && pass <= updates.length; pass++) {
		changed = false;
		for (const update of updates) {
			const constraints = constraintsOn(update, updates);
			const allowed = lines.get(update)!.filter(m => constraints.every(c => semver.satisfies(m.version, c.range)));
			const manifest = allowed.find(m => updates.every(other => other === update ||
				requirements(m, other.name).every(range => lines.get(other)!.some(o => semver.satisfies(o.version, range))))) ?? allowed[0];
			if (manifest?.version !== update.target) {
				update.target = manifest?.version;
				update.manifest = manifest;
				changed = true;
			}
		}
	}

	for (const update of updates) {
		const target = update.target;
		const constraints = constraintsOn(update, updates);
		// `satisfies` (unlike `subset`) tolerates invalid ranges, which then end up here as conflicts
		if (!target || !constraints.every(c => semver.satisfies(target, c.range))) {
			update.conflict = `no version in "^${update.baseline}" satisfies ${formatConstraints(constraints)}`;
			update.target = update.manifest = undefined;
		} else {
			update.newRange = rangeToWrite(update, target, constraints);
		}
	}

	if (force) {
		forceConflicts(updates, lines);
	} else if (updates.some(u => u.conflict)) {
		// --force is only suggested when it would update package.json, so try it on a copy
		const trial = updates.map(u => ({ ...u }));
		forceConflicts(trial, new Map(trial.map((t, i) => [t, lines.get(updates[i])!])));
		const overridable = !trial.some(t => t.conflict) && trial.some(t => t.newRange);
		for (const update of updates.filter(u => u.conflict)) {
			update.overridable = overridable;
		}
	}
}

/**
 * Moves each conflicted package to the newest version in its line, then records on every package the ranges that its
 * target or written range doesn't meet. Ranges that aren't valid semver can't be overridden and keep blocking.
 */
function forceConflicts(updates: PackageUpdate[], lines: Map<PackageUpdate, PackageManifest[]>): void {
	const conflicted = updates.filter(u => u.conflict);
	for (const update of conflicted) {
		update.manifest = lines.get(update)![0];
		update.target = update.manifest.version;
		update.conflict = undefined;
	}
	// chosen once every forced target is known, so the package order doesn't matter
	for (const update of conflicted) {
		const met = constraintsOn(update, updates).filter(c => semver.satisfies(update.target!, c.range));
		update.newRange = rangeToWrite(update, update.target!, met);
	}

	// collected before any package loses its target to a new conflict
	const unmet = updates.map(update => constraintsOn(update, updates).filter(c =>
		!semver.satisfies(update.target!, c.range) || !fits(update.newRange ?? update.declared, c.range)));
	updates.forEach((update, i) => {
		const invalid = unmet[i].filter(c => !semver.validRange(c.range));
		if (invalid.length) {
			update.conflict = `--force can't override ranges that aren't valid versions: ${formatConstraints(invalid)}`;
			update.target = update.manifest = update.newRange = undefined;
		} else if (unmet[i].length) {
			update.forced = formatConstraints(unmet[i]);
		}
	});
}

function rangeToWrite(update: PackageUpdate, target: string, constraints: { range: string }[]): string | undefined {
	// npm may later install any version in the written range, so the range itself must fit every constraint
	const fitsAll = (range: string) => constraints.every(c => fits(range, c.range));
	if (target === update.baseline && fitsAll(update.declared)) {
		return undefined;
	}
	return [rangeOperator(update.declared) + target, `~${target}`, target].find(fitsAll);
}

/** `semver.subset`, which without `includePrerelease` rejects even `7.5.0-rc.2` within `^7.5.0-rc.1` */
function fits(range: string, constraint: string): boolean {
	return semver.subset(range, constraint, { includePrerelease: true });
}

function formatConstraints(constraints: { range: string; from: string }[]): string {
	return constraints.map(c => `${c.range} (required by ${c.from})`).join(", ");
}

/** Ranges the other targets put on `update` */
function constraintsOn(update: PackageUpdate, updates: PackageUpdate[]): { range: string; from: string }[] {
	const constraints = [];
	for (const other of updates) {
		for (const range of requirements(other.manifest, update.name)) {
			constraints.push({ range, from: `${other.name}@${other.target}` });
		}
	}
	return constraints;
}

/** Ranges `manifest` depends on for `name`, by trial or licensed name */
function requirements(manifest: PackageManifest | undefined, name: string): string[] {
	const deps: Record<string, string> = { ...manifest?.dependencies, ...manifest?.peerDependencies };
	return Object.keys(deps).filter(dep => dep === name || COUNTERPART.get(dep) === name).map(dep => deps[dep]);
}

/** `^`, `~` or `""` (exact): the operator whose range equals `declared`, so `19.x` -> `^` and `19.6.x` -> `~` */
function rangeOperator(declared: string): string {
	const min = semver.minVersion(declared)!.version;
	return ["^", "~"].find(op => semver.validRange(op + min) === semver.validRange(declared)) ?? "";
}

/** `npm view "<spec>" <fields> --json`, with registry errors turned into actionable messages */
function npmView(spec: string, fields: string, verbose: boolean) {
	debug(verbose, `npm view "${spec}" ${fields}`);
	try {
		// quoted: the spec may hold a `^` range, which cmd.exe would otherwise treat as an escape
		return JSON.parse(Util.execSync(`npm view "${spec}" ${fields} --json`, { stdio: "pipe", encoding: "utf8" }).toString());
	} catch (err) {
		const { stdout, message } = err as Error & { stdout?: string };
		let error: { code?: string; summary?: string } = {};
		try {
			error = JSON.parse(stdout ?? "").error ?? {};
		} catch { /* npm missing or non-JSON output */ }

		const licensed = spec.startsWith("@infragistics/");
		if (licensed && error.code === "E404") {
			throw new Error(`${spec} was not found. Map the @infragistics scope to the Infragistics feed in .npmrc:\n` +
				`@infragistics:registry=${ProjectConfig.getConfig().igPackageRegistry}`);
		}
		if (licensed && /^(E401|E403|ENEEDAUTH)$/.test(error.code ?? "")) {
			throw new Error(`Not logged in to the Infragistics feed, required for ${spec}. ` +
				"Log in with your Infragistics account: npm login --scope=@infragistics --auth-type=legacy");
		}
		throw new Error(`Unable to get ${spec} from the registry: ${error.summary ?? message}`);
	}
}

/** `--verbose` diagnostic; only values computed here, never configuration or registry output */
function debug(verbose: boolean, message: string): void {
	if (verbose) {
		Util.log(message, "gray");
	}
}
