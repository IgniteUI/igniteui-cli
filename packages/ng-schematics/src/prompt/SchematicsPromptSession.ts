import { SchematicContext, Tree } from "@angular-devkit/schematics";
import { IgniteUIForAngularTemplate } from "@igniteui/angular-templates";
import {
	BasePromptSession, BaseTemplateManager, Framework,
	IUserInputOptions, ProjectConfig, ProjectLibrary, ProjectTemplate, PromptTaskContext, Task
} from "@igniteui/cli-core";
import { of } from "rxjs";
import { TemplateOptions } from "../component/schema";

export class SchematicsPromptSession extends BasePromptSession {

	public tree: Tree;
	public context: SchematicContext;
	public projectName: string;
	public userAnswers: Map<string, any>;

	constructor(
		templateManager: BaseTemplateManager) {
		super(templateManager);
		this.config = ProjectConfig.getConfig();
	}

	public setContext(context: SchematicContext, tree: Tree, projectName: string) {
		this.context = context;
		this.tree = tree;
		this.projectName = projectName;
		this.userAnswers = new Map<string, any>();
	}

	public async getUserInput(options: IUserInputOptions, withBackChoice: boolean = false): Promise<string> {
		return super.getUserInput(options, withBackChoice);
	}

	public async getProjectLibrary(framework: Framework): Promise<ProjectLibrary> {
		return super.getProjectLibrary(framework);
	}

	public async getProjectTemplate(projectLibrary: ProjectLibrary): Promise<ProjectTemplate> {
		return super.getProjectTemplate(projectLibrary);
	}

	public async getTheme(projectLibrary: ProjectLibrary): Promise<string> {
		return super.getTheme(projectLibrary);
	}

	public nameIsValid(name: string, checkFolder = true): boolean {
		return super.nameIsValid(name, checkFolder);
	}

	protected completeAndRun(_port?: number) {
		// TODO?
	}

	protected async upgradePackages() {
		this.userAnswers.set("upgradePackages", true);
	}

	protected templateSelectedTask(type: "component" | "view" = "component"): Task<PromptTaskContext> {
		return async (_runner, context) => {
			if (!context.template) {
				return false;
			}
			const name = await this.chooseTemplateName(context.template, type);
			if (context.template.hasExtraConfiguration) {
				await this.customizeTemplateTask(context.template);
			}

			const options: TemplateOptions = {
				name,
				projectName: this.projectName,
				templateInst: context.template as IgniteUIForAngularTemplate
			};
			const schematic = this.context.schematic.collection.createSchematic("single-component");
			await schematic.call(options, of(this.tree), this.context).toPromise();
			return true;
		};
	}

}
