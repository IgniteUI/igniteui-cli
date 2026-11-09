import { debug, npmView, PackageManifest, Util } from "@igniteui/cli-core";
import * as fs from "fs";
import * as path from "path";
import * as semver from "semver";

// the first release with `ig update`; keep in sync with bin/execute.js
const RUNNER_MIN_VERSION = "16.0.0";

export function selectRunner(verbose: boolean): string | undefined {
	if (/^(1|true)$/i.test(process.env.IG_DISABLE_VERSION_CHECK || "")) {
		debug(verbose, "Skipped the igniteui-cli version check: IG_DISABLE_VERSION_CHECK is set.");
		return undefined;
	}
	if (fs.existsSync(path.join(__dirname, "update-runner.ts"))) {
		debug(verbose, "Skipped the igniteui-cli version check: repository build.");
		return undefined;
	}
	const running = Util.version(path.join(__dirname, "../../package.json"));
	let found: PackageManifest[];
	try {
		found = [].concat(npmView(`igniteui-cli@${semver.major(running)}`, ["name", "version", "engines"], verbose,
			["--fetch-retries=0", "--fetch-timeout=15000"]));
	} catch (error) {
		Util.warn(`${(error as Error).message} Continuing with igniteui-cli ${running}.`, "yellow");
		return undefined;
	}
	const newer = found
		.filter(m => semver.valid(m.version) && semver.gte(m.version, RUNNER_MIN_VERSION) && semver.gt(m.version, running))
		.sort((a, b) => semver.rcompare(a.version, b.version));
	const runner = newer.find(m => !m.engines?.node || semver.satisfies(process.version, m.engines.node));
	if (newer[0] !== runner) {
		debug(verbose, `Skipped igniteui-cli ${newer[0].version}: it requires Node.js ${newer[0].engines?.node} (running ${process.version}).`);
	}
	if (!runner) {
		debug(verbose, `No newer compatible igniteui-cli than ${running}.`);
	}
	return runner?.version;
}
