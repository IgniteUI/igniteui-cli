import {
	applyUpdatePlan, detectFrameworkFromPackageJson, FEED_ANGULAR, getUpdatePlan, GoogleAnalytics, NPM_ANGULAR, NPM_CLI,
	PackageUpdate, ProjectConfig, UPGRADEABLE_PACKAGES, Util
} from "@igniteui/cli-core";
import * as fs from "fs";
import * as resolve from "resolve";
import * as semver from "semver";
import { ArgumentsCamelCase } from "yargs";
import { PositionalArgs, UpdateCommandType } from "./types";

const FRAMEWORK_NAMES: Record<string, string> = {
	react: "React",
	webcomponents: "Web Components"
};

const LOCKFILES: Record<string, string[]> = {
	npm: ["package-lock.json", "npm-shrinkwrap.json"],
	yarn: ["yarn.lock"],
	pnpm: ["pnpm-lock.yaml"],
	bun: ["bun.lock", "bun.lockb"]
};

type UpdateFlags = Record<"dryRun" | "skipInstall" | "force" | "allowDirty" | "verbose", boolean>;

const command: UpdateCommandType = {
	command: "update",
	describe: "Updates Ignite UI package versions",
	builder: (yargs) => {
		return yargs
			.option("dry-run", {
				default: false,
				describe: "Preview the update without changing any files",
				type: "boolean"
			})
			.option("skip-install", {
				alias: "si",
				default: false,
				describe: "Update package.json without installing (not supported for Angular)",
				type: "boolean"
			})
			.option("force", {
				default: false,
				describe: "Apply updates despite version conflicts between Ignite UI packages",
				type: "boolean"
			})
			.option("allow-dirty", {
				default: false,
				describe: "Allow uncommitted changes without a warning",
				type: "boolean"
			})
			.option("verbose", {
				default: false,
				describe: "Show version resolution and install details",
				type: "boolean"
			})
			.epilog("React and Web Components:\n" +
				"  Updates direct Ignite UI dependencies within their current major version. No migrations are applied.\n\n" +
				"Angular:\n" +
				"  Runs the project's ng update for the Ignite UI packages: installs their latest versions,\n" +
				"  including new majors, and applies migrations.");
	},
	async handler(argv: ArgumentsCamelCase<PositionalArgs>) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Update"
		});

		return command.update(argv);
	},
	async update(argv: ArgumentsCamelCase<PositionalArgs>) {
		const configured = ProjectConfig.getConfig().project?.framework;
		const framework = (configured ?? detectFrameworkFromPackageJson())?.toLowerCase();
		if (!framework) {
			Util.error("No valid package.json found in the current directory.", "red");
			process.exitCode = 1;
			return;
		}

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig update",
			cd1: framework
		});

		const flags: UpdateFlags = {
			dryRun: !!argv.dryRun,
			skipInstall: !!argv.skipInstall,
			force: !!argv.force,
			allowDirty: !!argv.allowDirty,
			verbose: !!argv.verbose
		};
		debug(flags.verbose, `Framework: ${framework} (${configured ? "from the project config" : "detected from package.json"})`);
		switch (framework) {
			case "react":
			case "webcomponents":
				updatePackages(FRAMEWORK_NAMES[framework], flags);
				break;
			case "angular":
				updateAngular(flags);
				break;
			default:
				Util.log(`Updating ${framework} projects with ig update is not supported.`);
		}
	}
};

