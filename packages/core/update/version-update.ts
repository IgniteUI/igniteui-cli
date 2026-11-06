import { execFile, spawnSync } from "child_process";
import { existsSync } from "fs";
import * as jsonc from "jsonc-parser";
import * as path from "path";
import * as semver from "semver";
import { FS_TOKEN, IFileSystem } from "../types";
import { App, ProjectConfig, Util } from "../util";
import { isObject } from "./migrations";
import { NPM_ANGULAR, UPDATE_GROUPS, UPGRADEABLE_PACKAGES } from "./package-resolve";

export interface PackageRequest {
	name: string;
	spec?: string;
}

/** A direct dependency of the project, as seen by `ig update`. */
export interface PackageUpdate {
	name: string;
	section: "dependencies" | "devDependencies";
	declared: string;
	installed?: string;
	/** Version the update is computed from */
	baseline?: string;
	skipped?: string;
	/** Versions `target` is chosen from, for messages */
	line?: string;
	/** Version to update to, within `line`; equals `baseline` when up to date */
	target?: string;
	/** Registry metadata of `target` */
	manifest?: PackageManifest;
	/** `latest` dist-tag above the requested range; reported, never applied */
	nextMajor?: string;
	/** Newest version in `line` when other packages hold `target` below it; reported, never applied */
	newest?: string;
	/** Set with `newest`: the packages and requirements that hold `target` below it */
	heldBackBy?: { name: string; reason: string }[];
	/** Spec to write to package.json; unset when nothing changes */
	newRange?: string;
	/** Unresolvable constraint between the planned packages; blocks the update */
	conflict?: string;
	/** Set on conflicts: whether `--force` would override every conflict and update package.json */
	overridable?: boolean;
	/** Ranges left unmet by `--force`; reported, never blocks */
	forced?: string;
	/** Dependency (not peer) ranges left unmet, so the package manager may install a separate copy; reported, never blocks */
	nested?: string;
}

export interface PackageManifest {
	version: string;
	dependencies?: Record<string, string>;
	peerDependencies?: Record<string, string>;
	engines?: Record<string, string>;
	deprecated?: string;
	"ig-update"?: { packageGroup?: unknown; migrations?: unknown };
}

export interface AvailableUpdate {
	name: string;
	baseline: string;
	latest: string;
}

type Requirement = { range: string; peer: boolean; group?: boolean };
type Constraint = Requirement & { requiredBy: string; from: string };
type Requirer = Pick<PackageUpdate, "name" | "target" | "manifest">;

const COUNTERPART = new Map(Object.entries(UPGRADEABLE_PACKAGES)
	.filter(([trial]) => trial !== NPM_ANGULAR)
	.flatMap(([trial, licensed]) => [[trial, licensed], [licensed, trial]] as const));

const withCounterpart = (name: string): string[] => COUNTERPART.has(name) ? [name, COUNTERPART.get(name)!] : [name];

export const UPDATABLE_PACKAGES: ReadonlySet<string> = new Set(UPDATE_GROUPS.flat().flatMap(withCounterpart));

const SIMPLE_SPEC = /^[\^~]?\d+(\.(\d+|[xX*])){0,2}(-[0-9A-Za-z.-]+)?$/;

/** Package an overrides/resolutions key targets: `parent/@scope/pkg@^1.0.0` -> `@scope/pkg` */
const OVERRIDE_TARGET = /(?:^|\/)((?:@[^/@]+\/)?[^/@]+)(?:@[^/]*)?$/;

/** npm's rules for new package names; names can't start with `-`, so they can't pass as options */
const PACKAGE_NAME = /^(@[a-z0-9][a-z0-9._-]*\/)?[a-z0-9][a-z0-9._-]*$/;
const DIST_TAG = /^[a-z][a-z0-9._-]*$/;

export function isPackageName(name: string): boolean {
	return PACKAGE_NAME.test(name) && name.length <= 214;
}

/** Registry versions, ranges and tags; aliases, files, links, workspaces, git and URLs aren't */
export function isRegistrySpec(spec: string): boolean {
	return !!spec && (!!semver.validRange(spec) || DIST_TAG.test(spec));
}

