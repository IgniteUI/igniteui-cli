import {
	applyUpdatePlan, detectFrameworkFromPackageJson, getUpdatePlan, GoogleAnalytics, PackageUpdate, ProjectConfig,
	UPGRADEABLE_PACKAGES, Util
} from "@igniteui/cli-core";
import * as fs from "fs";
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

const command: UpdateCommandType = {
	command: "update",
	describe: "Updates Ignite UI package versions",
	builder: (yargs) => {
		return yargs
			.option("dry-run", {
				default: false,
				describe: "Show the update plan without changing any files",
				type: "boolean"
			})
			.option("skip-install", {
				alias: "si",
				default: false,
				describe: "Update package.json without installing packages",
				type: "boolean"
			});
	},
	async handler(argv: ArgumentsCamelCase<PositionalArgs>) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Update"
		});

		return command.update(argv);
	},
	async update(argv: ArgumentsCamelCase<PositionalArgs>) {
		const framework = (ProjectConfig.getConfig().project?.framework ?? detectFrameworkFromPackageJson())?.toLowerCase();
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

		switch (framework) {
			case "react":
			case "webcomponents":
				updatePackages(FRAMEWORK_NAMES[framework], !!argv.dryRun, !!argv.skipInstall);
				break;
			case "angular":
				Util.log("Updating Angular projects with ig update is not supported yet. Use ng update instead.");
				break;
			default:
				Util.log(`Updating ${framework} projects with ig update is not supported.`);
		}
	}
};

function updatePackages(frameworkName: string, dryRun: boolean, skipInstall: boolean): void {
	let plan: PackageUpdate[];
	try {
		plan = getUpdatePlan();
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

	printPlan(plan, `Ignite UI dependency update plan (${frameworkName}, ${pm ?? "package manager unknown"})`);
	if (!pm) {
		Util.warn(`Lockfiles of several package managers found (${managers.join(", ")}). ` +
			`Remove the stale ones or set "packageManager" in package.json.`, "yellow");
	}

	if (plan.some(c => c.conflict)) {
		Util.error("Nothing was updated because of the conflicts above.", "red");
		process.exitCode = 1;
		return;
	}
	const changes = plan.filter(c => c.newRange);
	if (!changes.length) {
		Util.log(plan.some(c => c.target) ? "Already up to date." : "Nothing to update.");
		return;
	}
	if (dryRun) {
		Util.log("Dry run: no files were changed.");
		return;
	}
	if (!pm && !skipInstall) {
		Util.error("Nothing was updated: unable to choose a package manager to install with.", "red");
		process.exitCode = 1;
		return;
	}

	warnUncommittedChanges();
	const backup = skipInstall ? undefined : readFiles(["package.json", ...LOCKFILES[pm]]);
	try {
		applyUpdatePlan(plan);
	} catch (error) {
		Util.error(error.message, "red");
		process.exitCode = 1;
		return;
	}

	if (skipInstall) {
		const next = pm ? `Run "${pm} install" to install them.` : "Run your package manager's install command to update the lockfile.";
		Util.log(`Updated ${changes.length} package(s) in package.json. ${next}`);
	} else {
		if (!install(pm, backup)) {
			return;
		}
		Util.log(`Updated ${changes.length} package(s). Next: run your build and tests.`);
	}
	if (plan.some(c => c.name in UPGRADEABLE_PACKAGES)) {
		Util.log("To switch to licensed packages, run ig upgrade-packages.");
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

function warnUncommittedChanges(): void {
	const files = ["package.json", ...Object.values(LOCKFILES).flat()];
	const result = Util.spawnSync("git", ["status", "--porcelain", "--", ...files], { encoding: "utf8" });
	// a non-zero status means no git or no repository, so there is nothing to protect
	if (result.status === 0 && result.stdout.toString().trim()) {
		Util.warn("package.json or a lockfile has uncommitted changes. Commit them first to review or revert the update easily.", "yellow");
	}
}

/** File contents as bytes (a binary bun.lockb must survive), or undefined for files that don't exist yet */
function readFiles(files: string[]): Map<string, Buffer | undefined> {
	return new Map(files.map((file): [string, Buffer | undefined] => [file, fs.existsSync(file) ? fs.readFileSync(file) : undefined]));
}

function install(pm: string, backup: Map<string, Buffer | undefined>): boolean {
	// pnpm and Yarn Berry keep the lockfile frozen in CI unless told otherwise; Yarn Classic ignores the variable
	const installCommand = pm === "pnpm" ? "pnpm install --no-frozen-lockfile" : `${pm} install`;
	Util.log(`Running "${installCommand}".`);
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
				} else {
					fs.rmSync(file, { force: true });
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

export default command;
