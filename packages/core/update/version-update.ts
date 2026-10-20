import * as semver from "semver";
import { FS_TOKEN, IFileSystem } from "../types";
import { App, Util } from "../util";
import {
	NPM_ANGULAR, NPM_CLI, NPM_GRID_LITE, NPM_REACT, NPM_WEBCOMPONENTS, UPGRADEABLE_PACKAGES
} from "./package-resolve";

/** A direct Ignite UI dependency of the project, as seen by `ig update`. */
export interface PackageUpdate {
	name: string;
	section: "dependencies" | "devDependencies";
	/** Spec as written in package.json, e.g. `~19.6.0` */
	declared: string;
	/** Version from `node_modules/<name>/package.json`, when installed */
	installed?: string;
	/** Version the update is computed from */
	baseline?: string;
	/** Why the package can't be updated */
	skipped?: string;
}

const upgradeable = Object.keys(UPGRADEABLE_PACKAGES).filter(name => name !== NPM_ANGULAR);

/** React and Web Components packages `ig update` may change. Angular is excluded - it goes through `ng update`. */
export const UPDATABLE_PACKAGES: ReadonlySet<string> = new Set([
	...upgradeable,
	...upgradeable.map(name => UPGRADEABLE_PACKAGES[name]),
	NPM_REACT,
	NPM_WEBCOMPONENTS,
	NPM_GRID_LITE,
	NPM_CLI
]);

/**
 * Specs with a usable baseline: exact, `^`, `~` and x-range, e.g. `19.6.0`, `^19.6.0`, `~19.6.0-rc.1`, `19.x`, `19`.
 * Complex ranges (`||`, `<`, `>=`, `a - b`), tags, protocols and urls are skipped.
 */
const SIMPLE_SPEC = /^[\^~]?\d+(\.(\d+|[xX*])){0,2}(-[0-9A-Za-z.-]+)?$/;

/** Package an `overrides`/`resolutions` key targets, e.g. `parent/@scope/pkg@^1.0.0` -> `@scope/pkg` */
const OVERRIDE_TARGET = /(?:^|\/)((?:@[^/@]+\/)?[^/@]+)(?:@[^/]*)?$/;

/**
 * Collects the project's direct Ignite UI dependencies with their declared range, installed version and baseline.
 * @throws when `package.json` is missing or invalid
 */
export function getUpdateCandidates(): PackageUpdate[] {
	const fs = App.container.get<IFileSystem>(FS_TOKEN);
	if (!fs.fileExists("./package.json")) {
		throw new Error("No package.json found in the current directory.");
	}

	let pkgJson;
	try {
		pkgJson = JSON.parse(fs.readFile("./package.json"));
	} catch (err) {
		throw new Error(`Unable to parse package.json: ${err.message}`);
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