function updatePackages(frameworkName: string, flags: UpdateFlags): void {
	let plan: PackageUpdate[];
	try {
		plan = getUpdatePlan({ force: flags.force, verbose: flags.verbose });
	} catch (error) {
		Util.error(error.message, "red");
		process.exitCode = 1;
		return;
	}
	if (!plan.length) {
		Util.log("No Ignite UI packages found in package.json.");
		return;
	}

	const pkgJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
	if (pkgJson.workspaces) {
		Util.warn("package.json defines workspaces. Only the root package.json is updated.", "yellow");
	}
	const managers = detectPackageManagers(pkgJson.packageManager);
	const pm = managers.length === 1 ? managers[0] : undefined;
	const lockfiles = Object.values(LOCKFILES).flat().filter(file => fs.existsSync(file));
	debug(flags.verbose, `Package manager: ${managers.join(", ")} (packageManager field ${pkgJson.packageManager ? "set" : "not set"}; ` +
		`lockfiles: ${lockfiles.join(", ") || "none"})`);

	printPlan(plan, `Ignite UI dependency update plan (${frameworkName}, ${pm ?? "package manager unknown"})`);
	if (!pm) {
		Util.warn(`Lockfiles of several package managers found (${managers.join(", ")}). ` +
			`Remove the stale ones or set "packageManager" in package.json.`, "yellow");
	}

	const conflicts = plan.filter(c => c.conflict);
	if (conflicts.length) {
		Util.error("Nothing was updated because of the conflicts above.", "red");
		if (conflicts.every(c => c.overridable)) {
			Util.log("Rerun with --force to override these conflicts; the updated packages may then not work together.");
		}
		process.exitCode = 1;
		return;
	}
	const forced = plan.filter(c => c.forced).length;
	const changes = plan.filter(c => c.newRange);
	if (!changes.length) {
		if (forced) {
			Util.warn(`Nothing to update. The version requirements listed above for ${forced} Ignite UI package(s) remain unmet.`, "yellow");
		} else {
			Util.log(plan.some(c => c.target) ? "Already up to date." : "Nothing to update.");
		}
		return;
	}
	if (!pm && !flags.skipInstall && !flags.dryRun) {
		Util.error("Nothing was updated: unable to choose a package manager to install with.", "red");
		process.exitCode = 1;
		return;
	}
	if (forced) {
		Util.warn(`--force overrides the version requirements of ${forced} Ignite UI package(s); ` +
			"the updated packages may not work together. Run your build and tests.", "yellow");
	}
	if (flags.dryRun) {
		if (flags.force && pm && !flags.skipInstall) {
			Util.log(`Would run "${getInstallCommand(pm, true)}".`);
		}
		Util.log("Dry run: no files were changed.");
		return;
	}

	if (flags.allowDirty) {
		debug(flags.verbose, "Uncommitted changes not checked (--allow-dirty).");
	} else {
		warnUncommittedChanges(flags.verbose);
	}
	const backup = flags.skipInstall ? undefined : readFiles(["package.json", ...LOCKFILES[pm]]);
	try {
		applyUpdatePlan(plan);
	} catch (error) {
		Util.error(error.message, "red");
		process.exitCode = 1;
		return;
	}

	if (flags.skipInstall) {
		const next = pm
			? `Run "${pm} install${pm === "npm" && flags.force ? " --force" : ""}" to install them.`
			: `Run your package manager's install command to update the lockfile.${flags.force ? " With npm, add --force." : ""}`;
		Util.log(`Updated ${changes.length} package(s) in package.json. ${next}`);
	} else {
		if (!install(pm, backup, flags)) {
			return;
		}
		Util.log(`Updated ${changes.length} package(s). Next: run your build and tests.`);
	}
	if (plan.some(c => c.name in UPGRADEABLE_PACKAGES)) {
		Util.log("To switch to licensed packages, run ig upgrade-packages.");
	}
}

