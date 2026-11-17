import { App, detectFramework, FS_TOKEN, IFileSystem, ProjectConfig } from "@igniteui/cli-core";
import * as path from "path";
import { aiChecks } from "./ai";
import { environmentChecks } from "./environment";
import { feedChecks } from "./feed";
import { projectChecks } from "./project";
import { CheckResult, DoctorContext } from "./types";
import { allDependencies, IGNITEUI_PACKAGE } from "./util";

export * from "./report";
export * from "./types";

export function createContext(offline: boolean): DoctorContext {
	const fileSystem = App.container.get<IFileSystem>(FS_TOKEN);
	const context: DoctorContext = {
		offline,
		cliDir: path.resolve(__dirname, "..", ".."),
		framework: detectFramework(false),
		inProject: false,
		hasPackageJson: fileSystem.fileExists("./package.json"),
		packageJson: null
	};
	if (context.hasPackageJson) {
		try {
			const parsed = JSON.parse(fileSystem.readFile("./package.json"));
			if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
				throw new Error("the content is not a JSON object");
			}
			context.packageJson = parsed;
		} catch (error) {
			context.packageJsonError = (error as Error).message;
		}
	}
	// a package.json that doesn't parse still counts, so the project checks get to report it
	const usesIgniteUI = context.hasPackageJson && (!context.packageJson
		|| Object.keys(allDependencies(context.packageJson)).some(name => IGNITEUI_PACKAGE.test(name)));
	context.inProject = usesIgniteUI || ProjectConfig.hasLocalConfig() || context.framework === "blazor";
	return context;
}

export async function runDoctor(offline: boolean): Promise<CheckResult[]> {
	const context = createContext(offline);
	const groups = await Promise.all([
		environmentChecks(context),
		projectChecks(context),
		feedChecks(context),
		aiChecks(context)
	]);
	return ([] as CheckResult[]).concat(...groups);
}