export function splitPackage(arg: string): PackageRequest {
	const at = arg.lastIndexOf("@");
	return at > 0 ? { name: arg.slice(0, at), spec: arg.slice(at + 1) } : { name: arg };
}

/** The direct dependencies in `names`; throws for a name that isn't a direct dependency */
export function getUpdateCandidates(names: string[]): PackageUpdate[] {
	const pkgJson = readPackageJson();
	const direct = Object.keys({ ...pkgJson.dependencies, ...pkgJson.devDependencies });
	const missing = names.find(name => !direct.includes(name));
	if (missing) {
		const counterpart = COUNTERPART.get(missing);
		throw new Error(`Package "${missing}" is not a dependency` +
			(counterpart && direct.includes(counterpart) ? `; the project uses ${counterpart}.` : "."));
	}

	const overridden = new Set([...Object.keys(pkgJson.overrides ?? {}), ...Object.keys(pkgJson.resolutions ?? {})]
		.map(key => OVERRIDE_TARGET.exec(key)?.[1]));
	const candidates: PackageUpdate[] = [];

	for (const section of ["dependencies", "devDependencies"] as const) {
		const deps: Record<string, string> = pkgJson[section] ?? {};
		for (const name of Object.keys(deps).filter(dep => names.includes(dep))) {
			const declared = deps[name];
			const installed = readInstalled(name)?.version;
			const candidate: PackageUpdate = { name, section, declared, installed };
			const minVersion = SIMPLE_SPEC.test(declared) && semver.validRange(declared) && semver.minVersion(declared);

			if (!minVersion) {
				candidate.skipped = `unsupported spec "${declared}" (only exact, ^, ~ and x-range versions are supported)`;
			} else if (installed && !semver.valid(installed)) {
				throw new Error(`Invalid version "${installed}" in node_modules/${name}/package.json. ` +
					"Reinstall the project's dependencies and run the update again.");
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

/** Plans the `requests` with their groups and needed peers; throws when the registry can't be queried */
export function getUpdatePlan({ requests, force = false, verbose = false }:
	{ requests: PackageRequest[]; force?: boolean; verbose?: boolean }): PackageUpdate[] {
	const fields = ["version", "dependencies", "peerDependencies", "deprecated", "engines", "ig-update"];
	const lines = new Map<PackageUpdate, PackageManifest[]>();
	const published = new Map<string, string[]>();

	const resolveLines = (candidates: PackageUpdate[]) => {
		for (const c of candidates) {
			const baseline = c.skipped
				? `skipped: ${c.skipped}`
				: `baseline ${c.baseline} (${c.baseline === c.installed ? "installed version" : "declared minimum"})`;
			debug(verbose, `${c.name} (${c.section}): declared ${c.declared}, installed ${c.installed ?? "none"}, ${baseline}`);
		}

		for (const candidate of candidates.filter(c => !c.skipped)) {
			const baseline = candidate.baseline!;
			const info = npmView(candidate.name, ["versions", "dist-tags"], verbose);
			const versions: string[] = [].concat(info.versions ?? []);
			const tags = info["dist-tags"] ?? {};
			const latest = semver.valid(tags.latest);
			const spec = requests.find(r => r.name === candidate.name)?.spec;
			const newest = latest ?? semver.maxSatisfying(versions, "*");
			const range = spec === undefined
				? `>=${baseline} <=${newest && semver.gt(newest, baseline) ? newest : baseline}`
				: semver.validRange(spec) ? spec : semver.valid(tags[spec]);
			if (!range) {
				candidate.skipped = `"${spec}" is not a version, range or dist-tag of ${candidate.name}`;
				continue;
			}
			const min = semver.minVersion(range);
			candidate.line = `"${spec ?? range}"` + (min && semver.lt(min, baseline) ? ` at or above ${baseline}` : "");
			const inLine = versions.filter(v => semver.satisfies(v, range) && semver.gte(v, baseline));
			if (!inLine.length) {
				candidate.skipped = `no published version matches ${candidate.line}`;
				continue;
			}
			if (spec !== undefined && latest && semver.gtr(latest, range)) {
				candidate.nextMajor = latest;
			}
			// versions with none of the fields come back as plain strings
			const manifests: (PackageManifest | string)[] = [].concat(npmView(`${candidate.name}@${range}`, fields, verbose));
			lines.set(candidate, manifests
				.map(m => typeof m === "string" ? { version: m } : m)
				.filter(m => inLine.includes(m.version))
				.sort((a, b) => semver.rcompare(a.version, b.version)));
			published.set(candidate.name, versions);
			debug(verbose, `${candidate.name}: ${lines.get(candidate)!.length} version(s) in ${candidate.line}, latest ${tags.latest ?? "none"}` +
				(candidate.nextMajor ? " (outside the requested range, not applied)" : ""));
		}
	};

	const plan = getUpdateCandidates(requests.map(r => r.name));
	resolveLines(plan);
	const pkgJson = readPackageJson();
	const direct = Object.keys({ ...pkgJson.dependencies, ...pkgJson.devDependencies });
	const installed = new Map(direct.map(name => [name, readInstalled(name)] as const));
	const asUnchanged = (name: string): Requirer => {
		const { version, peerDependencies } = installed.get(name)!;
		return { name, target: version, manifest: { version, peerDependencies } };
	};
	const required = new Set(requests.map(r => r.name));
	// like ng update: group members join, and so do the peers the newest versions need that the installed versions don't satisfy
	for (let added = plan; added.length;) {
		const planned = plan.map(c => c.name);
		const newest = added.filter(c => lines.has(c)).map(c => ({ manifest: lines.get(c)![0], group: groupOf(c.name, lines.get(c)![0]) }));
		newest.forEach(({ group }) => group.forEach(member => required.add(member)));
		const joins = (dep: string) => newest.some(({ manifest, group }) => group.includes(dep) ||
			requirements(manifest, dep).some(r => r.peer && !semver.satisfies(installed.get(dep)?.version ?? "", r.range)));
		added = getUpdateCandidates(direct.filter(dep => !planned.includes(dep) && joins(dep)));
		resolveLines(added);
		plan.push(...added);
	}

	const unchanged = direct.filter(name => !plan.some(c => c.name === name && !c.skipped));
	const fixed = unchanged.filter(name => installed.get(name)).map(asUnchanged);
	debug(verbose && fixed.length < unchanged.length,
		`Peer dependencies not checked, not installed: ${unchanged.filter(name => !installed.get(name)).join(", ")}`);

	const updates = plan.filter(c => !c.skipped);
	let unneeded: PackageUpdate[] = [];
	const unplanned = fixed.filter(f => !plan.some(c => c.name === f.name));
	alignTargets(updates, lines, fixed, unplanned);
	if (updates.every(u => u.target)) {
		unneeded = updates.filter(u => !required.has(u.name) && u.installed === u.baseline);
		for (let size = -1; size !== unneeded.length;) {
			size = unneeded.length;
			const moving = updates.filter(u => !unneeded.includes(u));
			const sources = [...moving, ...fixed, ...unneeded.map(peer => asUnchanged(peer.name))];
			unneeded = unneeded.filter(peer => constraintsOn(peer, sources).every(c => semver.satisfies(peer.installed!, c.range)) &&
				moving.every(u => constraintsOn(u, [asUnchanged(peer.name)]).every(c => semver.satisfies(u.target!, c.range)) &&
					constraintsOn(u, [peer]).every(c => semver.satisfies(lines.get(u)![0].version, c.range))));
		}
		for (const peer of unneeded) {
			debug(verbose, `${peer.name}: the targets accept the installed ${peer.installed}, left unchanged`);
			updates.splice(updates.indexOf(peer), 1);
			plan.splice(plan.indexOf(peer), 1);
			fixed.push(asUnchanged(peer.name));
		}
	}
	settleTargets(updates, lines, published, fixed, unplanned, force);
	for (const update of updates.filter(u => u.target && u.target !== lines.get(u)![0].version)) {
		update.newest = lines.get(update)![0].version;
		update.heldBackBy = heldBackBy(update, updates, lines, fixed, unneeded);
	}
	if (verbose) {
		for (const update of updates.filter(u => u.target)) {
			const constraints = constraintsOn(update, [...updates, ...fixed]);
			debug(verbose, `${update.name}: target ${update.target} (newest in ${update.line}: ${update.newest ?? update.target}), ` +
				`range ${update.declared} -> ${update.newRange ?? update.declared}` +
				(constraints.length ? `, requirements: ${formatConstraints(constraints)}` : "") +
				(update.heldBackBy?.length ? `; held back by ${update.heldBackBy.map(b => b.reason).join(", ")}` : ""));
		}
	}
	for (const skipped of plan.filter(c => c.skipped)) {
		for (const { range, from } of constraintsOn(skipped, updates)) {
			Util.warn(`${from} requires ${skipped.name}@${range}, which is not checked because ${skipped.name} is skipped.`, "yellow");
		}
	}
	return plan;
}

export async function discoverUpdates(verbose = false): Promise<{ updates: AvailableUpdate[]; failures: string[] }> {
	const pkgJson = readPackageJson();
	const direct = Object.keys({ ...pkgJson.dependencies, ...pkgJson.devDependencies });
	for (const name of direct.filter(dep => !isPackageName(dep))) {
		Util.warn(`Skipped "${name}": not a valid package name.`, "yellow");
	}
	const failures: string[] = [];
	// one at a time, so a broken install doesn't hide the others; first entry only, as a package can be in both sections
	const candidates = direct.filter(isPackageName).flatMap(name => {
		try {
			return getUpdateCandidates([name]).slice(0, 1);
		} catch (error) {
			failures.push((error as Error).message);
			return [];
		}
	});
	for (const { name, skipped } of candidates.filter(c => c.skipped)) {
		debug(verbose, `${name}: not checked, ${skipped}`);
	}

	const checked = candidates.filter(c => !c.skipped);
	const latest: (PackageManifest | Error)[] = [];
	let next = 0;
	await Promise.all(Array.from({ length: Math.min(8, checked.length) }, async () => {
		while (next < checked.length) {
			const i = next++;
			latest[i] = await npmViewAsync(`${checked[i].name}@latest`, ["version", "ig-update"], verbose)
				.then(m => typeof m === "string" ? { version: m } : m, (error: Error) => error);
		}
	}));

	const updates: AvailableUpdate[] = [];
	const listed = new Set<string>();
	checked.forEach(({ name, baseline }, i) => {
		const manifest = latest[i];
		if (manifest instanceof Error) {
			failures.push(manifest.message);
		} else if (!semver.valid(manifest.version)) {
			failures.push(`Unable to get ${name}@latest from the registry: the response has no valid version.`);
		} else if (semver.gt(manifest.version, baseline!) && !listed.has(name) &&
			(manifest["ig-update"] || UPDATABLE_PACKAGES.has(name))) {
			groupOf(name, manifest).forEach(member => listed.add(member));
			updates.push({ name, baseline: baseline!, latest: manifest.version });
		}
	});
	return { updates: updates.sort((a, b) => a.name.localeCompare(b.name)), failures };
}

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

/** Picks each target as the newest version meeting every peer range and the most dependency ranges, until stable */
function alignTargets(updates: PackageUpdate[], lines: Map<PackageUpdate, PackageManifest[]>, fixed: Requirer[], unplanned: Requirer[]): void {
	const sources = [...updates, ...fixed];
	let changed = true;
	for (let pass = 0; changed && pass <= updates.length; pass++) {
		changed = false;
		for (const update of updates) {
			const constraints = constraintsOn(update, sources);
			const metCount = (m: PackageManifest) => constraints.filter(c => semver.satisfies(m.version, c.range)).length;
			const meetsPeers = lines.get(update)!.filter(m => constraints.every(c => !c.peer || semver.satisfies(m.version, c.range)) &&
				!missedPeers(m, unplanned).length);
			const most = Math.max(...meetsPeers.map(metCount));
			const allowed = meetsPeers.filter(m => metCount(m) === most);
			// lookahead: prefer a version whose requirements each other package can meet together with its remaining constraints
			const rest = updates.filter(other => other !== update);
			const restSources = [...rest, ...fixed];
			const manifest = allowed.find(m => rest.every(other => {
				const ranges = lookaheadConstraints(other, restSources, lines).map(c => c.range);
				return requirements(m, other.name).every(({ range }) => lines.get(other)!.some(o =>
					[range, ...ranges].every(r => semver.satisfies(o.version, r))));
			})) ?? allowed[0];
			if (manifest?.version !== update.target) {
				update.target = manifest?.version;
				update.manifest = manifest;
				changed = true;
			}
		}
	}
}

function settleTargets(updates: PackageUpdate[], lines: Map<PackageUpdate, PackageManifest[]>, published: Map<string, string[]>,
	fixed: Requirer[], unplanned: Requirer[], force: boolean): void {
	const sources = [...updates, ...fixed];
	for (const update of updates) {
		const target = update.target;
		const constraints = constraintsOn(update, sources);
		const peers = constraints.filter(c => c.peer);
		// `satisfies` (unlike `subset`) tolerates invalid ranges, which then end up here as conflicts
		if (!target || !peers.every(c => semver.satisfies(target, c.range))) {
			const installed = new Set(lines.get(update)!.filter(m => peers.every(c => semver.satisfies(m.version, c.range)))
				.flatMap(m => missedPeers(m, unplanned)));
			update.conflict = `no version in ${update.line} satisfies ${formatConstraints(peers)}` +
				(installed.size ? ` and works with the installed ${[...installed].map(f => `${f.name}@${f.target}`).join(", ")}` : "");
			update.target = update.manifest = undefined;
		} else {
			update.newRange = rangeToWrite(update, target, constraints, published.get(update.name)!, lines.get(update)!);
		}
	}

	if (force) {
		forceConflicts(updates, lines, published, fixed);
	} else if (updates.some(u => u.conflict)) {
		// --force is only suggested when it would update package.json, so try it on a copy
		const trial = updates.map(u => ({ ...u }));
		forceConflicts(trial, new Map(trial.map((t, i) => [t, lines.get(updates[i])!])), published, fixed);
		const overridable = !trial.some(t => t.conflict) && trial.some(t => t.newRange);
		for (const update of updates.filter(u => u.conflict)) {
			update.overridable = overridable;
		}
	}

	for (const update of updates.filter(u => u.target)) {
		const unmet = constraintsOn(update, sources).filter(c => !c.peer && !meets(update, c));
		if (unmet.length) {
			update.nested = formatConstraints(unmet);
		}
	}
}

function lookaheadConstraints(update: PackageUpdate, sources: Requirer[], lines: Map<PackageUpdate, PackageManifest[]>): Constraint[] {
	return constraintsOn(update, sources).filter(c => c.peer || lines.get(update)!.some(m => semver.satisfies(m.version, c.range)));
}

function missedPeers(manifest: PackageManifest, unchanged: Requirer[]): Requirer[] {
	return unchanged.filter(f => requirements(manifest, f.name).some(r => r.peer && !r.group && !semver.satisfies(f.target!, r.range)));
}

function heldBackBy(update: PackageUpdate, updates: PackageUpdate[], lines: Map<PackageUpdate, PackageManifest[]>,
	fixed: Requirer[], unchanged: PackageUpdate[]): { name: string; reason: string }[] {
	const newest = lines.get(update)![0];
	const rest = updates.filter(other => other !== update);
	return [
		...constraintsOn(update, [...updates, ...fixed])
			.filter(c => semver.satisfies(update.target!, c.range) && !semver.satisfies(newest.version, c.range))
			.map(c => ({ name: c.requiredBy, reason: formatConstraints([c]) })),
		...[...rest, ...unchanged].flatMap(other => requirements(newest, other.name).flatMap(({ range }) => {
			const line = lines.get(other)!;
			const requires = `${newest.version} requires ${other.name}@${range}`;
			if (!line.some(m => semver.satisfies(m.version, range))) {
				return [{ name: other.name, reason: `${requires}, outside ${other.line}` }];
			}
			const constraints = lookaheadConstraints(other, [...rest, ...fixed], lines);
			const satisfiable = (ranges: Constraint[]) => line.some(m => [range, ...ranges.map(c => c.range)].every(r => semver.satisfies(m.version, r)));
			const alone = constraints.filter(c => !satisfiable([c]));
			const together = alone.length || satisfiable(constraints) ? []
				: constraints.reduce((set, c) => satisfiable(set.filter(s => s !== c)) ? set : set.filter(s => s !== c), constraints);
			return [...alone, ...together].map(c => ({ name: c.requiredBy, reason: `${requires}, which conflicts with ${formatConstraints([c])}` +
				(together.length ? ` together with ${formatConstraints(together.filter(t => t !== c))}` : "") }));
		}))
	];
}

function forceConflicts(updates: PackageUpdate[], lines: Map<PackageUpdate, PackageManifest[]>, published: Map<string, string[]>,
	fixed: Requirer[]): void {
	const sources = [...updates, ...fixed];
	const conflicted = updates.filter(u => u.conflict);
	for (const update of conflicted) {
		update.manifest = lines.get(update)![0];
		update.target = update.manifest.version;
		update.conflict = undefined;
	}
	// chosen once every forced target is known, so the package order doesn't matter
	for (const update of conflicted) {
		update.newRange = rangeToWrite(update, update.target!, constraintsOn(update, sources), published.get(update.name)!, lines.get(update)!);
	}

	// collected before any package loses its target to a new conflict
	const unmet = updates.map(update => constraintsOn(update, sources).filter(c => c.peer && !meets(update, c)));
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

function rangeToWrite(update: PackageUpdate, target: string, constraints: Constraint[], versions: string[],
	line: PackageManifest[]): string | undefined {
	// npm may install any version in the range: it must fit every met constraint and allow nothing newer; groups only align targets
	const met = constraints.filter(c => !c.group && semver.satisfies(target, c.range));
	const fitsAll = (range: string, among: string[]) => met.every(c => fits(range, c.range)) && semver.maxSatisfying(among, range) === target;
	if (target === update.baseline && fitsAll(update.declared, line.map(m => m.version))) {
		return undefined;
	}
	return [rangeOperator(update.declared) + target, `~${target}`, target].find(range => fitsAll(range, versions));
}

function meets(update: PackageUpdate, { range, group }: Constraint): boolean {
	return semver.satisfies(update.target!, range) && (!!group || fits(update.newRange ?? update.declared, range));
}

/** `semver.subset`, which without `includePrerelease` rejects even `7.5.0-rc.2` within `^7.5.0-rc.1` */
function fits(range: string, constraint: string): boolean {
	return semver.subset(range, constraint, { includePrerelease: true });
}

function formatConstraints(constraints: { range: string; from: string }[]): string {
	return constraints.map(c => `${c.range} (required by ${c.from})`).join(", ");
}

function constraintsOn(update: PackageUpdate, sources: Requirer[]): Constraint[] {
	return sources.filter(other => other !== update).flatMap(other => requirements(other.manifest, update.name)
		.map(requirement => ({ ...requirement, requiredBy: other.name, from: `${other.name}@${other.target}` })));
}

function requirements(manifest: PackageManifest | undefined, name: string): Requirement[] {
	const peers = manifest?.peerDependencies ?? {};
	const deps: Record<string, string> = { ...manifest?.dependencies, ...peers };
	const group = packageGroup(manifest) ?? {};
	const matches = (dep: string) => dep === name || COUNTERPART.get(dep) === name;
	return [
		...Object.keys(deps).filter(matches).map(dep => ({ range: deps[dep], peer: dep in peers })),
		...Object.keys(group).filter(matches).map(member => ({ range: group[member], peer: true, group: true }))
	];
}

function packageGroup(manifest: PackageManifest | undefined): Record<string, string> | undefined {
	const group = manifest?.["ig-update"]?.packageGroup;
	const members = Array.isArray(group) && group.every(m => typeof m === "string") ? Object.fromEntries(group.map(m => [m, manifest!.version])) : group;
	return isObject(members) && Object.values(members).every(r => typeof r === "string") ? members : undefined;
}

function groupOf(name: string, manifest: PackageManifest): string[] {
	const metadata = packageGroup(manifest);
	if (!metadata && manifest["ig-update"]?.packageGroup !== undefined) {
		Util.warn(`Ignoring the invalid "ig-update" packageGroup of ${name}.`, "yellow");
	}
	const members = metadata ? Object.keys(metadata) : UPDATE_GROUPS.find(group => group.flatMap(withCounterpart).includes(name)) ?? [];
	return members.flatMap(withCounterpart);
}

function rangeOperator(declared: string): string {
	const min = semver.minVersion(declared)!.version;
	return ["^", "~"].find(op => semver.validRange(op + min) === semver.validRange(declared)) ?? "";
}

function npmView(spec: string, fields: string[], verbose: boolean) {
	return parseView(spec, spawnSync(...npmViewCommand(spec, fields, verbose)));
}

async function npmViewAsync(spec: string, fields: string[], verbose: boolean) {
	return parseView(spec, await new Promise<NpmResult>(resolve => execFile(...npmViewCommand(spec, fields, verbose), (error, stdout, stderr) =>
		resolve(typeof error?.code === "number" ? { status: error.code, stdout, stderr } : { status: error ? null : 0, stdout, stderr, error }))));
}

type NpmResult = { status: number | null; stdout: string; stderr: string; error?: Error | null };

function parseView(spec: string, result: NpmResult) {
	let json;
	try {
		json = JSON.parse(result.stdout);
	} catch { /* npm missing or non-JSON output */ }
	if (result.status === 0 && json) {
		return json;
	}

	const error: { code?: string; summary?: string } = json?.error ?? {};
	const message = `Unable to get ${spec} from the registry: ` +
		(error.summary ?? result.error?.message ?? (result.stderr?.trim() || "unexpected output from npm"));
	if (spec.startsWith("@infragistics/")) {
		const feed = ProjectConfig.getConfig().igPackageRegistry;
		const login = `npm login --scope=@infragistics --registry=${feed} --auth-type=legacy`;
		const auth = `npm has no valid credentials for the Infragistics feed. Log in with your Infragistics account: ${login}`;
		const hints: Record<string, string | undefined> = {
			E404: "npm may not be using the Infragistics feed for @infragistics packages. " +
				`Check that .npmrc has "@infragistics:registry=${feed}" and that your account has access to this package.`,
			E401: auth,
			ENEEDAUTH: auth,
			E403: "The Infragistics feed denied access. Check that your account has access to this package, " +
				`and log in again if its credentials changed: ${login}`
		};
		const hint = hints[error.code ?? ""];
		if (hint) {
			throw new Error(`${message}\n${hint}`);
		}
	}
	throw new Error(message);
}

function npmViewCommand(spec: string, fields: string[], verbose: boolean): [string, string[], { encoding: "utf8"; maxBuffer: number; shell?: boolean }] {
	debug(verbose, `npm view "${spec}" ${fields.join(" ")}`);
	const request = splitPackage(spec);
	if (!isPackageName(request.name) || request.spec !== undefined && !isRegistrySpec(request.spec)) {
		throw new Error(`Invalid package "${spec}".`);
	}
	const args = ["view", spec, ...fields, "--json"];
	// a large package's version line can exceed the 1 MiB default
	const options = { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 } as const;
	if (process.platform !== "win32") {
		return ["npm", args, options];
	}
	// npm.cmd only runs in a shell, so run npm's CLI script with this Node.js
	const script = path.join(path.dirname(process.execPath), "node_modules", "npm", "bin", "npm-cli.js");
	if (existsSync(script)) {
		return [process.execPath, [script, ...args], options];
	}
	// arguments are validated specs or constants, quoted for cmd.exe (`^`, `<`, `>`); joined, as Node.js deprecates args with `shell`
	return [["npm", ...args.map(arg => `"${arg}"`)].join(" "), [], { ...options, shell: true }];
}

function readPackageJson() {
	const fs = App.container.get<IFileSystem>(FS_TOKEN);
	if (!fs.fileExists("./package.json")) {
		throw new Error("No package.json found in the current directory.");
	}
	try {
		return JSON.parse(fs.readFile("./package.json"));
	} catch (err) {
		throw new Error(`Unable to parse package.json: ${(err as Error).message}`);
	}
}

function readInstalled(name: string): PackageManifest | undefined {
	const fs = App.container.get<IFileSystem>(FS_TOKEN);
	const manifestPath = `node_modules/${name}/package.json`;
	if (!fs.fileExists(manifestPath)) {
		return undefined;
	}
	try {
		return JSON.parse(fs.readFile(manifestPath));
	} catch (err) {
		throw new Error(`Unable to parse ${manifestPath}: ${(err as Error).message}. Reinstall the project's dependencies and run the update again.`);
	}
}

/** `--verbose` output: only computed values, never environment, configuration or registry details */
export function debug(verbose: boolean, message: string): void {
	if (verbose) {
		Util.log(message, "gray");
	}
}