/** Delegates to the project's own `ng update`, which resolves versions, installs and runs the packages' migrations */
function updateAngular(flags: UpdateFlags): void {
	if (flags.skipInstall) {
		const message = "--skip-install is not supported for Angular projects: ng update always installs dependencies.";
		if (!flags.dryRun) {
			Util.error(message, "red");
			process.exitCode = 1;
			return;
		}
		Util.warn(message, "yellow");
	}

	let deps: Record<string, string>;
	try {
		const pkgJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
		deps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
	} catch {
		Util.error("No valid package.json found in the current directory.", "red");
		process.exitCode = 1;
		return;
	}

	const igniteUI = [NPM_ANGULAR, FEED_ANGULAR].filter(name => name in deps);
	if (!igniteUI.length) {
		Util.log("No Ignite UI for Angular package found in package.json. Nothing to update.");
		return;
	}
	if (igniteUI.length > 1) {
		Util.error(`Both ${NPM_ANGULAR} and ${FEED_ANGULAR} are listed in package.json. Remove one of them and rerun ig update.`, "red");
		process.exitCode = 1;
		return;
	}

	const options = Object.entries({ "--force": flags.force, "--allow-dirty": flags.allowDirty, "--verbose": flags.verbose })
		.filter(([, enabled]) => enabled).map(([option]) => option);
	// these also ship ng-update migrations, so they move in the same ng update call
	const ngArgs = ["update", ...igniteUI, ...[NPM_CLI, "@igniteui/angular-schematics"].filter(name => name in deps), ...options];
	const description = `"ng ${ngArgs.join(" ")}" with the project's Angular CLI. ` +
		"It updates these packages to their latest versions, including new majors, applies their migrations " +
		"and installs dependencies." +
		(flags.force ? " ng update doesn't stop on incompatible peer dependencies, so Angular packages can end up on incompatible versions." : "") +
		(flags.allowDirty ? " It runs even with uncommitted changes." : " In a git repository, it stops if the project has uncommitted changes.");
	if (flags.dryRun) {
		Util.log(`Would run ${description}`);
		Util.log("Dry run: no files were changed.");
		return;
	}

	let ngBin: string;
	try {
		ngBin = resolve.sync("@angular/cli/bin/ng", { basedir: process.cwd() });
	} catch {
		Util.error("Angular CLI (@angular/cli) not found in this project. " +
			"Install dependencies first (for example, npm install) and rerun ig update.", "red");
		process.exitCode = 1;
		return;
	}

	debug(flags.verbose, `Angular CLI: ${ngBin}`);
	Util.log(`Running ${description}`);
	const result = Util.spawnSync("node", [ngBin, ...ngArgs], { stdio: "inherit" });
	process.exitCode = result.status ?? 1;
	const updateTogether = `ng update @angular/core @angular/cli ${igniteUI[0]}`;
	if (result.error) {
		Util.error(`Unable to run the Angular CLI: ${result.error.message}`, "red");
	} else if (result.status !== 0) {
		Util.warn(`If ng update reported incompatible peer dependencies, update Angular and Ignite UI together: ${updateTogether}`, "yellow");
	} else if (flags.force) {
		Util.warn("--force let ng update continue despite incompatible peer dependencies; any it found are listed above. " +
			"If it updated anything, Angular packages may now be on incompatible versions, for example @angular/core on a newer major than @angular/cli. " +
			"Run your build and tests. If the build fails, update Angular and Ignite UI together " +
			`(in a git repository, commit the changes first or add --allow-dirty): ${updateTogether}`, "yellow");
	}
}

function printPlan(plan: PackageUpdate[], title: string): void {
	Util.log(title);
	Util.log("No code migrations are applied. Minor and patch releases can still change behavior or deprecate APIs. " +
		"Review the changelogs, then run your build and tests.");

	const changes = plan.filter(c => c.newRange);
	const labels = changes.map(c => c.section === "devDependencies" ? `${c.name} (dev)` : c.name);
	const width = Math.max(...labels.map(label => label.length));
	changes.forEach((c, i) => {
		Util.log(`  ${labels[i].padEnd(width)}  ${c.installed ?? "not installed"} -> ${c.target}  (${c.declared} -> ${c.newRange})`);
		if (c.manifest?.deprecated) {
			Util.warn(`    deprecated: ${c.manifest.deprecated}`, "yellow");
		}
		const node = c.manifest?.engines?.node;
		if (node && semver.validRange(node) && !semver.satisfies(process.version, node)) {
			Util.warn(`    requires Node.js ${node}, running ${process.version}`, "yellow");
		}
	});

	const upToDate = plan.filter(c => c.target && !c.newRange);
	if (upToDate.length) {
		Util.log(`Up to date: ${upToDate.map(c => `${c.name} ${c.target}`).join(", ")}`);
	}
	for (const c of plan.filter(c => c.skipped)) {
		Util.warn(`Skipped ${c.name}: ${c.skipped}`, "yellow");
	}
	for (const c of plan.filter(c => c.forced)) {
		Util.warn(`Overridden by --force for ${c.name}: ${c.forced}`, "yellow");
	}
	for (const c of plan.filter(c => c.nested)) {
		Util.warn(`Not met by ${c.name} ${c.newRange ?? c.declared}: ${c.nested}. The requiring packages may get a separate copy of ` +
			`${c.name}; check that the copies work together at runtime.`, "yellow");
	}
	for (const c of plan.filter(c => c.conflict)) {
		Util.log(`Conflict in ${c.name}: ${c.conflict}`, "red");
	}
	const majors = plan.filter(c => c.nextMajor);
	if (majors.length) {
		Util.log("Newer major available (not applied; breaking changes are not migrated automatically): " +
			majors.map(c => `${c.name} ${c.nextMajor}`).join(", "));
	}
}

