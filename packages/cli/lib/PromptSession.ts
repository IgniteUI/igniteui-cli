import {
	BasePromptSession, Framework, InquirerWrapper, PackageManager,
	ProjectLibrary, PromptTaskContext, Task, Util
} from "@igniteui/cli-core";
import { default as add } from "./commands/add";
import { configure as aiConfigure } from "./commands/ai-config";
import { default as start } from "./commands/start";
import { default as upgrade } from "./commands/upgrade";

export class PromptSession extends BasePromptSession {

	public static async chooseTerm(): Promise<string> {
		const answer = await InquirerWrapper.input({
			message: "Enter a search term",
		});
		if (answer) {
			return answer;
		} else {
			return this.chooseTerm();
		}
	}

	protected override async getProjectLibrary(framework: Framework): Promise<ProjectLibrary> {
		const result = await super.getProjectLibrary(framework);
		if (framework.name === "Angular" && result.projectType === "igx-ts") {
			Util.log("Psst! Did you know you can also use our schematics package with Angular CLI to create and modify your projects?", "yellow");
			Util.log("Read more at: https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/cli-overview", "yellow");
		}
		return result;
	}

	protected override async completeAndRun(port?: number) {
		await PackageManager.flushQueue(true);
		await start.start({ port });
	}

	protected override async upgradePackages() {
		await upgrade.upgrade({ skipInstall: true, _: ["upgrade"], $0: "upgrade" });
	}

	protected override async configureAI(frameworkId: string): Promise<void> {
		await aiConfigure(frameworkId);
	}

	protected override templateSelectedTask(type: "component" | "view" = "component"): Task<PromptTaskContext> {
		return async (_runner, context) => {
			const name = await this.chooseTemplateName(context.template!, type);
			if (context.template!.hasExtraConfiguration) {
				await this.customizeTemplateTask(context.template!);
			}
			const res = await add.addTemplate(name, context.template!);
			return res;
		};
	}
}
