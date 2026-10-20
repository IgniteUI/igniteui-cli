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
}

export interface PackageManifest {
	dependencies?: Record<string, string>;
	peerDependencies?: Record<string, string>;
	engines?: Record<string, string>;
	deprecated?: string;
}

const upgradeable = (Object.keys(UPGRADEABLE_PACKAGES) as (keyof typeof UPGRADEABLE_PACKAGES)[])
	.filter(name => name !== NPM_ANGULAR);

/** Packages `ig update` may change; Angular goes through `ng update` instead. */
export const UPDATABLE_PACKAGES: ReadonlySet<string> = new Set([
	...upgradeable,
	...upgradeable.map(name => UPGRADEABLE_PACKAGES[name]),
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
export function getUpdatePlan(): PackageUpdate[] {
	const plan = getUpdateCandidates();
	for (const candidate of plan.filter(c => !c.skipped)) {
		const line = `^${candidate.baseline}`;
		const info = npmView(`${candidate.name} versions dist-tags`);
		// publish order, not semver order; a single version comes back as a string
		const target = semver.maxSatisfying([].concat(info.versions), line);
		if (!target) {
			candidate.skipped = `no published version matches "${line}"`;
			continue;
		}

		candidate.target = target;
		candidate.manifest = npmView(`${candidate.name}@${target}`);
		const latest = info["dist-tags"]?.latest;
		if (semver.valid(latest) && semver.gtr(latest, line)) {
			candidate.nextMajor = latest;
		}
	}
	return plan;
}

/** `npm view <args> --json`, with registry errors turned into actionable messages */
function npmView(args: string) {
	try {
		return JSON.parse(Util.execSync(`npm view ${args} --json`, { stdio: "pipe", encoding: "utf8" }).toString());
	} catch (err) {
		const { stdout, message } = err as Error & { stdout?: string };
		const spec = args.split(" ")[0];
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
