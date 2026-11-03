import {
	applyUpdatePlan, coerceVersionNumber, detectFrameworkFromPackageJson, FEED_ANGULAR, getMigrationsCollection, getUpdatePlan,
	GoogleAnalytics, InquirerWrapper, isPackageName, isRegistrySpec, Migration, NPM_ANGULAR, NPM_CLI, PackageRequest, PackageUpdate,
	ProjectConfig, readMigrations, selectMigrations, UPGRADEABLE_PACKAGES, Util
} from "@igniteui/cli-core";
import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import * as resolve from "resolve";
import * as semver from "semver";
import { ArgumentsCamelCase } from "yargs";
import { PositionalArgs, UpdateCommandType } from "./types";
import { loadDevKit, runMigrations } from "./update-migrations";

const LOCKFILES: Record<string, string[]> = {
	npm: ["package-lock.json", "npm-shrinkwrap.json"],
	yarn: ["yarn.lock"],
	pnpm: ["pnpm-lock.yaml"],
	bun: ["bun.lock", "bun.lockb"]
};

const WEBCOMPONENTS_SIGNAL = /^(lit$|(@infragistics\/)?igniteui-(webcomponents|dockmanager))/;

type UpdateFlags = Record<"dryRun" | "skipInstall" | "force" | "allowDirty" | "verbose", boolean>;
type MigrateOptions = { migrateOnly: boolean; from?: string; to?: string; name?: string };

const command: UpdateCommandType = {
	command: "update [packages..]",
	describe: "Updates Ignite UI package versions",
	builder: (yargs) => {
		return yargs
			.positional("packages", {
				describe: "Packages to update: name, name@version, name@range or name@tag",
				type: "string",
				array: true
			})
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
				describe: "Proceed even if the project has uncommitted changes",
				type: "boolean"
			})
			.option("verbose", {
				default: false,
				describe: "Show version resolution and install details",
				type: "boolean"
			})
			.option("migrate-only", {
				describe: "Only run the migrations of an installed package, without changing versions",
				type: "boolean"
			})
			.option("from", {
				describe: "Version to run migrations from (requires --migrate-only)",
				type: "string",
				implies: ["migrate-only"]
			})
			.option("to", {
				describe: "Version to run migrations up to (requires --from); defaults to the installed version",
				type: "string",
				implies: ["from", "migrate-only"]
			})
			.option("name", {
				describe: "Run a single migration by name (implies --migrate-only)",
				type: "string",
				conflicts: ["from", "to"]
			})
			.epilog("React and Web Components:\n" +
				"  Without packages, updates direct Ignite UI dependencies within their current major version.\n" +
				"  With --migrate-only or --name, runs the migrations an installed package declares in \"ig-update\".\n\n" +
				"Angular:\n" +
				"  Runs the project's ng update for the given packages, or for the Ignite UI packages when none are given:\n" +
				"  installs their latest versions, including new majors, and applies migrations.");
	},
	async handler(argv: ArgumentsCamelCase<PositionalArgs>) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Update"
		});

		return command.update(argv);
	},
	async update(argv: ArgumentsCamelCase<PositionalArgs>) {
		const migrateOnly = !!(argv.migrateOnly || argv.name);
		const configured = ProjectConfig.getConfig().project?.framework;
		const framework = (configured ?? detectFrameworkFromPackageJson(!migrateOnly))?.toLowerCase();
		if (!framework) {
			return fail("No valid package.json found in the current directory.");
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
		const packages = argv.packages ?? [];
		const migrate: MigrateOptions = { migrateOnly, from: argv.from, to: argv.to, name: argv.name };
		if (configured || !migrateOnly || framework !== "webcomponents") {
			debug(flags.verbose, `Framework: ${framework} (${configured ? "from the project config" : "detected from package.json"})`);
		}
		if (migrate.migrateOnly && flags.skipInstall) {
			return fail("--skip-install can't be combined with --migrate-only or --name.");
		}
		if (migrate.migrateOnly && packages.length !== 1) {
			return fail("A single package must be specified when using --migrate-only or --name.");
		}
		switch (framework) {
			case "react":
			case "webcomponents":
				if (packages.length) {
					return updateSelected(packages, migrate, flags);
				}
				updatePackages(framework === "react" ? "React" : "Web Components", flags);
				break;
			case "angular":
				updateAngular(flags, packages, migrate);
				break;
			default:
				Util.log(`Updating ${framework} projects with ig update is not supported.`);
		}
	}
};

