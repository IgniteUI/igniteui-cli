import { App, detectFramework, FS_TOKEN, IFileSystem, ProjectConfig } from "@igniteui/cli-core";
import * as path from "path";
import { aiChecks } from "./ai";
import { environmentChecks } from "./environment";
import { feedChecks } from "./feed";
import { projectChecks } from "./project";
import { CheckResult, DoctorContext } from "./types";

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
			context.packageJson = JSON.parse(fileSystem.readFile("./package.json"));
		} catch (error) {
			context.packageJsonError = (error as Error).message;
		}
	}
	context.inProject = context.hasPackageJson || ProjectConfig.hasLocalConfig() || context.framework === "blazor";
	return context;
}

export function runDoctor(offline: boolean): CheckResult[] {
	const context = createContext(offline);
	return [
		...environmentChecks(context),
		...projectChecks(context),
		...feedChecks(context),
		...aiChecks(context)
	];
}
