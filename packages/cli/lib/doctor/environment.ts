import * as path from "path";
import * as semver from "semver";
import { CheckResult, DoctorContext } from "./types";
import { majorOf, shell } from "./util";

const GROUP = "Environment";
const NODE_MINIMUM = 20;
const NODE_RECOMMENDED = 24;

export function checkNode(version = process.versions.node): CheckResult {
	const major = majorOf(version) ?? 0;
	const result: CheckResult = { id: "node", group: GROUP, status: "ok", detail: `Node.js ${version}` };
	if (major < NODE_MINIMUM) {
		result.status = "fail";
		result.fix = `Install Node.js ${NODE_RECOMMENDED} or newer (${NODE_MINIMUM} is the minimum)`;
	} else if (major < NODE_RECOMMENDED) {
		result.status = "warn";
		result.fix = `Node.js ${NODE_RECOMMENDED} or newer is recommended`;
	}
	return result;
}

export async function checkNpm(): Promise<CheckResult> {
	const version = await shell.run("npm --version");
	return version
		? { id: "npm", group: GROUP, status: "ok", detail: `npm ${version}` }
		: { id: "npm", group: GROUP, status: "fail", detail: "npm not found", fix: "Install npm (it ships with Node.js)" };
}

export async function checkGit(): Promise<CheckResult> {
	const version = await shell.run("git --version");
	return version
		? { id: "git", group: GROUP, status: "ok", detail: version }
		: {
			id: "git", group: GROUP, status: "warn", detail: "git not found",
			fix: `Install git, or pass --skip-git to "ig new"`
		};
}

export async function checkDotnet(): Promise<CheckResult> {
	const version = await shell.run("dotnet --version");
	return version
		? { id: "dotnet", group: GROUP, status: "ok", detail: `.NET SDK ${version}` }
		: {
			id: "dotnet", group: GROUP, status: "fail", detail: ".NET SDK not found",
			fix: "Install the .NET SDK from https://dotnet.microsoft.com/download"
		};
}

export async function checkCliVersion(context: DoctorContext): Promise<CheckResult> {
	const current: string = require(path.join(context.cliDir, "package.json")).version;
	const result: CheckResult = { id: "cli-version", group: GROUP, status: "ok", detail: `Ignite UI CLI ${current}` };
	if (context.offline) {
		return { ...result, status: "skip", detail: `${result.detail} (latest version not checked: --offline)` };
	}

	const latest = await shell.run("npm view igniteui-cli version", 15000);
	if (!latest || !semver.valid(latest) || !semver.valid(current)) {
		return { ...result, status: "skip", detail: `${result.detail} (could not read the latest version from npm)` };
	}
	if (semver.lt(current, latest)) {
		return {
			...result, status: "warn", detail: `${result.detail} (latest is ${latest})`,
			fix: "Update with: npm install -g igniteui-cli@latest"
		};
	}
	return { ...result, detail: `${result.detail} (latest)` };
}

export function environmentChecks(context: DoctorContext): Promise<CheckResult[]> {
	return Promise.all([
		checkNode(),
		checkNpm(),
		checkGit(),
		...(context.framework === "blazor" ? [checkDotnet()] : []),
		checkCliVersion(context)
	]);
}