async function updateSelected(args: string[], migrate: MigrateOptions, flags: UpdateFlags): Promise<void> {
	let packages: PackageRequest[];
	try {
		packages = parsePackages(args);
	} catch (error) {
		return fail(error.message);
	}
	if (!migrate.migrateOnly) {
		// shortcut: selected-package updates need the new resolver; until it lands, fail instead of updating every package
		return fail("Updating selected packages isn't supported yet for React and Web Components projects. " +
			"Run ig update without packages, or use --migrate-only.");
	}
	return migrateOnly(packages[0], migrate, flags);
}

async function migrateOnly({ name, spec }: PackageRequest, migrate: MigrateOptions, flags: UpdateFlags): Promise<void> {
	if (spec) {
		Util.warn(`The version "${spec}" has no effect with --migrate-only.`, "yellow");
	}
	if (!flags.dryRun && !checkGit(flags.allowDirty)) {
		return;
	}
	const packageDir = path.join("node_modules", name);
	const manifest = path.join(packageDir, "package.json");
	if (!fs.existsSync(manifest)) {
		return fail(`Package ${name} is not installed.`);
	}
	let pkgJson;
	try {
		pkgJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
	} catch {
		return fail("No valid package.json found in the current directory.");
	}

	const framework = identifyFramework(pkgJson);
	let collection: string | undefined;
	let migrations: Migration[];
	try {
		collection = getMigrationsCollection(packageDir, framework);
		migrations = collection ? readMigrations(collection) : [];
	} catch (error) {
		return fail(`Unable to read the migrations of ${name}.`, error.message);
	}
	debug(flags.verbose, `Migrations: ${collection ?? "none"} (framework: ${framework ?? "not identified"})`);
	if (!collection) {
		return fail(`${name} doesn't provide migrations${framework ? ` for ${framework}` : ""}.`);
	}

	let required: Migration[];
	let optional: Migration[] = [];
	if (migrate.name) {
		required = migrations.filter(m => m.name === migrate.name);
		if (!required.length) {
			return fail(`${name} has no migration named "${migrate.name}".`);
		}
	} else if (!migrate.from) {
		return fail("--migrate-only needs --from <version>, or --name <migration>.");
	} else {
		const from = coerceVersionNumber(migrate.from);
		const to = coerceVersionNumber(migrate.to ?? JSON.parse(fs.readFileSync(manifest, "utf8")).version);
		if (!from || !to) {
			return fail(`"${from ? migrate.to : migrate.from}" is not a valid version.`);
		}
		({ required, optional } = selectMigrations(migrations, from, to));
		Util.log(`Migrations of ${name} from ${from} to ${to}:`);
	}
	if (!required.length && !optional.length) {
		Util.log("No migrations to run.");
		return;
	}
	if (flags.dryRun) {
		for (const m of [...required, ...optional]) {
			Util.log(`  ${m.name}${m.optional ? " (optional)" : ""}${m.description ? `: ${m.description}` : ""}`);
		}
		Util.log("Dry run: no files were changed.");
		return;
	}

	const managers = detectPackageManagers(pkgJson.packageManager);
	const pm = managers.length === 1 ? managers[0] : undefined;
	if (!await runAndReport(name, collection, required, pm)) {
		return;
	}
	const chosen = await chooseOptionalMigrations(name, optional);
	if (await runAndReport(name, collection, chosen, pm) && (required.length || chosen.length)) {
		Util.log("Migrations completed. Review the changes, then run your build and tests.");
	}
}

/** Runs the migrations and reports a failure with the commands to run the rest; true when all of them succeed */
async function runAndReport(name: string, collection: string, migrations: Migration[], pm: string | undefined): Promise<boolean> {
	if (!migrations.length) {
		return true;
	}
	try {
		await loadDevKit();
	} catch (error) {
		fail("Unable to load @angular-devkit/schematics to run the migrations.", error.message);
		return false;
	}
	const { completed, failed, notRun } = await runMigrations(collection, migrations, pm);
	if (failed) {
		const { name: failedName, version } = failed.migration;
		fail(`Migration ${failedName}${version ? ` (${version})` : ""} failed, and its changes weren't written.`, failed.error);
		for (const m of notRun) {
			Util.log(`Not run: ${m.name}. Run it with: ig update ${name} --name ${m.name}`);
		}
		if (completed.length) {
			Util.log("Review the changes of the completed migrations with git diff.");
		}
	}
	return !failed;
}

