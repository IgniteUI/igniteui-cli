import { debug, npmCommand, npmView, PackageManifest, Util } from "@igniteui/cli-core";
import { spawnSync } from "child_process";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as semver from "semver";

// the first release with `ig update`; keep in sync with bin/execute.js
const RUNNER_MIN_VERSION = "16.0.0";
const PACKAGE_JSON = path.join(__dirname, "../../package.json");

export function selectRunner(verbose: boolean): string | undefined {
	if (/^(1|true)$/i.test(process.env.IG_DISABLE_VERSION_CHECK || "")) {
		debug(verbose, "Skipped the igniteui-cli version check: IG_DISABLE_VERSION_CHECK is set.");
		return undefined;
	}
	if (fs.existsSync(path.join(__dirname, "update-runner.ts"))) {
		debug(verbose, "Skipped the igniteui-cli version check: repository build.");
		return undefined;
	}
	const running = Util.version(PACKAGE_JSON);
	let cache: string | undefined;
	let found: PackageManifest[];
	try {
		cache = fs.mkdtempSync(path.join(os.tmpdir(), "igniteui-cli-lookup-"));
		found = [].concat(npmView(`igniteui-cli@${semver.major(running)}`, ["name", "version", "engines"], verbose,
			["--fetch-retries=0", "--fetch-timeout=15000", "--cache", cache]));
	} catch (error) {
		Util.warn(`${(error as Error).message} Continuing with igniteui-cli ${running}.`, "yellow");
		return undefined;
	} finally {
		if (cache) {
			remove(cache, verbose);
		}
	}
	const newer = found
		.filter(m => semver.valid(m.version) && semver.gte(m.version, RUNNER_MIN_VERSION) && semver.gt(m.version, running))
		.sort((a, b) => semver.rcompare(a.version, b.version));
	const runner = newer.find(m => !m.engines?.node || semver.satisfies(process.version, m.engines.node, { includePrerelease: true }));
	if (newer[0] !== runner) {
		debug(verbose, `Skipped igniteui-cli ${newer[0].version}: it requires Node.js ${newer[0].engines?.node} (running ${process.version}).`);
	}
	if (!runner) {
		debug(verbose, `No newer compatible igniteui-cli than ${running}.`);
	}
	return semver.valid(runner?.version) ?? undefined;
}

export function runTemporaryCli(version: string, verbose: boolean): number {
	const running = Util.version(PACKAGE_JSON);
	Util.log(`igniteui-cli ${version} is available (running ${running}). Installing it temporarily to run this update…`);
	// Ctrl+C reaches npm or the new CLI, which end; this process stays to clean up
	const ignore = () => {};
	process.on("SIGINT", ignore);
	let dir: string | undefined;
	try {
		dir = fs.mkdtempSync(path.join(os.tmpdir(), "igniteui-cli-update-"));
		fs.writeFileSync(path.join(dir, "package.json"), JSON.stringify({ name: "igniteui-cli-update-runner", private: true }));
		const args = ["install", `igniteui-cli@${version}`, "--prefix", dir, "--no-save", "--no-package-lock", "--no-audit", "--no-fund",
			"--ignore-scripts", "--include=optional", "--loglevel=error"];
		const [command, commandArgs, shellOptions] = npmCommand(args);
		debug(verbose, `npm ${args.join(" ")}`);
		const npmrc = path.join(dir, ".npmrc");
		if (fs.existsSync(".npmrc")) {
			fs.copyFileSync(".npmrc", npmrc);
		}
		const install = spawnSync(command, commandArgs, { ...shellOptions, stdio: ["ignore", "ignore", "inherit"] });
		fs.rmSync(npmrc, { force: true });
		if (install.status !== 0) {
			throw install.error ?? new Error(`npm install ended with ${install.signal ?? `exit code ${install.status}`}.`);
		}
		const packageDir = path.join(dir, "node_modules", "igniteui-cli");
		const bin = JSON.parse(fs.readFileSync(path.join(packageDir, "package.json"), "utf8")).bin?.ig;
		if (typeof bin !== "string") {
			throw new Error(`igniteui-cli ${version} has no "ig" command.`);
		}
		const child = spawnSync(process.execPath, [path.join(packageDir, bin), ...process.argv.slice(2)],
			{ stdio: "inherit", env: { ...process.env, IG_DISABLE_VERSION_CHECK: "1", IG_CLI_ANALYTICS: "false" } });
		if (child.error) {
			return fail(`Couldn't start igniteui-cli ${version}.`, child.error.message, running);
		}
		return child.status ?? 1;
	} catch (error) {
		return fail(`Couldn't install igniteui-cli ${version} to run this update.`, (error as Error).message, running);
	} finally {
		if (dir) {
			remove(dir, verbose);
		}
		process.removeListener("SIGINT", ignore);
	}
}

function remove(dir: string, verbose: boolean): void {
	try {
		fs.rmSync(dir, { recursive: true, force: true, maxRetries: 3 });
	} catch (error) {
		debug(verbose, `Unable to remove ${dir}: ${(error as Error).message}`);
	}
}

function fail(message: string, details: string, running: string): number {
	Util.error(message, "red");
	Util.warn(details, "red");
	Util.log(`To run this update with igniteui-cli ${running} instead, set IG_DISABLE_VERSION_CHECK=1 and rerun the command.`);
	return 1;
}
