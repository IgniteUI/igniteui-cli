import {
	App, BaseTemplateManager, FEED_ANGULAR, getUpgradeablePackages, NPM_ANGULAR, ProjectConfig, TEMPLATE_MANAGER
} from "@igniteui/cli-core";
import { CheckResult, DoctorContext } from "./types";
import { allDependencies, installedVersion, parseVersion, satisfies } from "./util";

const GROUP = "Project";
const IGNITEUI_PACKAGE = /^(@infragistics\/|@igniteui\/|igniteui-|ignite-ui-)/;

export function checkConfig(): CheckResult {
	const id = "cli-config";
	const file = ProjectConfig.configFile;
	if (!ProjectConfig.hasLocalConfig()) {
		return { id, group: GROUP, status: "skip", detail: `No ${file}; the framework is detected from the project files` };
	}

	let framework: string | undefined;
	let projectType: string | undefined;
	try {
		const project = ProjectConfig.localConfig().project;
		framework = project?.framework;
		projectType = project?.projectType;
	} catch (error) {
		return { id, group: GROUP, status: "fail", detail: (error as Error).message, fix: `Fix the JSON in ${file}` };
	}

	const templateManager = App.container.get<BaseTemplateManager>(TEMPLATE_MANAGER);
	const library = framework ? templateManager.getProjectLibrary(framework.toLowerCase(), projectType) : null;
	if (!library) {
		return {
			id, group: GROUP, status: "fail",
			detail: `${file} has framework "${framework}" with project type "${projectType}", which the CLI doesn't know`,
			fix: `Set project.framework and project.projectType to a pair listed by "ig list"`
		};
	}
	return { id, group: GROUP, status: "ok", detail: `${file}: ${framework} / ${library.projectType}` };
}

export function checkPackageJson(context: DoctorContext): CheckResult {
	const id = "package-json";
	if (!context.hasPackageJson) {
		return { id, group: GROUP, status: "skip", detail: "No package.json" };
	}
	if (!context.packageJson) {
		return {
			id, group: GROUP, status: "fail",
			detail: `package.json doesn't parse: ${context.packageJsonError}`, fix: "Fix the JSON in package.json"
		};
	}
	return { id, group: GROUP, status: "ok", detail: "package.json parses" };
}

export function checkInstalledPackages(context: DoctorContext): CheckResult {
	const id = "packages-installed";
	const declared = Object.entries(allDependencies(context.packageJson!)).filter(([name]) => IGNITEUI_PACKAGE.test(name));
	if (!declared.length) {
		return { id, group: GROUP, status: "skip", detail: "No Ignite UI packages in package.json" };
	}

	const problems: string[] = [];
	for (const [name, range] of declared) {
		const version = installedVersion(name);
		if (!version) {
			problems.push(`${name} is not installed`);
		} else if (satisfies(version, range) === false) {
			problems.push(`${name} ${version} doesn't satisfy ${range}`);
		}
	}
	if (problems.length) {
		return { id, group: GROUP, status: "fail", detail: problems.join("; "), fix: "Run: npm install" };
	}
	return { id, group: GROUP, status: "ok", detail: `${declared.length} Ignite UI package(s) installed` };
}

export function checkMixedPackages(context: DoctorContext): CheckResult {
	const id = "packages-mixed";
	const licensed = Object.keys(allDependencies(context.packageJson!)).filter(name => name.startsWith("@infragistics/"));
	const trial = getUpgradeablePackages().map(x => x.trial);
	if (licensed.length && trial.length) {
		return {
			id, group: GROUP, status: "warn",
			detail: `Trial packages next to licensed ones: ${trial.join(", ")}`,
			fix: "Run: ig upgrade-packages"
		};
	}
	if (!licensed.length && !trial.length) {
		return { id, group: GROUP, status: "skip", detail: "No packages with a licensed version" };
	}
	return { id, group: GROUP, status: "ok", detail: licensed.length ? "Licensed packages only" : "Trial packages only" };
}

export function checkAngularMajor(context: DoctorContext): CheckResult | null {
	const dependencies = allDependencies(context.packageJson!);
	const igniteui = dependencies[FEED_ANGULAR] ? FEED_ANGULAR : NPM_ANGULAR;
	if (!dependencies[igniteui] || !dependencies["@angular/core"]) {
		return null;
	}

	const major = (name: string) => parseVersion(installedVersion(name) ?? dependencies[name])?.[0];
	const igniteuiMajor = major(igniteui);
	const angularMajor = major("@angular/core");
	const id = "angular-major";
	if (igniteuiMajor === undefined || angularMajor === undefined) {
		return { id, group: GROUP, status: "skip", detail: `Could not read the ${igniteui} and @angular/core versions` };
	}
	if (igniteuiMajor !== angularMajor) {
		return {
			id, group: GROUP, status: "warn",
			detail: `${igniteui} ${igniteuiMajor} with @angular/core ${angularMajor}`,
			fix: `Use the ${igniteui} major that matches Angular: ng update ${igniteui}`
		};
	}
	return { id, group: GROUP, status: "ok", detail: `${igniteui} and @angular/core are both on ${angularMajor}` };
}

export function projectChecks(context: DoctorContext): CheckResult[] {
	if (!context.inProject) {
		return [{ id: "project", group: GROUP, status: "skip", detail: "Not in a project folder" }];
	}

	const results = [checkConfig(), checkPackageJson(context)];
	if (context.packageJson) {
		results.push(checkInstalledPackages(context), checkMixedPackages(context));
		const angular = context.framework === "angular" ? checkAngularMajor(context) : null;
		if (angular) {
			results.push(angular);
		}
	}
	return results;
}