/** Prompts for the optional migrations to run, pre-selecting the recommended ones; without a terminal, lists their commands */
async function chooseOptionalMigrations(name: string, optional: Migration[]): Promise<Migration[]> {
	if (!optional.length) {
		return [];
	}
	if (!Util.canPrompt()) {
		Util.log(`To run the optional migrations of ${name}, use:`);
		for (const m of optional) {
			Util.log(`  ig update ${name} --name ${m.name}`);
		}
		return [];
	}
	const chosen = await InquirerWrapper.checkbox({
		message: `Select the optional migrations of ${name} to run`,
		choices: optional.map(m => ({ value: m.name, name: m.description ? `${m.name}: ${m.description}` : m.name, checked: m.recommended }))
	});
	return optional.filter(m => chosen.includes(m.name));
}

/** `@scope/pkg@^3` -> `@scope/pkg` and `^3` */
function splitPackage(arg: string): PackageRequest {
	const at = arg.lastIndexOf("@");
	return at > 0 ? { name: arg.slice(0, at), spec: arg.slice(at + 1) } : { name: arg };
}

/** Accepts registry versions, ranges and tags only, so aliases, files, links, workspaces, git and URLs are rejected */
function parsePackages(args: string[]): PackageRequest[] {
	const packages = args.map(splitPackage);
	packages.forEach(({ name, spec }, i) => {
		if (!isPackageName(name)) {
			throw new Error(`Invalid package name "${name}".`);
		}
		if (spec !== undefined && !isRegistrySpec(spec)) {
			throw new Error(`Unsupported version "${spec}" for ${name}: only registry versions, ranges and tags are supported.`);
		}
		if (packages.findIndex(p => p.name === name) !== i) {
			throw new Error(`Duplicate package "${name}".`);
		}
	});
	return packages;
}

/** The local config, else Angular, React, then Web Components dependencies; React apps depend on Web Components packages too */
function identifyFramework(pkgJson: { dependencies?: object; devDependencies?: object }): string | undefined {
	const configured = ProjectConfig.hasLocalConfig() ? ProjectConfig.localConfig().project?.framework : undefined;
	if (configured) {
		return configured.toLowerCase();
	}
	const deps = Object.keys({ ...pkgJson.dependencies, ...pkgJson.devDependencies });
	if (deps.includes("@angular/core")) {
		return "angular";
	}
	if (deps.includes("react")) {
		return "react";
	}
	return deps.some(dep => WEBCOMPONENTS_SIGNAL.test(dep)) ? "webcomponents" : undefined;
}

/** Stops on uncommitted changes in the project unless `allowDirty`; outside a git repository, only warns */
function checkGit(allowDirty: boolean): boolean {
	const status = Util.spawnSync("git", ["status", "--porcelain", "--", "."], { encoding: "utf8" });
	if (status.status !== 0) {
		Util.warn("Not a Git repository: review and revert the update's changes manually.", "yellow");
	} else if (status.stdout.toString().trim()) {
		if (!allowDirty) {
			fail("Uncommitted changes. Commit or stash them first, or rerun with --allow-dirty.");
			return false;
		}
		Util.warn("Uncommitted changes: the update's changes will be mixed with them.", "yellow");
	}
	return true;
}

