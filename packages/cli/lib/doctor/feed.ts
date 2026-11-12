import { Util } from "@igniteui/cli-core";
import { CheckResult, DoctorContext } from "./types";
import { allDependencies, shell } from "./util";

const GROUP = "Licensed feed";
const NOT_LOGGED_IN = /ENEEDAUTH|E401|E403/;
const LICENSED_REGISTRY = "https://packages.infragistics.com/npm/js-licensed/";

export function feedChecks(context: DoctorContext): CheckResult[] {
	const usesFeed = !!context.packageJson &&
		Object.keys(allDependencies(context.packageJson)).some(name => name.startsWith("@infragistics/"));
	if (!usesFeed) {
		return [{ id: "feed", group: GROUP, status: "skip", detail: "The project uses no @infragistics packages" }];
	}

	const configured = shell.run("npm config get @infragistics:registry");
	const registry = configured && configured !== "undefined" ? Util.sanitizeShellArg(configured) : null;
	if (!registry) {
		return [{
			id: "feed-registry", group: GROUP, status: "fail",
			detail: "No registry is configured for the @infragistics scope",
			fix: `Run: npm config set @infragistics:registry ${LICENSED_REGISTRY}`
		}];
	}

	const results: CheckResult[] = [
		{ id: "feed-registry", group: GROUP, status: "ok", detail: `@infragistics packages come from ${registry}` }
	];
	if (context.offline) {
		results.push({ id: "feed-login", group: GROUP, status: "skip", detail: "Login not checked: --offline" });
		return results;
	}

	const login = shell.attempt(`npm whoami --registry=${registry}`, 15000);
	if (login.ok && login.output) {
		results.push({ id: "feed-login", group: GROUP, status: "ok", detail: `Logged in as ${login.output}` });
	} else if (NOT_LOGGED_IN.test(login.output)) {
		results.push({
			id: "feed-login", group: GROUP, status: "fail", detail: `Not logged in to ${registry}`,
			fix: `Run: npm login --registry=${registry} --scope=@infragistics`
		});
	} else {
		results.push({
			id: "feed-login", group: GROUP, status: "warn", detail: `Could not check the login to ${registry}`,
			fix: `Check the network connection, or run: npm whoami --registry=${registry}`
		});
	}
	return results;
}
