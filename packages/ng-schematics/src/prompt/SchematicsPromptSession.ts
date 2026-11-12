import { callRule, SchematicContext, Tree } from "@angular-devkit/schematics";
import type { FileSystemSchematicDescription } from "@angular-devkit/schematics/tools";
import { IgniteUIForAngularTemplate } from "@igniteui/angular-templates";
import {
	BasePromptSession, Framework,
	type UserInputOptions, ProjectConfig, ProjectLibrary, ProjectTemplate, PromptTaskContext, Task
} from "@igniteui/cli-core";
import { lastValueFrom } from "rxjs";
import { TemplateOptions } from "../component/schema";

export class SchematicsPromptSession extends BasePromptSession {

	public tree!: Tree;
	public context!: SchematicContext;
	public projectName!: string;
	public userAnswers!: Map<string, any>;

	constructor() {
		super();
		this.config = ProjectConfig.getConfig();
	}

	public setContext(context: SchematicContext, tree: Tree, projectName: string) {
		this.context = context;
		this.tree = tree;
		this.projectName = projectName;
		this.userAnswers = new Map<string, any>();
	}

	public async getUserInput(
		options: Exclude<UserInputOptions, { type: "checkbox" }>,
		withBackChoice: boolean = false,
	): Promise<string> {
		return super.getUserInput(options, withBackChoice);
	}

	public async getProjectLibrary(framework: Framework): Promise<ProjectLibrary> {
		return super.getProjectLibrary(framework);
	}

	public async getProjectLibraryByType(framework: Framework, type: string): Promise<ProjectLibrary> {
		type = type === "igx-ts" ? type : "igx-ts";
		// narrow down projectLibraries so required option is auto-selected:
		framework.projectLibraries = [framework.projectLibraries.find(lib => lib.projectType === type)!];
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

	protected async complete() {
		// No-op: package installation is managed by the Angular CLI schematic runner
	}

	protected async configureAI(_frameworkId: string): Promise<void> {
		// No-op in schematics context
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
			// not `schematic.call`: from Angular CLI 22 its options transform copies the options with `structuredClone`,
			// which leaves `templateInst` a plain object without the template's methods; the rule runs in the
			// single-component schematic's own context, as `call` would, so its template `url`s resolve from there
			const rule = (schematic.description as FileSystemSchematicDescription).factoryFn(options);
			await lastValueFrom(callRule(rule, this.tree, this.context.engine.createContext(schematic, this.context)));
			return true;
		};
	}

}