function updatePackages(frameworkName: string, flags: UpdateFlags): void {
	let plan: PackageUpdate[];
	try {
		plan = getUpdatePlan({ force: flags.force, verbose: flags.verbose });
	} catch (error) {
		return fail(error.message);
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
		fail("Nothing was updated because of the conflicts above.");
		if (conflicts.every(c => c.overridable)) {
			Util.log("Rerun with --force to override these conflicts; the updated packages may then not work together.");
		}
		return;
	}
	const forced = plan.filter(c => c.forced).length;
	const changes = plan.filter(c => c.newRange);
	if (!changes.length) {
		if (forced) {
			Util.warn(`Nothing to update. The version requirements listed above for ${forced} Ignite UI package(s) remain unmet.`, "yellow");
		} else {
			Util.log(plan.some(c => c.target) && !plan.some(c => c.newest) ? "Already up to date." : "Nothing to update.");
		}
		return;
	}
	if (!pm && !flags.skipInstall && !flags.dryRun) {
		return fail("Nothing was updated: unable to choose a package manager to install with.");
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
	const backup = flags.skipInstall ? undefined : new Map(["package.json", ...LOCKFILES[pm]]
		.map(file => [file, fs.existsSync(file) ? fs.readFileSync(file) : undefined] as const));
	try {
		applyUpdatePlan(plan);
	} catch (error) {
		return fail(error.message);
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

function updateAngular(flags: UpdateFlags, packages: string[], migrate: MigrateOptions): void {
	if (flags.skipInstall) {
		const message = "--skip-install is not supported for Angular projects: ng update always installs dependencies.";
		if (!flags.dryRun) {
			return fail(message);
		}
		Util.warn(message, "yellow");
	}

	let deps: Record<string, string>;
	try {
		const pkgJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
		deps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
	} catch {
		return fail("No valid package.json found in the current directory.");
	}

	const igniteUI = [NPM_ANGULAR, FEED_ANGULAR].filter(name => name in deps);
	if (!packages.length && !igniteUI.length) {
		Util.log("No Ignite UI for Angular package found in package.json. Nothing to update.");
		return;
	}
	if (!packages.length && igniteUI.length > 1) {
		return fail(`Both ${NPM_ANGULAR} and ${FEED_ANGULAR} are listed in package.json. Remove one of them and rerun ig update.`);
	}

	const requested = packages.length ? packages : igniteUI;
	const names = requested.map(arg => splitPackage(arg).name);
	const igniteUIPackage = names.find(name => name === NPM_ANGULAR || name === FEED_ANGULAR);
	// they ship the Angular templates, whose versions follow igniteui-angular
	const companions = igniteUIPackage && !migrate.migrateOnly
		? [NPM_CLI, "@igniteui/angular-schematics"].filter(name => name in deps && !names.includes(name))
		: [];
	const options = Object.entries({
		"--force": flags.force, "--allow-dirty": flags.allowDirty, "--verbose": flags.verbose, "--migrate-only": migrate.migrateOnly
	}).filter(([, enabled]) => enabled).map(([option]) => option);
	const values = (["from", "to", "name"] as const).flatMap(key => migrate[key] ? [`--${key}`, migrate[key]] : []);
	const ngArgs = ["update", ...requested, ...companions, ...options, ...values];
	const versions = requested.some(arg => splitPackage(arg).spec) ? "the requested versions" : "their latest versions, including new majors";
	const description = `"ng ${ngArgs.join(" ")}" with the project's Angular CLI. ` +
		(migrate.migrateOnly
			? "It runs the package's migrations without changing versions."
			: `It updates these packages to ${versions}, applies their migrations and installs dependencies.`) +
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
		return fail("Angular CLI (@angular/cli) not found in this project. " +
			"Install dependencies first (for example, npm install) and rerun ig update.");
	}

	debug(flags.verbose, `Angular CLI: ${ngBin}`);
	Util.log(`Running ${description}`);
	const result = Util.spawnSync("node", [ngBin, ...ngArgs], { stdio: "inherit" });
	process.exitCode = result.status ?? 1;
	const updateTogether = `ng update @angular/core @angular/cli ${igniteUIPackage}`;
	if (result.error) {
		Util.error(`Unable to run the Angular CLI: ${result.error.message}`, "red");
	} else if (!igniteUIPackage || migrate.migrateOnly) {
		return;
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

	const upToDate = plan.filter(c => c.target && !c.newRange && !c.newest);
	if (upToDate.length) {
		Util.log(`Up to date: ${upToDate.map(c => `${c.name} ${c.target}`).join(", ")}`);
	}
	const heldBack = plan.filter(c => c.newest);
	if (heldBack.length) {
		Util.log("Held back by the version requirements between Ignite UI packages: " +
			heldBack.map(c => `${c.name} ${c.target} (${c.newest} available)`).join(", "));
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

function detectPackageManagers(packageManager: unknown): string[] {
	const named = typeof packageManager === "string" && /^(npm|yarn|pnpm|bun)(@|$)/.exec(packageManager)?.[1];
	if (named) {
		return [named];
	}
	const found = Object.keys(LOCKFILES).filter(pm => LOCKFILES[pm].some(file => fs.existsSync(file)));
	return found.length ? found : ["npm"];
}

function warnUncommittedChanges(verbose: boolean): void {
	const result = Util.spawnSync("git", ["status", "--porcelain", "--", "package.json", ...Object.values(LOCKFILES).flat()], { encoding: "utf8" });
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
	// an install that ends the process before it returns must not report success
	process.exitCode = 1;
	try {
		// not Util.execSync: it exits on statuses above 128, which npm also returns for system errors, skipping the rollback
		execSync(installCommand, { stdio: "inherit", env: { ...process.env, YARN_ENABLE_IMMUTABLE_INSTALLS: "false" } });
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

function fail(message: string, details?: string): void {
	Util.error(message, "red");
	if (details) {
		Util.warn(details, "red");
	}
	process.exitCode = 1;
}

/** `--verbose` diagnostic; only values computed here, never environment, configuration or registry details */
function debug(verbose: boolean, message: string): void {
	if (verbose) {
		Util.log(message, "gray");
	}
}

export default command;