/** The manager named in the `packageManager` field, else every manager with a lockfile, else npm */
function detectPackageManagers(packageManager: unknown): string[] {
	const named = typeof packageManager === "string" && /^(npm|yarn|pnpm|bun)(@|$)/.exec(packageManager)?.[1];
	if (named) {
		return [named];
	}
	const found = Object.keys(LOCKFILES).filter(pm => LOCKFILES[pm].some(file => fs.existsSync(file)));
	return found.length ? found : ["npm"];
}

function warnUncommittedChanges(verbose: boolean): void {
	const files = ["package.json", ...Object.values(LOCKFILES).flat()];
	const result = Util.spawnSync("git", ["status", "--porcelain", "--", ...files], { encoding: "utf8" });
	// a non-zero status means no git or no repository, so there is nothing to protect
	if (result.status !== 0) {
		debug(verbose, "Uncommitted changes not checked: no git repository, or git not found.");
		return;
	}
	const changes = result.stdout.toString().trim();
	debug(verbose, `Uncommitted changes: ${changes.split(/\s*\n\s*/).join(", ") || "none"}`);
	if (changes) {
		Util.warn("package.json or a lockfile has uncommitted changes. Commit them first to review or revert the update easily.", "yellow");
	}
}

/** File contents as bytes (a binary bun.lockb must survive), or undefined for files that don't exist yet */
function readFiles(files: string[]): Map<string, Buffer | undefined> {
	return new Map(files.map((file): [string, Buffer | undefined] => [file, fs.existsSync(file) ? fs.readFileSync(file) : undefined]));
}

/** npm is the only manager that fails on peer conflicts by default; the others' --force refetches or rebuilds instead */
function getInstallCommand(pm: string, force: boolean): string {
	if (pm === "pnpm") {
		return "pnpm install --no-frozen-lockfile";
	}
	return pm === "npm" && force ? "npm install --force" : `${pm} install`;
}

function install(pm: string, backup: Map<string, Buffer | undefined>, flags: UpdateFlags): boolean {
	// pnpm and Yarn Berry keep the lockfile frozen in CI unless told otherwise; Yarn Classic ignores the variable
	const installCommand = getInstallCommand(pm, flags.force);
	Util.log(`Running "${installCommand}".`);
	debug(flags.verbose, `Backed up ${[...backup.keys()].filter(file => backup.get(file)).join(", ")}; ` +
		"installing with YARN_ENABLE_IMMUTABLE_INSTALLS=false.");
	// Util.execSync exits the process when the install is interrupted, which must not report success
	process.exitCode = 1;
	try {
		Util.execSync(installCommand, { stdio: "inherit", env: { ...process.env, YARN_ENABLE_IMMUTABLE_INSTALLS: "false" } });
		process.exitCode = 0;
		return true;
	} catch {
		const notRestored: string[] = [];
		for (const [file, content] of backup) {
			try {
				if (content) {
					fs.writeFileSync(file, content);
					debug(flags.verbose, `Restored ${file}.`);
				} else if (fs.existsSync(file)) {
					fs.rmSync(file, { force: true });
					debug(flags.verbose, `Removed ${file}, created by the failed install.`);
				}
			} catch {
				notRestored.push(file);
			}
		}
		const hadLockfile = LOCKFILES[pm].some(file => backup.get(file));
		const restored = notRestored.length
			? `Could not restore ${notRestored.join(", ")}; restore them from version control`
			: `Restored package.json${hadLockfile ? " and the lockfile" : ""}`;
		const resync = pm === "npm" && hadLockfile ? "npm ci" : `${pm} install`;
		Util.error(`"${installCommand}" failed. ${restored}; node_modules may be partially updated, run "${resync}" to resync it.`, "red");
		return false;
	}
}

/** `--verbose` diagnostic; only values computed here, never environment, configuration or registry details */
function debug(verbose: boolean, message: string): void {
	if (verbose) {
		Util.log(message, "gray");
	}
}

export default command;
